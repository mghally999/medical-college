import React, { FC } from "react";

const Biography: FC = () => {
  return (
    <>
      <section className="py-8">
        <div className="" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-[35px] leading-[2.87rem] font-bold text-midnight_text dark:text-white ">
            Biography
          </h2>
          <p className="text-base font-normal text-black text-opacity-50 dark:text-white dark:text-opacity-50 my-6">
            Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). It uses a
            dictionary of over 200 Latin words, combined with a handful of model
            sentence structures, to generate Lorem Ipsum which looks reasonable.
            The generated Lorem Ipsum is therefore always free from re
          </p>
          <table className="border-none">
            <tbody>
              <tr>
                <td className="text-2xl font-medium text-midnight_text dark:text-white">
                  Occupation:
                </td>
                <td className="text-xl font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50 lg:ps-14 ps-2 py-3">
                  Nephrology
                </td>
              </tr>
              <tr>
                <td className="text-2xl font-medium text-midnight_text dark:text-white">
                  Experience:
                </td>
                <td className="text-xl font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50 lg:ps-14 ps-2 py-3">
                  20 years
                </td>
              </tr>
              <tr>
                <td className="text-2xl font-medium text-midnight_text dark:text-white">
                  Certificates:
                </td>
                <td className="text-xl font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50 lg:ps-14 ps-2 py-3">
                  Robert L. Nobel Price, Edison Awards
                </td>
              </tr>
              <tr>
                <td className="text-2xl font-medium text-midnight_text dark:text-white">
                  Skills:
                </td>
                <td className="text-xl font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50 lg:ps-14 ps-2 py-3">
                  Working with both children and adults
                </td>
              </tr>
              <tr>
                <td className="text-2xl font-medium text-midnight_text dark:text-white">
                  Location:
                </td>
                <td className="text-xl font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50 lg:ps-14 ps-2 py-3">
                  380 Albert ST, Melbourne
                </td>
              </tr>
              <tr>
                <td className="text-2xl font-medium text-midnight_text dark:text-white">
                  Phone:
                </td>
                <td className="text-xl font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50 lg:ps-14 ps-2 py-3">
                  +1 (230)-369-155-23
                </td>
              </tr>
              <tr>
                <td className="text-2xl font-medium text-midnight_text dark:text-white">
                  Email:
                </td>
                <td className="text-xl font-medium text-black text-opacity-50 dark:text-white dark:text-opacity-50 lg:ps-14 ps-2 py-3">
                  jessica@joan.com
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Biography;
