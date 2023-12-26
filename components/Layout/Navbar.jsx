"use client";
import { Tooltip } from "@nextui-org/react";
import { Briefcase, Home, Mailbox, Search, User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { siteConfig } from "@config/site";

function Navbar() {
  const [active, setActive] = useState("Home");
  return (
    <nav className="md:w-[4rem] h-[4rem] z-40   bottom-0 bg-[#232323]  w-screen fixed md:h-screen border-t-[0.01px] md:border-t-0 md:border-r-[0.01px] border-neutral-700 ">
      <div className="flex flex-row items-center h-full gap-5 justify-evenly md:justify-center md:flex-col">
        {siteConfig.navItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`flex flex-col items-center justify-center  hover:text-neutral-200  
              ${
                active === item.name.toLowerCase()
                  ? "text-neutral-200"
                  : "text-neutral-600"
              }`}
            onClick={() => {
              console.log(item.name.toLowerCase());
              setActive(item.name.toLowerCase());
            }}
          >
            <Tooltip
              showArrow={true}
              placement="left"
              offset={20}
              color="foreground"
              className=" text-neutral-200"
              content={item.name}
            >
              {item.icon}
            </Tooltip>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
