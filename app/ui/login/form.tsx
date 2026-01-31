'use client';
import {
  ExclamationCircleIcon, ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
import Fonts from '../font'
import Link from 'next/link';

export function Form(){
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/profile';
    const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
    return <div className='flex justify-center items-center h-screen'>
        <form className='p-5 border-1 border-cyan-500' action={formAction}>
            <h1 className={`text-center ${Fonts.Headers.className}`}>Sign into your account</h1>
            <label htmlFor="email" className={`${Fonts.Body.className} text-sm`}>Username:</label><br></br>
            <input type="text" id="email" name="email" className='border w-64 md:w-100 mb-4' />
            <br></br>

            <div className="w-64 md:w-[400px]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <label htmlFor="password" className={`${Fonts.Body.className} text-sm`}>Password</label>
                    <Link href="/forgot-password"className="text-sm text-cyan-600 hover:underline mt-1 sm:mt-0">
                    Forgot password?
                    </Link>
                </div>
                <input type="password" id="password" name="password" className="border w-full mt-2"/>
            </div>
            <br></br>
            <input type="hidden" name="redirectTo" value={callbackUrl} />
            <button className='mt-4 w-64 md:w-100 bg-cyan-500 text-white hover:bg-cyan-600 p-2 rounded-lg' aria-disabled={isPending}>
            Log in 
            </button>

        <div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>  
        <p className={`${Fonts.Body.className} text-sm text-center`}>Not registered yet? <Link href="/signup" className="text-cyan-600 hover:underline">Create an account</Link></p>
        </form>
    </div>
}