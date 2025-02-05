'use server'

import prisma from "@/lib/prisma"
import { Gender } from "@prisma/client";

interface PaginationOptions {
    page?: number;
    take?: number;
    gender?: Gender;
}

export const getPaginatedProductWithImages = async ({
    page = 1,
    take = 12,
    gender,
}: PaginationOptions) => {

    if (isNaN(Number(page))) page = 1;
    if (page < 1) page = 1;

    if (isNaN(Number(take))) take = 12;

    try {
        // 1. Obtengo todos los productos  
        const products = await prisma.product.findMany({
            include: {
                ProductImage: {
                    take: 2, // solo tomar 2 imagenes
                    select: {
                        url: true
                    },
                },
            },
            skip: (page - 1) * take,
            take: take,

            //! Por género
            where: {
                gender: gender
            }
        });

        // 2. Obtener el total de pagina.
        const totalProducts = await prisma.product.count({
            where: { gender : gender }
        });
        const totalPages = Math.ceil(totalProducts / take);

        return {
            currentPage: page,
            totalPages,
            products: products.map(product => ({
                ...product,
                images: product.ProductImage.map((image) => image.url)
            }))
        }
    } catch (error) {
        throw new Error(error, "Error al obtener los productos");
    }
}