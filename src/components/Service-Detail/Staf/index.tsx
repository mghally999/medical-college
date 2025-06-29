import React, { FC } from "react";

const Staff: FC = () => {
    return (
        <>
            <section>
                <div className="lg:py-9 py-0" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-[35px] leading-[2.87rem] font-bold text-midnight_text dark:text-white ">How is the Emergency Department staffed?</h2>
                    <p className="text-base font-normal text-black text-opacity-50 dark:text-white dark:text-opacity-50 my-6">
                        Sometimes on purpose (injected humour and the like). It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from re
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="shrink-0">
                                                <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12.5" r="12" fill="#DBE7FF" />
                            <path
                                d="M16.2779 7.27734L9.65422 13.8949L6.85302 10.6756L5 12.5455L9.52548 17.7465L18 9.28764L16.2779 7.27734Z"
                                fill="#2F73F2"
                            />
                        </svg>
                      </div>
                        <span className="text-lg font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                            Vivamus eu lacus scelerisque, placerat commodo lectus.
                        </span>
                    </div>
                    <div className="flex items-center gap-5 py-7">
                      <div className="shrink-0">
                                                <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12.5" r="12" fill="#DBE7FF" />
                            <path
                                d="M16.2779 7.27734L9.65422 13.8949L6.85302 10.6756L5 12.5455L9.52548 17.7465L18 9.28764L16.2779 7.27734Z"
                                fill="#2F73F2"
                            />
                        </svg>
                      </div>
                        <span className="text-lg font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                            Etiam etanteatex porta fringilla.
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Staff;