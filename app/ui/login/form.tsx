'use client';
import {
  ExclamationCircleIcon, ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';


export function Form(){
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/profile';
    const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
    return <div>
        <form action={formAction}>
            <label htmlFor="email">Username:</label>
            <input type="text" id="email" name="email" />
            <br></br>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <br></br>
            <input type="hidden" name="redirectTo" value={callbackUrl} />
            <button className="mt-4 w-full" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </button>

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>

        </form>
    </div>
}