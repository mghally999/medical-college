import React, { FC } from "react";

const Skills: FC = () => {
  return (
    <>
      <section className="py-9">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-[35px] leading-[2.87rem] font-bold text-midnight_text dark:text-white ">
            My Skills
          </h2>
          <p className="text-base font-normal text-black text-opacity-50 dark:text-white dark:text-opacity-50 my-6">
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate.
          </p>
          <div className="progress_bar_item flex flex-wrap mb-8">
            <div className="flex-1 w-auto text-14 font-normal text-grey mb-2 dark:text-white dark:text-opacity-50">
              Empathy
            </div>
            <div className="item_value shrink text-14 font-normal text-grey mb-2 dark:text-white dark:text-opacity-50">
              95%
            </div>
            <div className="relative h-1 w-full bg-primary bg-opacity-30 rounded-md">
              <div
                className="progress absolute left-0 top-0 bottom-0 h-full bg-primary rounded-md duration-100 ease-in-out"
                style={{ width: `95%` }}
              ></div>
            </div>
          </div>
          <div className="progress_bar_item flex flex-wrap mb-8">
            <div className="flex-1 w-auto text-14 font-normal text-grey mb-2 dark:text-white dark:text-opacity-50">
              Technique
            </div>
            <div className="item_value shrink text-14 font-normal text-grey mb-2 dark:text-white dark:text-opacity-50">
              84%
            </div>
            <div className="relative h-1 w-full bg-primary bg-opacity-30 rounded-md">
              <div
                className="progress absolute left-0 top-0 bottom-0 h-full bg-primary rounded-md duration-100 ease-in-out"
                style={{ width: `84%` }}
              ></div>
            </div>
          </div>
          <div className="progress_bar_item flex flex-wrap mb-8">
            <div className="flex-1 w-auto text-14 font-normal text-grey mb-2 dark:text-white dark:text-opacity-50">
              Operation
            </div>
            <div className="item_value shrink text-14 font-normal text-grey mb-2 dark:text-white dark:text-opacity-50">
              90%
            </div>
            <div className="relative h-1 w-full bg-primary bg-opacity-30 rounded-md">
              <div
                className="progress absolute left-0 top-0 bottom-0 h-full bg-primary rounded-md duration-100 ease-in-out"
                style={{ width: `90%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
