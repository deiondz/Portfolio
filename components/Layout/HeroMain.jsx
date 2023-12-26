import React from "react";
import moment from "moment";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import {
  Github,
  GithubIcon,
  Instagram,
  InstagramIcon,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

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
      <Avatar className="w-20 h-20 ">
        <AvatarImage src="/deion.jpg" className="object-cover" alt="@shadcn" />
        <AvatarFallback>DD</AvatarFallback>
      </Avatar>
      <div className="py-2">
        <h1 className="text-2xl tracking-tighter text-center text-neutral-100">
          Deion D&apos;souza
        </h1>
        <h2 className="text-xl tracking-tight text-center text-neutral-400">
          Front-end developer at Tikanga
        </h2>
      </div>
    </div>
  );
}

function HeroMain() {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-5 p-10">
      <h5 className=" text-neutral-600">{currentTime}</h5>
      <UserInfo />
      <p className="flex items-center gap-2 text-neutral-400">
        <span>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
        </span>
        Available for new opportunities
      </p>
      <div className="flex flex-row gap-5">
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
      </div>
    </section>
  );
}

export default HeroMain;
