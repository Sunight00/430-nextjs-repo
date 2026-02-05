import { auth } from '@/auth';

import Fonts from '../font';
import { getUserByEmail, getProductByUserId } from '@/app/lib/data';

import DeleteButton from '@/app/ui/deletebtn';

export async function Contents(){
    const session = await auth();
    const user = session?.user;
    const userData = user ? await getUserByEmail(user.email!) : null;
    const products = userData ? await getProductByUserId(String(userData[0].id)) : [];

    return(
        <div className="view-h border flex-[4] p-5 overflow-y-auto">
            <h1 className={`${Fonts.Headers.className} text-2xl text-center`}>YOUR PRODUCTS</h1>
            <hr></hr>
            <div className="flex flex-wrap flex-row gap-4 justify-center mt-4">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-xl text-center bg-cyan-50">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <img src={product.image_url} alt={product.title} width={128} height={128} className="w-32 h-32 md:h-50 md:w-50 object-cover border-t border-b"/>
                        <p>Price: ${product.price}</p>
                        <DeleteButton id={product.id} />
                    </div>
                    
                ))}

            </div>
        </div>
    )
}