import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'

export function Footer() {
    return (
        <footer className='flex w-full justify-center text-xs mb-10'>
            <span className={`${titleFont.className} antialiased font-bold`}>
                Teslo
            </span>
            <span> | Shop</span>
            <span> © {new Date().getFullYear()}</span>
            <Link href={'/'} className='mx-3 hover:underline'>
                Privacidad & Legal
            </Link>
            <Link href={'/'} className='mx-3 hover:underline'>
                Ubicaciones
            </Link>
        </footer>
    )
}
