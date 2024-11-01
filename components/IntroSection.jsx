/* eslint-disable react/no-unescaped-entities */
"use client";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <>
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        className="flex flex-col items-start justify-start w-full gap-2 lg:w-1/2"
      >
        <h1 className="text-2xl font-semibold ">About</h1>
        <h4 className="text-xl font-normal text-neutral-400">
          A few things you should know
        </h4>
      </motion.div>
      <motion.section
        viewport={{ once: true }}
        initial={{ y: 20, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        className="flex flex-col items-center justify-center w-full gap-5 mt-10 lg:w-[60%]"
      >
        <div className="flex flex-col items-start justify-start w-full gap-10 md:flex-row">
          <h6 className=" text-neutral-500 md:block">Intro</h6>
          <div className="md:w-[80%] w-full h-full">
            <Image
              src="/self/Header.png"
              alt=""
              className="object-cover object-center w-full h-full aspect-[12/5]"
            />
            <div className="py-10 pb-0 text-sm space-y-7">
              <p>
                I'm Deion D'Souza, a front-end developer based in Mangalore, India, currently working at Tikanga. I’m focused on using design to create practical and enjoyable user experiences.
              </p>
              <p>
                Currently pursuing a Bachelor's degree in Computer Application,
                I've honed my skills through years of experience as a developer
                and graphic designer. I believe that design should be
                user-centric, and I always keep the end-user in mind when
                creating products.
              </p>
              <p>
                Outside of work, I’m a film enthusiast and enjoy exploring different styles and genres.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
