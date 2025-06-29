import React from "react";
import { HistorySlider } from "./historyslider";


const History = () => {
    return (
        <section className="lg:py-24 py-16 bg-PowderBlue dark:bg-darklight">
            <div className="container mx-auto lg:max-w-screen-xl max-w-screen-md">
                <div className="grid grid-cols-12 gap-7 relative">
                    <div className="lg:col-span-4 col-span-12 text-center">
                        <h2 className="text-[40px] leading-[3rem] text-midnight_text dark:text-white font-bold mb-5">Health Point <br />History</h2>
                        <p className="text-lg text-black text-opacity-50 dark:text-white dark:text-opacity-50">Sometimes by accident, sometimes chunks as necessary making this the first true generator</p>
                    </div>
                    <div className="lg:col-span-8 col-span-12">
                        <HistorySlider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;