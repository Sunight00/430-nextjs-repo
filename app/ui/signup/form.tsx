'use client';

import Fonts from '../font'
import { signUp } from '@/app/lib/actions';

export function Form(){
        return <div className='flex justify-center items-center h-screen'>
        <form className='p-5 border-1 border-cyan-500' action={signUp}>
            <h1 className={`text-center ${Fonts.Headers.className}`}>Create an account</h1>
            <label htmlFor="username" className={`${Fonts.Body.className} text-sm`}>Username:</label><br></br>
            <input type="text" id="username" name="username" className='border w-64 md:w-100 mb-4' />
            <br></br>

            <label htmlFor="email" className={`${Fonts.Body.className} text-sm`}>Email:</label><br></br>
            <input type="text" id="email" name="email" className='border w-64 md:w-100 mb-4' />
            <br></br>

            <label htmlFor="role" className={`${Fonts.Body.className} text-sm`}>Role:</label><br></br>
            <input type="text" id="role" name="role" className='border w-64 md:w-100 mb-4' />
            <br></br>            

            <div className="w-64 md:w-[400px]">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <label htmlFor="password" className={`${Fonts.Body.className} text-sm`}>Password</label>
                </div>
                <input type="password" id="password" name="password" className="border w-full mt-2"/>
            </div>
            <br></br>
            <input type="hidden" name="redirectTo" /> {/*value={callbackUrl}*/}
            <button className='mt-4 w-64 md:w-100 bg-cyan-500 text-white hover:bg-cyan-600 p-2 rounded-lg' >
            Sign Up 
            </button>{/*aria-disabled={isPending}*/}

        {/**<div className="flex h-8 items-end space-x-1" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>  */}
        </form>
    </div>
}