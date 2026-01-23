'use client'


export function Button({ href, description }: { href: string; description: string }) {
    return <button onClick={() => window.location.href = href} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{description}</button>
}