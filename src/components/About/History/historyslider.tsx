// "use client";
// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Icon } from "@iconify/react";
// import { History } from '@/app/api/data';

// import '@/style/historyslider.css'

// const HistorySlider = () => {
//     const settings = {
//         autoplay: true,
//         dots: false,
//         arrows: true,
//         infinite: true,
//         speed: 250,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         prevArrow: (
//             <button className="slick-prev">
//                 <Icon icon="bi:arrow-left" className="text-primary text-opacity-60 hover:text-opacity-100 text-[35px] leading-[2.87rem] dark:text-white" />
//             </button>
//         ),
//         nextArrow: (
//             <button className="slick-next"> 
//                 <Icon icon="bi:arrow-right" className="text-primary text-opacity-60 hover:text-opacity-100 text-[35px] leading-[2.87rem] dark:text-white" />
//             </button>
//         ),
//         responsive: [
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 2,
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 1,
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//               }
//             }
//           ]
//     };

//     return (
//         <div className="slider-container">
//             <Slider {...settings}>
//                 {History.map((item, index) => (
//                     <div key={index} className="px-2">
//                         <div className="bg-white dark:bg-darkmode rounded-lg pt-12 mx-2">
//                             <h2 className="text-2xl font-bold text-primary px-12 mb-3">{item.time}</h2>
//                             <p className="text-base font-normal pb-12 text-black text-opacity-50 dark:text-white dark:text-opacity-50 px-12">{item.story}</p>
//                             <div className="image-container">
//                                 <Image
//                                     src={item.banner}
//                                     alt="..."
//                                     width={250}
//                                     height={80}
//                                     style={{ width: '100%', height: '100%' }}
//                                     className="rounded-b-lg"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default HistorySlider;

"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Images Used

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// Import Swiper types
import { Swiper as SwiperClass } from "swiper/types";
import { History } from '@/app/api/data';

export const HistorySlider = () => {

    const swiperRef = useRef<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <>
          <div>
            <div className="flex justify-between items-center flex-wrap md:gap-0 gap-2 bottom-7 absolute start-0 translate-x-1/2" >
                <div className="flex items-center gap-7">
                    <div onClick={() => swiperRef.current?.slidePrev()} className={`group h-10 w-10 rounded-full flex items-center justify-center bg-primary/20 hover:bg-primary text-link dark:text-darklink dark:bg-primary/20 ${currentIndex===0?"pointer-events-none opacity-50":"cursor-pointer"}`}>
                        <Icon icon="tabler:arrow-left" className="shrink-0 text-2xl group-hover:text-white text-primary" />
                    </div>
                    <div onClick={() => swiperRef.current?.slideNext()} className={`group h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary bg-primary/20 text-link dark:text-darklink dark:bg-primary/20  ${currentIndex===(History.length-(History.length-1))?"pointer-events-none opacity-50":"cursor-pointer"} `}>
                        <Icon icon="tabler:arrow-right" className="shrink-0 text-2xl group-hover:text-white text-primary" />
                    </div>
                </div>
            </div>
            <div className="mt-8">
            <Swiper
            onSwiper={(swiper: SwiperClass) => {
                // Store the swiper instance in the ref
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper: SwiperClass) => {
                setCurrentIndex(swiper.activeIndex); // Update current slide index on slide change
              }}
        slidesPerView={2}
        spaceBetween={30}
        className="mySwiper leader-swiper"
        breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
      >
       {
        History.map((item,index)=>{
            return (
                <SwiperSlide key={index} >
                            <div key={index} className="px-2">
                         <div className="bg-white dark:bg-darkmode rounded-lg pt-12 mx-2">
                             <h2 className="text-2xl font-bold text-primary px-12 mb-3">{item.time}</h2>
                             <p className="text-base font-normal pb-12 text-black text-opacity-50 dark:text-white dark:text-opacity-50 px-12">{item.story}</p>
                             <div className="image-container">
                                 <Image
                                     src={item.banner}
                                     alt="..."
                                     width={250}
                                     height={80}
                                     style={{ width: '100%', height: '100%' }}
                                     className="rounded-b-lg"
                                 />
                             </div>
                         </div>
                     </div>
            </SwiperSlide>
            )
        })
       }
      </Swiper>
            </div>
          </div>
        </>
    )
}
