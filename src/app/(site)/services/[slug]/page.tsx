"use client";
import React from "react";
import HeroSub from "@/components/Sharedcomponent/HeroSub";
import SupportGroup from "@/components/Service-Detail/SupportGroup";
import Appointment from "@/components/Service-Detail/Appointment";
import Staff from "@/components/Service-Detail/Staf";
import ContactForm from "@/components/Sharedcomponent/ContactForm";
import Image from "next/image";
import { services } from "@/app/api/data";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Portfolios = () => {

    const { slug } = useParams();
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/services", text: "Services" },
    ];
    const item = services.find((item) => item.slug === slug);

    if (!item) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <HeroSub
                title={item.title}
                description="Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing"
                breadcrumbLinks={breadcrumbLinks}
            />
            <section className="lg:py-24 py-16 dark:bg-darkmode">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                    <div className="grid grid-cols-12 lg:gap-12 gap-0">
                        <div className="md:col-span-3 col-span-12 mb-12">
                            <div className="border-2 border-border dark:border-dark_border px-9 py-9 rounded-lg">
                                <div className="flex gap-2 items-center">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={30}
                                        height={30}
                                    />
                                    <h4 className="text-[26px] leading-[1.5] font-bold text-midnight_text dark:text-white">Our Services</h4>
                                </div>
                                <div className="mt-10">
                                    {services.map((item, index) => (
                                        <Link key={index} href={`/services/${item.slug}`} className="flex justify-between items-center border-b border-border dark:border-dark_border group">
                                            <h3 className="text-base font-medium text-midnight_text py-4 dark:text-white">{item.title}</h3>
                                            <span>
                                                <Icon
                                                    icon="ei:chevron-right"
                                                    className="text-primary text-opacity-60 group-hover:text-opacity-100 text-[35px] leading-[2.87rem] dark:text-white"
                                                />
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-9 col-span-12">
                            <div>
                                <Image
                                    src={item.banner}
                                    alt="..."
                                    width={700}
                                    height={0}
                                    style={{ width: '100%', height: 'auto' }}
                                    className="rounded-2.5"
                                />
                            </div>
                            <SupportGroup />
                            <Appointment />
                            <Staff />
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm />
        </>
    );
};

export default Portfolios;