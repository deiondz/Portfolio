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
              src="/deion.jpg"
              alt=""
              className="object-cover w-full h-full aspect-[12/5]"
            />
            <div className="py-10 pb-0 text-sm space-y-7">
              <p>
                I'm Deion D'Souza, a Front-end dev based in Mangalore, India,
                and I currently serve as a frontend developer at Tikanga. I'm
                passionate about using design to solve real-world problems and
                create meaningful experiences that enhance people's lives.
              </p>
              <p>
                Currently pursuing a Bachelor's degree in Computer Application,
                I've honed my skills through years of experience as a developer
                and graphic designer. I firmly believe that design should be
                user-centric, and I always keep the end-user in mind when
                creating products. My focus at Tikanga is on developing products
                that are both functional and aesthetically pleasing.
              </p>
              <p>
                When I'm not working, I love to watch cinema and immerse myself
                in new genre and styles of cinema. I also stay up-to-date with
                the latest advancements in technology and design.
              </p>
              <p>
                I'm proud to be part of the talented team at Tikanga and excited
                about the work we've accomplished together. I'm committed to
                continuing to push the boundaries of product design and create
                products that make a real difference in people's lives.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
