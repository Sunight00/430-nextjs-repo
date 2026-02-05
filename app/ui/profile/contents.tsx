import { auth } from '@/auth';
import Fonts from '../font';
import { getUserByEmail, getProductByUserId } from '@/app/lib/data';
import Image from 'next/image';


export async function Contents(){
    const session = await auth();
    const user = session?.user;
    const userData = user ? await getUserByEmail(user.email!) : null;
    const products = userData ? await getProductByUserId(String(userData[0].id)) : [];
    return(
        <div className="view-h border flex-[4]">
            <h1 className={`${Fonts.Headers.className}`}>YOUR PRODUCTS</h1>
            <div className="flex ">
                {products.map((product) => (
                    <div key={product.id} className="border ">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <img src={product.image_url} alt={product.title} width={128} height={128} className="w-32 h-32 object-cover"/>
                    </div>
                ))}
            </div>
        </div>
    )
}