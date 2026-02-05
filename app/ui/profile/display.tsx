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
        <div className="border flex-[1] p-4 text-center hidden md:block ">
            <Avatar />
            <h1 className={`${Fonts.Headers.className} text-center`}>{user?.name}</h1>
            <h2>ddddd</h2>
            <a href='/explore' className="text-blue-500 hover:underline">Explore</a>
                <form action={async () => {'use server';await signOut({ redirectTo: '/' }); }}>
                    <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                    <PowerIcon className="w-6" />
                    <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>            

        </div>
    )
}