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
        <div className="view-h  flex-[4] p-5 overflow-y-auto">
            <h1 className={`${Fonts.Headers.className} text-2xl text-center`}>YOUR PRODUCTS</h1>
            <hr></hr>
            <div className="flex flex-wrap flex-row gap-1 justify-center mt-4">
                {products.map((product) => (
                    /*<div key={product.id} className="border rounded-xl text-center bg-cyan-50">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <img src={product.image_url} alt={product.title} width={128} height={128} className="w-32 h-32 md:h-50 md:w-50 object-cover border-t border-b"/>
                        <p>Price: ${product.price}</p>
                        <DeleteButton id={product.id} />
                    </div>*/
                    <div key={product.id} className="border rounded-xl bg-cyan-50 shadow-md hover:shadow-lg transition-shadow duration-300 p-3 flex flex-col items-center text-center" >
                        <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-lg mb-3">
                            <img src={product.image_url} alt={product.title}className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
                        </div>

                        <h3 className="text-base md:text-lg font-semibold mb-1">{product.title}</h3>
                        <p className="text-gray-700 text-sm mb-2">{product.description}</p>

                        <p className="font-bold text-cyan-800 mb-3 text-sm md:text-base">
                            Price: ${product.price}
                        </p>

                        <DeleteButton id={product.id} />
                        </div>              
                ))}

            </div>
        </div>
    )
}