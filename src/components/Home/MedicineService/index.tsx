import React from "react";
import Image from "next/image";
import Link from "next/link";

const MedicineService = () => {
    return (
        <section className="dark:bg-darkmode">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="grid grid-cols-12 items-center gap-7">
                    <div className="md:col-span-6 col-span-12 sm:block hidden" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                        <Image
                            src="/images/medicine_service/medicine-service.jpg"
                            alt="Medicine Service"
                            width={475}
                            height={0}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="md:col-span-6 col-span-12 lg:pl-32 pl-0" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        <h2 className="lg:pb-10 lg:text-[40px] lg:leading-[3rem] md:text-[35px] leading-[2.87rem] text-2xl font-bold text-midnight_text dark:text-white">The heart and science of medicine service</h2>
                        <p className="pb-14 text-lg font-normal text-black text-opacity-60 dark:text-white dark:text-opacity-50">
                        The Heart and Science of Medicine Service" embodies a balanced approach to healthcare, where compassionate care  meets advanced medical expertise and technology . This approach emphasizes treating each patient as a whole, understanding their individual needs.
                        </p>
                        <div>
                            <Link href="#" className="lg:block bg-transparent border border-primary text-primary px-6 py-4 rounded-lg hover:bg-blue-600 hover:text-white w-fit leading-none">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MedicineService;