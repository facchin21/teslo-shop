'use client'

import { QuantitySelector, SizeSelector } from '@/components'
import { CartProduct, Product, Size } from '@/interfaces'
import { useCartStore } from '@/store';
import React, { useState } from 'react'

interface Props {
  product: Product;
}


export function AddToCart({ product }: Props) {

  const addProductToCart = useCartStore(state => state.addProductTocart);

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);

  const addToCart = () => {
    if (!size) {
      setError(true);
      return;
    }

    const cartProduct: CartProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      slug: product.slug,
      size: size,
      quantity: quantity,
      image: product.images[0]
    }

    addProductToCart(cartProduct);
    setSize(undefined);
    setQuantity(1);
    setError(false);
  }
  return (
    <>
      {
        error && (
          <span className='text-red-500 fade-in'>
            Debes seleccionar una talla
          </span>
        )
      }
      {/* Selector de Tallas */}
      <SizeSelector selectedSize={size}
        availableSizes={product.sizes}
        onSizeChenged={setSize} />

      {/* Selector de cantidad */}
      <QuantitySelector quantity={quantity}
        onQuantityChange={setQuantity} />

      {/* Boton */}
      <button className="btn-primary my-5"
        onClick={addToCart}>
        Agregar al carrito
      </button>
    </>
  )
}
