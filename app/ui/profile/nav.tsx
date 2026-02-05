import Link from 'next/link';


export function ProfileNav(){
    return(<div className="block md:hidden">
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-around">
                <li>
                    <Link href="/profile" className="text-white hover:text-gray-300">Contents</Link>
                </li>
                <li>
                    <Link href="/profile/mobile/upload" className="text-white hover:text-gray-300">Upload</Link>
                </li>
                <li>
                    <Link href="/profile/mobile/profile" className="text-white hover:text-gray-300">Profile</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}