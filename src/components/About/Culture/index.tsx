import React from "react";
import Image from "next/image";

const Culture = () => {
    return (
        <section className="dark:bg-darkmode">
            <div className="container mx-auto lg:max-w-screen-xl max-w-screen-md">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-7">
                    <div className="lg:col-span-6 col-span-12 relative rounded-lg" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        <Image
                            src="/images/about/culture.jpg"
                            alt="Support-groups"
                            width={500}
                            height={0}
                            style={{ width: '100%', height: 'auto' }}
                            className="rounded-lg"
                        ></Image>
                        <div className="absolute top-12 rounded-lg -right-14 bg-primary gap-5 py-6 px-8 sm:w-auto w-full">
                            <h2 className="text-white font-bold text-[97px] leading-[7.93rem]">13<span className="text-[45px] leading-[1.2]">+</span></h2>
                            <p className="text-lg text-white font-bold">years of <br />Experience</p>
                        </div>
                    </div>
                    <div className="md:col-span-1"></div>
                    <div className="lg:col-span-5 col-span-12 lg:pl-8 pl-0" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        <h2 className="text-[35px] leading-[2.87rem] text-midnight_text font-bold dark:text-white">Medical Culture</h2>
                        <p className="pt-7 pb-12 text-lg font-normal text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                            We are a dedicated team of passionate product managers, full stack developers, UX/UI designers, QA engineers and marketing experts helping businesses of every size — from new startups
                        </p>
                        <div className="flex justify-between xl:flex-nowrap flex-wrap gap-6">
                            <div className="flex items-center gap-5">
                              <div className="shrink-0">
                              <svg
                                    width="34"
                                    height="35"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="12" cy="12.5" r="12" fill="#2F73F220" />
                                    <path
                                        d="M16.2779 7.27734L9.65422 13.8949L6.85302 10.6756L5 12.5455L9.52548 17.7465L18 9.28764L16.2779 7.27734Z"
                                        fill="#2F73F2"
                                    />
                                </svg>
                              </div>
                                <span className="text-lg font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                                    Vestibulum non sapien mattis commodo.
                                </span>
                            </div>
                            <div className="flex items-center gap-5">
                             <div className="shrink-0">
                                                                <svg
                                    width="34"
                                    height="35"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="12" cy="12.5" r="12" fill="#2F73F220" />
                                    <path
                                        d="M16.2779 7.27734L9.65422 13.8949L6.85302 10.6756L5 12.5455L9.52548 17.7465L18 9.28764L16.2779 7.27734Z"
                                        fill="#2F73F2"
                                    />
                                </svg>
                             </div>
                                <span className="text-lg font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                                    Donec luctus tincidunt ornare.
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-between py-8 xl:flex-nowrap flex-wrap gap-6">
                            <div className="flex items-center gap-5">
                             <div className="shrink-0">
                                                                <svg
                                    width="34"
                                    height="35"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="12" cy="12.5" r="12" fill="#2F73F220" />
                                    <path
                                        d="M16.2779 7.27734L9.65422 13.8949L6.85302 10.6756L5 12.5455L9.52548 17.7465L18 9.28764L16.2779 7.27734Z"
                                        fill="#2F73F2"
                                    />
                                </svg>
                             </div>
                                <span className="text-lg font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                                    Quisque pretium erat acdui posuere.
                                </span>
                            </div>
                            <div className="flex items-center gap-5">
                             <div className="shrink-0">
                                                                <svg
                                    width="34"
                                    height="35"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="12" cy="12.5" r="12" fill="#2F73F220" />
                                    <path
                                        d="M16.2779 7.27734L9.65422 13.8949L6.85302 10.6756L5 12.5455L9.52548 17.7465L18 9.28764L16.2779 7.27734Z"
                                        fill="#2F73F2"
                                    />
                                </svg>
                             </div>
                                <span className="text-lg font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                                    Fusce eleifend vitae eleifend ullamcor.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Culture;
