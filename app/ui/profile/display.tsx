import {Avatar} from '../profile/avatar'
import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import Fonts from '../font';
import { auth } from '@/auth';

export async function Profile(){
    const session = await auth();
    const user = session?.user;
    return (
<div className="border flex flex-col flex-[1] p-4 text-center">
    <div>
        <Avatar />
        <h1 className={`${Fonts.Headers.className} text-center`}>
            {user?.name}
        </h1>

        <ul>
            <li><Link href="/explore" className="text-blue-500 hover:underline">Explore</Link></li>

            <li><Link href="/profile/upload" className="text-blue-500 hover:underline block md:hidden"> Upload</Link></li>
        </ul>
    </div>

    <form
        className="mt-auto mr-auto ml-auto"
        action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
        }}
    >
        <button className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
            <PowerIcon className="w-6" />
            <div>Sign Out</div>
        </button>
    </form>
</div>
    )
}