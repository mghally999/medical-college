import React, { FC } from "react";
import Link from "next/link";

const ContactForm: FC = () => {
  return (
    <section className="md:bg-[linear-gradient(90deg,#2f73f2_60%,#46C4FF_40%)] bg-[linear-gradient(90deg,#2f73f2_100%,#46C4FF_40%)]">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="grid grid-cols-12 gap-7">
          <div className="md:col-span-5 col-span-12 lg:mr-20 mr-0">
            <h2 className="text-white sm:pb-10 lg:text-[35px] leading-[2.87rem] text-2xl font-bold pb-0">
              Get quick free professional consultation
            </h2>
            <div className="flex items-center gap-6 py-8 border-b border-solid border-border border-opacity-40">
              <div className="lg:block hidden">
                <i className="bg-[url('/images/contact_form/clock.svg')] bg-no-repeat bg-contain w-[2.9375rem] h-[2.9375rem] inline-block"></i>
              </div>
              <div>
                <p className="text-white sm:text-xl lg:block flex flex-col text-base font-bold">
                  Mon-Fri :{" "}
                  <span className="text-LightPeriwinkle font-normal">
                    9:00 am - 10:00 pm
                  </span>
                </p>
                <p className="text-white lg:block flex flex-col sm:text-xl text-base font-bold">
                  Sat-Sun :{" "}
                  <span className="text-LightPeriwinkle font-normal">
                    9:00 am - 8:00 pm
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 py-8 border-b border-solid border-border border-opacity-40">
              <div className="lg:block hidden">
                <i className="bg-[url('/images/contact_form/contact.svg')] bg-no-repeat bg-contain w-[3.0625rem] h-[3.0625rem] inline-block"></i>
              </div>
              <div>
                <p className="text-white sm:text-xl lg:block flex flex-col text-base font-bold">
                  Phone :{" "}
                  <span className="text-LightPeriwinkle font-normal">
                    +(690) 2560 0020
                  </span>
                </p>
                <p className="text-white sm:text-xl lg:block flex flex-col text-base font-bold">
                  Email :{" "}
                  <span className="text-LightPeriwinkle font-normal">
                    booking@CS Medical College.com
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 py-8">
              <div className="lg:block hidden">
                <i className="bg-[url('/images/contact_form/location.svg')] bg-no-repeat bg-contain w-[3.0625rem] h-[3.0625rem] inline-block"></i>
              </div>
              <div className="max-w-[13.5rem]">
                <p className="text-white sm:text-xl text-base font-bold">
                  Address :{" "}
                  <span className="text-LightPeriwinkle font-normal">
                    CS Medical College 4263 Wilkinson Street Tennessee
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-3.75">
              <Link
                href="#"
                className="btn bg-PictonBlue relative pl-16 overflow-y-hidden py-4 pr-4 text-white font-medium overflow-hidden rounded-lg hover:bg-cyan-500"
              >
                <i className="bg-[url('/images/contact_form/map.svg')] bg-no-repeat w-12 h-12 inline-block absolute left-0 top-2"></i>
                View Location Map
              </Link>
            </div>
          </div>
          <div className="md:col-span-7 col-span-12 bg-white dark:bg-darkmode rounded-lg lg:ml-16 ml-0">
            <form>
              <div className="grid grid-cols-2 gap-5 sm:pt-3.75 pt-7 lg:px-16 px-6">
                <div className="lg:col-span-1 col-span-2 flex flex-col">
                  <label
                    htmlFor="name"
                    className="pb-4 inline-block text-lg font-normal"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-border px-4 py-2 focus:outline-none placeholder:text-placeholder dark:placeholder:text-white dark:placeholder:opacity-50 rounded-lg dark:bg-darkmode dark:border-dark_border dark:focus:border-primary focus:border-primary"
                    placeholder="Full Name"
                  />
                </div>
                <div className="lg:col-span-1 col-span-2 flex flex-col">
                  <label htmlFor="email" className="pb-4 inline-block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-border px-4 py-2 focus:outline-none placeholder:text-placeholder rounded-lg dark:placeholder:text-white dark:placeholder:opacity-50 dark:bg-darkmode dark:border-dark_border dark:focus:border-primary focus:border-primary"
                    placeholder="Email address"
                  />
                </div>
                <div className="lg:col-span-1 col-span-2 flex flex-col">
                  <label htmlFor="phone" className="pb-4 inline-block">
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    className="border border-border px-4 py-2 focus:outline-none placeholder:text-placeholder rounded-lg dark:placeholder:text-white dark:placeholder:opacity-50 dark:bg-darkmode dark:border-dark_border dark:focus:border-primary focus:border-primary"
                    placeholder="+91"
                  />
                </div>
                <div className="lg:col-span-1 col-span-2 flex flex-col">
                  <label htmlFor="department" className="pb-4 inline-block">
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    className="border border-border px-4 py-2 focus:outline-none placeholder:text-placeholder rounded-lg dark:placeholder:text-white dark:placeholder:opacity-50 dark:bg-darkmode dark:border-dark_border dark:focus:border-primary focus:border-primary"
                    placeholder="Ortho"
                  />
                </div>
                <div className="lg:col-span-1 col-span-2 flex flex-col">
                  <label htmlFor="time" className="pb-4 inline-block ">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="border border-border px-4 py-2 focus:outline-none text-placeholder rounded-lg dark:text-white dark:opacity-50 dark:bg-darkmode dark:border-dark_border dark:focus:border-primary focus:border-primary"
                    placeholder="time"
                  />
                </div>
                <div className="lg:col-span-1 col-span-2 flex flex-col">
                  <label htmlFor="date" className="pb-4 inline-block">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="border border-border px-4 py-2 focus:outline-none text-placeholder rounded-lg dark:text-white dark:opacity-50 dark:bg-darkmode dark:border-dark_border dark:focus:border-primary focus:border-primary"
                    placeholder="date"
                  />
                </div>
                <div className="col-span-2 flex flex-col">
                  <label htmlFor="message" className="pb-4 inline-block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border border-border px-4 py-2 focus:outline-none placeholder:text-placeholder dark:bg-darkmode dark:placeholder:text-white dark:placeholder:opacity-50 dark:border-dark_border rounded-lg dark:focus:border-primary focus:border-primary"
                    placeholder="Anything else you wanna communicate"
                  ></textarea>
                </div>
              </div>
              <div className="lg:px-16 pl-10 mt-8 mb-4.5">
                <button className="bg-transparent border leading-none border-primary text-primary px-6 text-lg font-medium py-4 rounded-lg hover:bg-blue-600 hover:text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
