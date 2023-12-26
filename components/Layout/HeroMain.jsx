"use client";
import React from "react";
import moment from "moment";
import {
  Files,
  FilesIcon,
  Github,
  GithubIcon,
  Instagram,
  InstagramIcon,
  Mail,
  MailCheck,
  MailIcon,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Avatar, Button, ButtonGroup, Image } from "@nextui-org/react";
import HackerText from "@components/ui/hackertext";
import { motion } from "framer-motion";

const currentTime = moment().format("LT");
const data = [
  {
    icon: <TwitterIcon size={30} strokeWidth={2} absoluteStrokeWidth />,
    name: "Twitter",
    href: "https://twitter.com/shadcn",
  },
  {
    icon: <InstagramIcon size={30} strokeWidth={2} absoluteStrokeWidth />,
    name: "Instagram",
    href: "https://twitter.com/shadcn",
  },
  {
    icon: <GithubIcon size={30} strokeWidth={2} absoluteStrokeWidth />,
    name: "Instagram",
    href: "https://twitter.com/shadcn",
  },
];

function UserInfo() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 40, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <Avatar
          src="/deion.webp"
          className="object-cover w-20 h-20 text-large"
        />
      </motion.div>
      <div className="py-2">
        <motion.h1
          viewport={{ once: true }}
          initial={{ y: 40, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-2xl tracking-tighter text-center text-neutral-100"
        >
          Deion D&apos;souza
        </motion.h1>
        <motion.h2
          viewport={{ once: true }}
          initial={{ y: 40, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-xl tracking-tight text-center text-neutral-400"
        >
          Front-end developer at Tikanga
        </motion.h2>
      </div>
    </div>
  );
}

function HeroMain() {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-5 px-10 lg:max-w-lg">
      <motion.h1
        viewport={{ once: true }}
        initial={{ y: 40, opacity: 0.5 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        className=" text-neutral-600 mono"
      >
        <HackerText>{currentTime}</HackerText>
      </motion.h1>
      <UserInfo />
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 40, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 text-sm text-neutral-400"
      >
        <span>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
        </span>
        <p>Available for new opportunities</p>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 40, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        className="flex flex-row gap-5"
      >
        {data.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all text-neutral-600 hover:text-neutral-200"
          >
            {item.icon}
          </Link>
        ))}
      </motion.div>
      <div className="flex flex-col items-center justify-between w-full gap-3 md:flex-row ">
        <motion.div
          viewport={{ once: true }}
          initial={{ x: -40, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          whileInView={{ x: 0, opacity: 1 }}
          className="w-full"
        >
          <Button
            radius="sm"
            className="w-full font-medium"
            color="default"
            endContent={
              <MailIcon
                size={20}
                strokeWidth={1.5}
                color="#3a3636"
                absoluteStrokeWidth
              />
            }
          >
            Contact me
          </Button>
        </motion.div>
        <motion.span
          viewport={{ once: true }}
          initial={{ y: 40, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-xs text-neutral-600"
        >
          Or
        </motion.span>
        <motion.div
          viewport={{ once: true }}
          initial={{ x: 40, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
          whileInView={{ x: 0, opacity: 1 }}
          className="w-full "
        >
          <Button
            radius="sm"
            color="secondary"
            className="w-full font-medium border-2 bg-neutral-800 border-neutral-700"
            endContent={
              <FilesIcon size={20} strokeWidth={1.5} absoluteStrokeWidth />
            }
          >
            Copy Email
          </Button>
        </motion.div>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ y: 40, opacity: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        className="w-full text-sm text-neutral-600 mono"
      >
        <h1 className="w-full text-center">
          <HackerText>Mangalore, </HackerText>
          <HackerText>IND · </HackerText>
          <HackerText>12.88638° N,</HackerText>
          <HackerText> 74.88138° E</HackerText>
        </h1>
      </motion.div>
    </section>
  );
}

export default HeroMain;
