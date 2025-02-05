'use client'
import { QuantitySelector } from '@/components';
import React, { useEffect, useState } from 'react'
import { redirect } from 'next/navigation';
import { useCartStore } from '@/store'
import Image from 'next/image';
import Link from 'next/link';

export function ProductsInCart() {

    const updateProductQuantity = useCartStore(state => state.updateProductQuantity);
    const productsInCart = useCartStore(state => state.cart);
    const removeProduct = useCartStore(state => state.removeProduct);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        setLoaded(true)
    }, [])

    if (!loaded) {
        return <p>Loading...</p>
    }

    if (productsInCart.length === 0) {
        redirect('/empty')
    }

    return (
        <>
            {
                productsInCart.map(product => (
                    <div key={`${product.slug}-${product.size}`} className="flex mb-5">
                        <Image
                            src={`/products/${product.image}`}
                            width={100}
                            height={100}
                            alt={product.title}
                            className="mr-5 rounded"
                            style={{
                                width: '100px',
                                height: '100px',
                            }}
                        />
                        <div>
                            <Link href={`/product/${product.slug}`}>
                                <p className="hover:underline cursor-pointer transition-all duration-300">
                                    {product.size} - {product.title}
                                </p>
                            </Link>
                            <p>${product.price}</p>
                            <QuantitySelector
                                quantity={product.quantity}
                                onQuantityChange={quantity => updateProductQuantity(product, quantity)}
                            />

                            <button className="underline mt-3"
                                onClick={() => removeProduct(product)}>
                                Remover
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
