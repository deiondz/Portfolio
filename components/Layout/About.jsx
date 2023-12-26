"use client";
import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ y: 20, opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
      whileInView={{ y: 0, opacity: 1 }}
      className="flex flex-col items-center justify-center w-full gap-5 py-0 mt-10 lg:w-1/2"
    >
      <div className="flex flex-col items-baseline justify-center w-full gap-10 md:flex-row">
        <h6 className="hidden text-neutral-500 md:block">About</h6>
        <div className="w-full text-sm space-y-7">
          <p>
            I&apos;m Deion D&apos;Souza, a Front-end dev based in Mangalore,
            India.
          </p>
          <p>
            With a rich background spanning over 3 years in design, my
            commitment lies in crafting visually captivating and user-friendly
            designs that consistently surpass client expectations.
          </p>
          <p>
            Whether you&apos;re looking for a new website, a redesign, or a
            custom web app, I&apos;m here to help.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
