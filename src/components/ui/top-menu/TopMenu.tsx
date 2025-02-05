'use client'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'
import { titleFont } from '@/config/fonts'
import { ItemMenu } from './ItemMenu'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useCartStore } from '@/store'

export const TopMenu = () => {
    const totalItemsInCart = useCartStore(state => state.getTotalItems());

    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
    }, [])


    return (
        <div className='flex px-5 justify-between items-center w-full'>
            {/* Logo */}
            <div>
                <Link href='/'>
                    <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                    <span> | Shop</span>
                </Link>
            </div>

            {/* center Menu */}
            <div className='hidden sm:block'>
                <Link href={'/gender/men'}
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
                    Hombres
                </Link>
                <Link href={'/gender/women'}
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
                    Mujeres
                </Link><Link href={'/gender/kid'}
                    className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
                    Niños
                </Link>
            </div>

            {/* Search, Cart, Menu */}
            <div className='flex items-center'>
                <Link href={'/search'} className='mx-2'>
                    <IoSearchOutline className='size-5' />
                </Link>
                <Link href={'/cart'} className='mx-2'>
                    <div className='relative'>
                        {
                            (loader && totalItemsInCart > 0) && (
                                <span className='absolute text-xs rounded-full px-1 
                                    font-bold -top-2 bg-blue-700 text-white -right-2'>
                                    {totalItemsInCart}
                                </span>
                            )
                        }
                        <IoCartOutline className='size-5' />
                    </div>
                </Link>

                <ItemMenu />
            </div>
        </div>
    )
}
