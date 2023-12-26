"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@config/site";

function Time() {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ y: 20, opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
      whileInView={{ y: 0, opacity: 1 }}
      className="flex flex-col items-center justify-center w-full gap-10 mt-10 lg:w-1/2"
    >
      <div className="flex flex-col w-full gap-10 ">
        <h6 className=" text-neutral-500 md:block">Experience</h6>
        <div className="flex flex-col w-full gap-3 text-sm">
          <ul className="w-full md:pl-20">
            {siteConfig.time.map((item, index) => (
              <li
                key={index}
                className="relative flex items-baseline w-full gap-6 pb-5"
              >
                <div
                  className={
                    index !== siteConfig.time.length - 1
                      ? `before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-neutral-400`
                      : ""
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    className="bi bi-circle-fill fill-neutral-400"
                    viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-semibold text-neutral-300 ">
                    {item.Title}
                  </p>
                  <p className="text-base font-normal ">{item.Company}</p>
                  <p className="text-neutral-400">{item.Date}</p>
                  <p className="mt-2 text-sm text-neutral-300">
                    {item.Description}{" "}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export function Education() {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ y: 20, opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
      whileInView={{ y: 0, opacity: 1 }}
      className="flex flex-col items-center justify-center w-full gap-10 mt-10 lg:w-1/2"
    >
      <div className="flex flex-col w-full gap-10 ">
        <h6 className=" text-neutral-500 md:block">Education</h6>
        <div className="flex flex-col w-full gap-3 text-sm">
          <ul className="w-full md:pl-20">
            {siteConfig.Education.map((item, index) => (
              <li
                key={index}
                className="relative flex items-baseline w-full gap-6 pb-5"
              >
                <div
                  className={
                    index !== siteConfig.Education.length - 1
                      ? `before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-neutral-400`
                      : ""
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    className="bi bi-circle-fill fill-neutral-400"
                    viewBox="0 0 16 16"
                  >
                    <circle cx={8} cy={8} r={8} />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-semibold text-neutral-300 ">
                    {item.Title}
                  </p>
                  <p className="text-base font-normal ">{item.Company}</p>
                  <p className="text-neutral-400">{item.Date}</p>
                  <p className="mt-2 text-sm text-neutral-300">
                    {item.Description}{" "}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Time;
