import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="bg-primary lg:py-24 py-16">
        <div className="container mx-auto max-w-screen-xl">
          <div className="">
            <div className="grid md:grid-cols-9 grid-cols-1 gap-7 border-b border-solid border-white border-opacity-50 pb-11">
              <div className="col-span-3">
                <h2 className="text-white max-w-56 text-[40px] leading-[3rem] font-bold">
                  Pune Head Office
                </h2>
              </div>
              <div className="col-span-3">
                <p className="sm:text-2xl text-xl text-IceBlue font-normal max-w-64 leading-10 text-white text-opacity-50">
                  4292 Mapleview Drive Greenfield Zip code 38230
                </p>
              </div>
              <div className="col-span-3">
                <Link
                  href="mailto:headoffice@CS Medical College.com"
                  className="sm:text-2xl text-xl text-white font-medium underline"
                >
                  headoffice@CS Medical College.com
                </Link>
                <Link
                  href="tel:731-621-5503"
                  className="sm:text-2xl text-xl text-white text-opacity-80 flex items-center gap-2 hover:text-opacity-100 w-fit"
                >
                  <span className="text-white !text-opacity-40">Call</span>
                  731-621-5503
                </Link>
              </div>
            </div>
            <div className="grid md:grid-cols-9 grid-cols-1 gap-7 pt-12">
              <div className="col-span-3">
                <h2 className="text-white max-w-52 text-[40px] leading-[3rem] font-bold">
                  Bengaluru Office
                </h2>
              </div>
              <div className="col-span-3">
                <p className="sm:text-2xl text-xl text-white text-opacity-50 font-normal max-w-64 leading-10">
                  3502 Marcus Street Geraldine Zip code 35974
                </p>
              </div>
              <div className="col-span-3">
                <Link
                  href="mailto:Office@CS Medical College.com"
                  className="sm:text-2xl text-xl text-white font-medium underline"
                >
                  Office@CS Medical College.com
                </Link>
                <Link
                  href="tel:731-235-7993"
                  className="sm:text-2xl text-white text-opacity-80 text-xl text-IceBlue flex items-center gap-2 hover:text-opacity-100 w-fit"
                >
                  <span className="text-white !text-opacity-40">Call</span>
                  731-235-7993
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
