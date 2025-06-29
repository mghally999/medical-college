import React, { FC } from "react";

const Appointment: FC = () => {
    return (
        <>
            <section>
                <div className="py-9" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-[35px] leading-[2.87rem] font-bold text-midnight_text dark:text-white ">Online simple step for appointment</h2>
                    <p className="text-base font-normal text-black text-opacity-50 dark:text-white dark:text-opacity-50 my-6">
                        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accidentsometimes on purpose (injected humour and the like).
                    </p>
                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-7">
                        <div className="col-span-4 bg-[#C6EB77] rounded-lg">
                            <div className="pt-16 pb-6 px-7">
                                <div className="py-3 px-5 text-xs font-bold rounded-lg text-midnight_text bg-[#E0FEA1] w-fit">
                                    01
                                </div>
                                <p className="text-lg text-midnight_text mt-2">Make Appointment</p>
                                <p className="text-xs text-midnight_text mt-1">If you need any Help in booking, call Us</p>
                            </div>
                        </div>
                        <div className="col-span-4 bg-[#CAD7FD] rounded-lg">
                            <div className="pt-16 pb-6 px-7">
                                <div className="py-3 px-5 text-xs font-bold rounded-lg text-midnight_text bg-[#E1E9FF] w-fit">
                                    02
                                </div>
                                <p className="text-lg text-midnight_text mt-2">Select Doctor</p>
                                <p className="text-xs text-midnight_text mt-1">If you need any Help in booking, call Us</p>
                            </div>
                        </div>
                        <div className="col-span-4 bg-[#A0F0E3] rounded-lg">
                            <div className="pt-16 pb-6 px-7">
                                <div className="py-3 px-5 text-xs font-bold rounded-lg text-midnight_text bg-[#CEFCF4] w-fit">
                                    03
                                </div>
                                <p className="text-lg text-midnight_text mt-2">Get Consultation</p>
                                <p className="text-xs text-midnight_text mt-1">If you need any Help in booking, call Us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Appointment;