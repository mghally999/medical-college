import React, { FC } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { BreadcrumbLink } from "@/types/breadcrumb"

interface HeroSubProps {
    title: string;
    description: string;
    breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {

    return (
        <>
            <section className="bg-PowderBlue text-center lg:py-16 py-8 relative !pt-28 dark:bg-darklight">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                    <div className="absolute -top-8% md:left-63% left-40%">
                    </div>
                    <h2 className="dark:text-white relative text-midnight_text lg:text-5xl sm:text-[35px] leading-[2.87rem] text-2xl font-bold">{title}</h2>
                    <p className="sm:text-xl text-lg dark:text-white text-midnight_text dark:text-opacity-50 font-normal max-w-xl w-full mx-auto mt-7 mb-12 sm:px-0 px-4">
                        {description}
                    </p>
                    <Breadcrumb links={breadcrumbLinks} />
                </div>
            </section>
        </>
    );
};

export default HeroSub;