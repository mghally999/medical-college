import React from "react";
import Link from "next/link";
import Image from "next/image";

const Testimonials = () => {
    return (
        <section className="pb-0 dark:bg-darkmode">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
                    <div className="col-span-5" >
                        <div className="max-w-96 lg:pb-16 pb-8 border-b border-solid dark:border-dark_border">
                            <h2 className="text-[35px] leading-[2.87rem] text-midnight_text font-bold dark:text-white">Customers testimonials</h2>
                        </div>
                        <div className="md:pt-16 pt-8">
                            <span className="sm:text-[97px] leading-[7.93rem] text-5xl font-bold text-primary">
                                1950+
                            </span>
                            <p className="text-2xl font-medium text-primary">
                                clients & 4.9 Rating based on 5
                            </p>
                            <Link
                                href="#"
                                className="border border-primary text-primary px-6 py-4 mt-16 inline-block hover:bg-primary hover:text-white text-lg font-medium rounded-lg"
                            >
                                More Testimonials
                            </Link>
                        </div>
                    </div>
                    <div className="md:col-span-1"></div>
                    <div className="md:col-span-6 col-span-7">
                        <div>
                            <div>
                                <i className="bg-[url('/images/testimonial/quotation.svg')] bg-contain bg-no-repeat w-14 h-14 inline-block"></i>
                            </div>
                            <p className="sm:text-[26px] sm:leading-[1.5] text-lg leading-7 font-normal text-black text-opacity-50 max-w-xl dark:text-white dark:text-opacity-50">Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing Various versions have evolved over the years, sometimes</p>
                        </div>
                        <div className="pl-0 pt-12 pb-20">
                            <span className="text-2xl font-medium leading-7 text-midnight_text dark:text-white">Stephanie Sue</span>
                            <p className="text-xl font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50">Designation</p>
                        </div>
                        <div className="md:max-w-36.875 md:-mb-6.5 max-w-full -mb-0">
                            <Image
                                src="/images/testimonial/user.jpg"
                                alt="user"
                                width={500}
                                height={0}
                                quality={100}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
