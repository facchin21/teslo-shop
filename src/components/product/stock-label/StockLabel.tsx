'use client'

import { getStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts"
import { useEffect, useState } from "react";

interface Props {
    slug: string;
}

export function StockLabel({ slug }: Props) {
    const [stock, setStock] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getStock();
    }, [])

    const getStock = async () => {
        const inStock = await getStockBySlug(slug)
        setStock(inStock);
        setIsLoading(false);
    }

    return (
        <>
            {
                isLoading ? (
                    <h1 className={`${titleFont.className} antialiased font-semibold text-lg animate-pulse bg-gray-200`}>
                        &nbsp;
                    </h1>
                ) : stock === 0 ? (
                    <h1 className={`${titleFont.className} text-red-500 antialiased font-semibold text-lg animate-pulse bg-gray-200`}>
                        No hay stock disponible.
                    </h1>
                ) : (
                    <h1 className={`${titleFont.className} antialiased font-semibold text-lg`}>
                        Stock: {stock}
                    </h1>
                )
            }
        </>
    )
}
