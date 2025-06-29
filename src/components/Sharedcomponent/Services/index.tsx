import React from "react";
import Link from "next/link";
import { services } from "@/app/api/data"
import Image from "next/image"
import { Icon } from "@iconify/react";

const ServiceCard = ({isSpace}:{isSpace:boolean}) => {
    return (
        <section className={`bg-PowderBlue ${isSpace ? 'lg:py-24 py-16' : 'lg:pb-24 pb-16'} dark:bg-darklight `}>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <h2 className="pb-16 md:text-[35px] leading-[2.87rem] text-2xl text-midnight_text font-bold dark:text-white">Highly innovative<br />technology & services</h2>
                <div className="grid grid-cols-12 gap-7">
                    {services.map((item, index) => (
                        <Link key={index} href={`/services/${item.slug}`} className="md:col-span-4 sm:col-span-6 col-span-12 rounded-lg bg-white lg:p-11 p-8 group relative overflow-hidden dark:bg-darkmode" data-aos="fade-up" data-aos-delay={item.delay} data-aos-duration="1000">
                            <div>
                                <div className="lg:pb-20 pb-10">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={0}
                                        height={0}
                                        style={{ width: 'auto', height: 'auto' }}
                                    />
                                </div>
                                <div className="pt-8 border-t-2 flex justify-between dark:border-dark_border">
                                    <p className="text-midnight_text text-[22px] leading-[2rem] font-medium group-hover:text-primary dark:text-white">{item.title}</p>
                                    <span>
                                        <Icon
                                            icon="ei:chevron-right"
                                            className="text-midnight_text group-hover:text-primary text-[35px] leading-[2.87rem] dark:text-white"
                                        />
                                    </span>
                                </div>
                                <div className="absolute w-full h-fit lg:py-3.75 py-11 px-8 top-0 group-hover:opacity-100 opacity-0 start-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-[url('/images/services/service-bg.png')] before:bg-primary before:bg-opacity-70 before:w-full before:h-full before:absolute before:top-0 before:start-0">
                                    <p className="text-white lg:text-lg text-xs font-normal relative z-10">{item.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="pt-11">
                    <Link href="#" className="bg-transparent border border-primary text-primary px-6 py-4 rounded-lg hover:bg-blue-600 hover:text-white">
                        View More
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ServiceCard;