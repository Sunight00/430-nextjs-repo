import {Form} from '@/app/ui/profile/uploadform2'
import {ArrowUturnLeftIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';
//smallView='block' largeView='hidden'
export default function Upload() {
    return(
        <div>
            <Link href="/profile"><ArrowUturnLeftIcon className="w-6 h-6 text-cyan-500 absolute left-2 mt-2 block md:hidden" /> </Link>
            <Form  />
            <div className='hidden sm:block'>
                <h1>404 Page not found</h1>
                <Link href='/profile' className='text-cyan-500 hover:text-cyan-700'>Go back to profile</Link>
            </div>
        </div>
    )
}