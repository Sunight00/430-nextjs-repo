import { auth } from '@/auth';
import profile from '@/public/userimage.png'
import Image from 'next/image';

 
export async function Avatar() {
    const session = await auth();
    const user = session?.user;
    const image = user?.image || profile;
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Image src={image} alt="User Profile Image" width={100} height={100} className="rounded-full" />
    </div>
    )
}