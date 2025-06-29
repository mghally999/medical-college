import React from "react";
import Image from "next/image";
import Link from "next/link";

const Technology = () => {
    return (
        <section className="lg:py-24 py-16 dark:bg-darkmode">
            <div className="container mx-auto lg:max-w-screen-xl max-w-screen-md">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-7">
                    <div className="lg:col-span-6 col-span-12" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        <Image
                            src="/images/about/texhnology.jpg"
                            alt="Culture"
                            width={475}
                            height={0}
                            className="rounded-lg"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="lg:col-span-6 col-span-12 md:pl-32 pl-0 lg:pt-0 pt-8" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        <h2 className="pb-8 text-5xl text-midnight_text font-bold dark:text-white">Highly innovative technology</h2>
                        <p className="pb-12 text-lg font-normal w-4/5 text-black text-opacity-60 dark:text-white dark:text-opacity-50">
                            We help startups who want to rise above the ordinary with extraordinary messaging that speaks to their audience.
                        </p>
                        <div>
                            <Link href="#" className="lg:block bg-primary leading-none border border-primary text-white px-6 py-4 rounded-lg hover:bg-blue-700 w-fit">
                                Contact Us
                            </Link>
                        </div>
                        <div className="flex gap-8 py-8">
                            <div className="flex items-center gap-5">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    className="bg-primary/20 rounded-full"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="12" cy="12.5" r="12"  />
                                    <path
                                        d="M16.2779 7.27734L9.65422 13.8949L6.85302 10.6756L5 12.5455L9.52548 17.7465L18 9.28764L16.2779 7.27734Z"
                                        fill="#2F73F2"
                                    />
                                </svg>
                                <span className="text-lg font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                                    Expert Help
                                </span>
                            </div>
                            <div className="flex items-center gap-5">
                                <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    className="bg-primary/20 rounded-full"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="12" cy="12.5" r="12"  />
                                    <path
                                        d="M16.2779 7.27734L9.65422 13.8949L6.85302 10.6756L5 12.5455L9.52548 17.7465L18 9.28764L16.2779 7.27734Z"
                                        fill="#2F73F2"
                                    />
                                </svg>
                                <span className="text-lg font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                                    Proven results
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technology;