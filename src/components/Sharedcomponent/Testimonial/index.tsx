import React from "react";
import Link from "next/link";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="bg-PowderBlue dark:bg-darklight">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
          <div
            className="col-span-5"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="max-w-96 lg:pb-16 pb-8 border-b border-solid dark:border-dark_border">
              <h2 className="text-[35px] leading-[2.87rem] text-midnight_text font-bold dark:text-white">
                Customers testimonials
              </h2>
            </div>
            <div className="lg:pt-16 pt-8">
              <span className="lg:text-[97px] lg:leading-[7.93rem] sm:text-[50px] leading-[4.06rem] font-bold text-primary">
                1950+
              </span>
              <p className="lg:text-2xl text-lg font-medium text-primary">
                clients & 4.9 Rating based on 5
              </p>
              <Link
                href="#"
                className="border border-primary text-primary px-6 py-4 lg:mt-16 mt-8 inline-block hover:bg-primary hover:text-white text-lg font-medium rounded-lg"
              >
                More Testimonials
              </Link>
            </div>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="md:col-span-6 col-span-7">
            <div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <i className="bg-[url('/images/testimonial/quotation.svg')] bg-contain bg-no-repeat w-14 h-14 inline-block"></i>
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="lg:text-2xl lg:leading-[1.5] text-lg leading-7 font-normal text-black text-opacity-50 max-w-xl dark:text-white dark:text-opacity-50"
              >
                Through compassionate care and advanced expertise, we’ve earned
                lasting patient trust by addressing unique needs with
                personalized, high-quality treatments and the latest medical
                technology.
              </p>
            </div>
            <div
              className="pl-0 pt-12 pb-20"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <span className="text-2xl font-medium leading-7 text-midnight_text dark:text-white">
                Stephanie Sue
              </span>
              <p className="text-xl font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50">
                Designation
              </p>
            </div>
            <div
              className="max-w-36.875 md:-mb-6.5"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <Image
                src="/images/testimonial/user.jpg"
                alt="user"
                width={500}
                height={0}
                quality={100}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
