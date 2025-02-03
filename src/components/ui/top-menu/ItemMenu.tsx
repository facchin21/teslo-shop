'use client'
import { useUiStore } from '@/store'
import React from 'react'

export function ItemMenu() {
    const openMenu = useUiStore(state => state.openSideMenu)
    return (
        <button className='m-2 p-2 rounded-md transition-all
                hover:bg-gray-100 '
            onClick={openMenu}>
            Menu
        </button>
    )
}
