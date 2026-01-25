'use client'


export function Button({ href, description }: { href: string; description: string }) {
    return <button onClick={() => window.location.href = href} className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">{description}</button>
}