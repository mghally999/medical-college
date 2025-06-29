import React from "react";
import DoctorList from "@/components/Sharedcomponent/DoctorTeam/Doctors"
import Link from "next/link";

const TeamDoctors = () => {
    return (
        <section className="dark:bg-darkmode">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="text-center">
                    <h2 className="pb-4 md:text-[35px] leading-[2.87rem] text-2xl text-midnight_text font-bold dark:text-white">Team of doctors</h2>
                    <p className="text-lg text-black text-opacity-50 dark:text-white dark:text-opacity-50 font-normal sm:max-w-lg mx-auto">
                        Letraset sheets containing Lorem Ipsum passages and more recently
                        with desktop publishing.
                    </p>
                </div>
                <DoctorList />
                <div className="pt-10 text-center">
                    <Link href="#" className="py-4 px-6 rounded-lg border leading-none border-primary hover:bg-primary text-primary hover:text-white inline-block">
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TeamDoctors;