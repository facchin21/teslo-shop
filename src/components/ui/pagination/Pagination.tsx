'use client'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { redirect, usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import React from 'react'
import { generatePagination } from '@/utils';
import clsx from 'clsx';

interface Props {
    totalPage: number;
}


export function Pagination({ totalPage }: Props) {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const pageString = searchParams.get('page') ?? 1;

    const currentPage = isNaN(+pageString) ? 1 : +pageString;

    if (currentPage < 1 || isNaN(+pageString)) { redirect(`${pathname}`) }

    const allPages = generatePagination(currentPage, totalPage);

    const createPageUrl = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);

        if (pageNumber === '...') {
            return `${pathname}${params.toString()}`
        }

        if (+pageNumber === 0) {
            return `${pathname}`
        }

        if (+pageNumber > totalPage) {
            return `${pathname}?${params.toString()}`
        }

        params.set('page', pageNumber.toString());

        return `${pathname}?${params.toString()}`
    }

    return (
        <div className="flex justify-center text-center mb-32 mt-10">
            <nav aria-label="Page navigation example">
                <ul className="flex list-style-none gap-x-2">
                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#" >
                            <IoChevronBackOutline size={30} />
                        </Link>
                    </li>

                    {
                        allPages.map((page, index) => (
                            <li className="page-item" key={index}>
                                <Link
                                    className={
                                        clsx("page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                                            { 'bg-blue-800 shadow-sm text-white hover:bg-blue-500 hover:text-white': page === currentPage },
                                        )}
                                    href={createPageUrl(page)}>
                                    {page}
                                </Link>
                            </li>
                        ))
                    }


                    <li className="page-item">
                        <Link
                            className="page-link relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                            href="#">
                            <IoChevronForwardOutline size={30} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}
