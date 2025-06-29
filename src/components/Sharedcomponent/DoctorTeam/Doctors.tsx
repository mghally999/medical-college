import React from "react";
import { Doctors } from "@/app/api/data";
import Link from "next/link";
import Image from "next/image";

const DoctorList = () => {
  return (
    <div className="grid grid-cols-12 gap-7 md:pt-20 pt-8">
      {Doctors.map((item, index) => (
        <Link
          key={index}
          href={`/doctors/${item.slug}`}
          className={`md:col-span-3 sm:col-span-6 col-span-12 group ${item.delay}`}
          data-aos="fade-up"
          data-aos-delay={item.delay}
          data-aos-duration="1000"
        >
          <div className=" rounded-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.alt}
              width={250}
              height={0}
              style={{ width: "100%", height: "auto" }}
              className="transition-all duration-500 group-hover:scale-110 group-hover:cursor-pointer"
            />
          </div>
          <h4 className="pb-1 pt-8 group-hover:text-primary group-hover:cursor-pointer text-2xl text-midnight_text font-bold dark:text-white">
            {item.title}
          </h4>
          <p className="font-normal text-lg group-hover:text-primary group-hover:cursor-pointer dark:text-white dark:text-opacity-50">
            {item.info}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default DoctorList;
