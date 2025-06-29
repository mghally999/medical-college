"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial } from '@/app/api/data';

const review = () => {
    const settings = {
        autoplay: true,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {Testimonial.map((item, index) => (
                    <div key={index}>
                        <div>
                            <div>
                                <i className="bg-[url('/images/testimonial/quotation.svg')] bg-contain bg-no-repeat w-14 h-14 inline-block"></i>
                            </div>
                            <p className="sm:text-[26px] sm:leading-[1.5] text-lg leading-7 font-normal text-black text-opacity-50 max-w-xl dark:text-white dark:text-opacity-50">{item.review}</p>
                        </div>
                        <div className="pl-0 pt-12 pb-20">
                            <span className="text-2xl font-medium leading-7 text-midnight_text dark:text-white">{item.name}</span>
                            <p className="text-xl font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50">{item.info}</p>
                        </div>
                        <div className="max-w-36.875 -mb-6.5">
                            <Image
                                src={item.image}
                                alt="user"
                                width={500}
                                height={0}
                                quality={100}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default review;;
