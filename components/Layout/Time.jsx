"use client";

import React from "react";
import { motion } from "framer-motion";

const Data = [
  {
    Title: "Frontend Web Developer",
    Date: "May 2023 - Present",
    Company: "Tikanga",
    Description:
      "As a Frontend Developer, my role involves collaborating with the development team to create and implement frontend designs within the specified timeframe. I am responsible for designing and testing responsive UIs using React frameworks for various projects.",
  },
  {
    Title: "Assistant Video Editor",
    Date: "Jul 2022 - Aug 2022 ",
    Company: "Martin Noronha - Stoa",

    Description:
      "I had the opportunity to work with Martin Noronha as an assistant video editor for Stoa, a company aimed at providing business education. During my time there, I worked on a range of projects such as Instagram and Facebook adverts, podcasts and short form content. It was exciting to hone my skills in editing and also get creative with different kinds of media formats.",
  },
  {
    Title: "Social Media Manager",
    Date: "May 2022 - Aug 2022",
    Company: "Papa Ocus",

    Description:
      "I had the pleasure of working with Shirish Bajpai, also known as PapaOcus, on his personal brand. I primarily assisted him on various projects and helped create content for both Twitter threads and Instagram. I enjoyed being part of him and seeing his vision come to life as we collaborated on each task. It was a rewarding experience that taught me many valuable skills in the world of social media.",
  },
];

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
            {Data.map((item, index) => (
              <li
                key={index}
                className="relative flex items-baseline w-full gap-6 pb-5"
              >
                <div
                  className={
                    index !== Data.length - 1
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
