import type { Size } from '@/interfaces'
import clsx from 'clsx';
import React from 'react'

interface Props {
    selectedSize?: Size;
    availableSizes: Size[];

    onSizeChenged: (size: Size) => void;
}

export function SizeSelector({ selectedSize, availableSizes, onSizeChenged }: Props) {

    return (
        <div className='my-5'>
            <h3 className='font-bold mb-4'>Tallas disponibles</h3>

            <div className='flex items-center'>
                {
                    availableSizes.map(size => (
                        <button key={size}
                            onClick={() => onSizeChenged(size)}
                            className={clsx(
                                "mx-2 hover:underline text-lg",
                                {
                                    'underline': size === selectedSize
                                }
                            )}>
                            {size}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
