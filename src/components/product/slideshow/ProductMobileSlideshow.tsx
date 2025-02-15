'use client'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import './slideshow.css';
import Image from 'next/image';



interface Props {
    images: string[];
    title: string;
    className?: string;
}

export function ProductMobileSlideshow({ images, title, className }: Props) {


    return (
        <div className={className}>
            <Swiper
                style={{
                    width: '100vw',
                    height: '500px',
                }}
                pagination
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper2"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                width={600}
                                height={500}
                                src={`/products/${image}`}
                                alt={title}
                                className='object-fill'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
