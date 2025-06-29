import React, { FC } from "react";
import Image from "next/image";

const Awards: FC = () => {
  return (
    <>
      <section className="py-9">
        <div data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-[35px] leading-[2.87rem] font-bold text-midnight_text dark:text-white ">
            Awards & Hours
          </h2>
          <p className="text-base font-normal text-black text-opacity-50 dark:text-white dark:text-opacity-50 my-6">
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable. The generated Lorem Ipsum is therefore always free
            from re
          </p>
          <div className="flex lg:items-center items-start justify-between mt-14">
            <div>
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/20">
                <Image
                  src="/images/services/cardiology.svg"
                  alt="..."
                  width={30}
                  height={30}
                  className="shrink-0"
                />
              </div>
              <h4 className="font-medium mt-3 text-[22px] leading-[2rem] text-midnight_text dark:text-white">
                Robert L. Nobel Price
              </h4>
              <p className="text-xl font-medium text-black dark:text-white text-opacity-50 dark:text-opacity-50">
                Canadian Cancer Society
              </p>
            </div>
            <div>
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/20">
                <Image
                  src="/images/services/eye-care.svg"
                  alt="..."
                  width={40}
                  height={40}
                  className="shrink-0"
                />
              </div>
              <h4 className="font-medium mt-3 text-[22px] leading-[2rem] text-midnight_text dark:text-white">
                Edison Awards
              </h4>
              <p className="text-xl font-medium text-black dark:text-white text-opacity-50 dark:text-opacity-50">
                Research in Developmental
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
