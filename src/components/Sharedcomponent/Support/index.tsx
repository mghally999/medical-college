import React from "react";
import Image from "next/image";
import Link from "next/link";

const Support = () => {
    return (
        <section className="dark:bg-darkmode">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="grid grid-cols-12 items-center gap-7">
                    <div className="md:col-span-7 col-span-12 relative rounded-lg overflow-hidden" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        <Image
                            src="/images/support/support-groups.jpg"
                            alt="Support-groups"
                            width={500}
                            height={0}
                            style={{ width: '100%', height: 'auto' }}
                        ></Image>
                        <div className="absolute bottom-0 bg-white flex items-center gap-5 sm:pt-5 pt-2 sm:pb-6 pb-3 sm:pr-12 pr-6 sm:pl-9 pl-5 sm:w-auto w-full dark:bg-darkmode">
                            <div>
                                <i className="bg-[url('/images/support/call.svg')] bg-no-repeat bg-contain sm:w-10 w-6 sm:h-10 h-6 inline-block"></i>
                            </div>
                            <div>
                                <p className="text-base font-bold text-midnight_text dark:text-white">Emergency Service</p>
                                <h4 className="sm:text-2xl text-lg font-bold text-midnight_text dark:text-white dark:opacity-50">+(690) 2560 0020</h4>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-5 col-span-12 lg:pl-8 pl-0" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        <h2 className="lg:text-[40px] lg:leading-[3rem] md:text-[35px] md:leading-[2.87rem] text-[26px] leading-[1.5] text-midnight_text font-bold dark:text-white">Support groups for depression & anxiety</h2>
                        <p className="lg:pt-7 pt-4 pb-12 md:text-lg font-normal text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                            Letraset sheets containing Lorem Ipsum passages and more recently
                            with desktop publishing Various versions have evolved over the
                            years, sometimes by accident, sometimes chunks as necessary
                            making.
                        </p>
                        <div>
                            <Link href="#" className="bg-transparent border leading-none border-primary text-primary px-6 py-4 rounded-lg hover:bg-blue-600 hover:text-white">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
