'use client'
import Search from '@/app/ui/explore/search'
import Fonts from '@/app/ui/font'
import { useState } from "react";
import Link from 'next/link';
import {UserCircleIcon, ArrowUpTrayIcon} from '@heroicons/react/24/outline'


export function Nav(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className='bg-cyan-900 flex p-2 gap-3 text-white'>
            <h1 className={`${Fonts.Headers.className} basis-1/2`} >HandiCraft</h1>
            <Search placeholder="Search for anything" />
            <div className="menu-toggle" id="toggle"  onClick={() => setIsOpen(!isOpen)}>&#9776;</div>
            <div className={`nav-links ${isOpen ? 'active' : ''} basis-1/4 bg-cyan-800 `} id="navLinks">
                <Link href="/profile" className='pl-2 pr-2 hover:border-b hover:border-white hover:text-cyan-50'><UserCircleIcon className="h-5 w-5 inline block md:hidden" /> Profile </Link>
                <Link href="/profile/upload" className="block md:hidden"><ArrowUpTrayIcon className='inline h-5 w-5'/> Upload</Link>
            </div>            
        </div>
        

    )
}