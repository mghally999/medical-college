import React from "react";
import Link from "next/link";
import Logo from "@/components/Layout/Header/Logo";

const Footer = () => {
  return (
    <footer className="dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        <div className="grid grid-cols-12 gap-7 lg:pt-24 pt-16 sm:pb-14 pb-10 border-b border-solid border-footer_stroke dark:border-dark_border">
          <div className="md:col-span-6 col-span-12">
            <Logo />
            <p className="text-base font-normal text-black text-opacity-50 max-w-29 pt-9 dark:text-white dark:text-opacity-50">
              Letraset sheets containing Lorem Ipsum passages and more recently
              with desktop publishing Various versions have evolved over the
              years, sometimes.
            </p>
          </div>
          <div className="md:col-span-6 col-span-12 grid grid-cols-12 xs:gap-4 gap-8">
            <div className="sm:col-span-4 xs:col-span-6 col-span-12">
              <h6 className="pb-3 text-lg font-medium">Departments</h6>
              <ul>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Cardiology</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Sports Injury</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Radiology</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Lung Diseases</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Gynecology</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Eye Care</Link>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-4 xs:col-span-6 col-span-12">
              <h6 className="pb-3 text-lg font-medium">Major Links</h6>
              <ul>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Doctors</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Departments</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Appointment</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Working Hours</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">About us</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-4 xs:col-span-6 col-span-12">
              <h6 className="pb-3 text-lg font-medium">Quick Links</h6>
              <ul>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Health Insurance</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Medical Records</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Online Bill Pay</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Emergency Service</Link>
                </li>
                <li className="text-base text-black text-opacity-50 dark:text-white dark:text-opacity-50 hover:text-primary dark:hover:text-primary pb-1">
                  <Link href="#">Covid 19 info</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:pt-12 pt-5 grid grid-cols-12 sm:gap-7 gap-2 items-center pb-12">
          <div className="flex items-center gap-4 md:col-span-6 col-span-12">
            <Link href="#" className="group">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="#2F73F2"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-midnight_text"
              >
                <path
                  d="M32.0779 1.07666H2.88631C1.88676 1.07726 1.07646 1.88796 1.07666 2.88792V32.0795C1.07726 33.0791 1.88796 33.8894 2.88792 33.8892H18.6044V21.2H14.3427V16.2332H18.6044V12.5781C18.6044 8.33931 21.1921 6.03218 24.9733 6.03218C26.7843 6.03218 28.3406 6.16716 28.7943 6.22745V10.6577H26.1869C24.1297 10.6577 23.7314 11.6352 23.7314 13.0699V16.2332H28.6501L28.0092 21.2H23.7314V33.8892H32.0779C33.0781 33.8894 33.889 33.0789 33.8892 32.0787C33.8892 32.0785 33.8892 32.0783 33.8892 32.0779V2.88631C33.8888 1.88676 33.0779 1.07646 32.0779 1.07666Z"
                />
              </svg>
            </Link>
            <Link href="#" className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="white"
                className="bi bi-twitter-x bg-primary group-hover:bg-midnight_text dark:fill-darkmode"
                viewBox="-5 -5 25 25"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </Link>
            <Link href="#" className="group">
              <svg
                width="31"
                height="33"
                viewBox="0 0 31 33"
                fill="#2F73F2"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-midnight_text"
              >
                <g clipPath="url(#clip0_1_191)">
                  <path
                    d="M28.7643 0H2.23574C1.00092 0 0 1.06549 0 2.37998V30.62C0 31.9345 1.00092 33 2.23574 33H28.7643C29.9991 33 31 31.9345 31 30.62V2.37998C31 1.06549 29.9991 0 28.7643 0ZM10.9959 24.9434H7.22092V12.8536H10.9959V24.9434ZM9.10852 11.2028H9.08392C7.81717 11.2028 6.99789 10.2745 6.99789 9.11433C6.99789 7.92799 7.84224 7.02539 9.13359 7.02539C10.4249 7.02539 11.2196 7.92799 11.2442 9.11433C11.2442 10.2745 10.4249 11.2028 9.10852 11.2028ZM24.6076 24.9434H20.8331V18.4756C20.8331 16.8502 20.2865 15.7417 18.9207 15.7417C17.8779 15.7417 17.2568 16.4894 16.9839 17.2113C16.8841 17.4696 16.8597 17.8306 16.8597 18.1919V24.9434H13.085C13.085 24.9434 13.1344 13.9878 13.085 12.8536H16.8597V14.5654C17.3613 13.7416 18.2589 12.5699 20.2617 12.5699C22.7453 12.5699 24.6076 14.2978 24.6076 18.0111V24.9434Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_191">
                    <rect width="31" height="33" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="md:col-span-6 sm:col-span-9 col-span-12 flex sm:flex-row flex-col justify-between">
            <div className="lg:my-0 lg:mb-0 my-2 mb-3.5">
              <span className="text-xl font-medium text-midnight_text dark:text-white">
                Newsletter
              </span>
            </div>
            <div>
              <form className="flex items-stretch justify-end">
                <input
                  type="email"
                  placeholder="Email address*"
                  className="border border-solid border-border focus-visible:outline-none dark:focus-visible:outline-none  py-3 px-4 rounded-s-lg w-full focus-visible:outline-0 focus:!border-primary dark:bg-darkmode dark:placeholder:text-white dark:placeholder:opacity-50 dark:border-dark_border dark:focus:border-primary"
                />
                <button className="bg-primary text-white px-4 rounded-e-lg hover:bg-blue-700">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
