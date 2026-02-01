import { auth } from '@/auth';
import profile from '@/public/userimage.png'
import Image from 'next/image';

 
export async function Avatar() {
    const session = await auth();
    const user = session?.user;
    const image = user?.image || profile;
  return (
    <div >
        <Image src={image} alt="User Profile Image" width={100} height={100} className="rounded-full inline-block " />
    </div>
    )
}