import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

import { auth } from '@/auth';
//import profile from '../public/userimage.png'

import {Avatar} from '../ui/profile/avatar'
import Link from 'next/link';

export default async function Page() {
    const session = await auth();
    const user = session?.user;
    //const image = user?.image || profile;
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <h1>User Profile{user?.name}</h1>
        <Avatar />
        <Link href='/explore'>Expore</Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}