"use client";
import { motion } from "framer-motion";
import React from "react";
import { siteConfig } from "@config/site";
function About() {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ y: 20, opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
      whileInView={{ y: 0, opacity: 1 }}
      className="flex flex-col items-center justify-center w-full gap-5 py-0 mt-10 lg:w-1/2"
    >
      <div className="flex flex-col items-baseline justify-center w-full gap-10 lg:flex-row">
        <h6 className="hidden text-neutral-500 md:block">About</h6>
        <div className="w-full text-sm space-y-7">
          {siteConfig.brief.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
