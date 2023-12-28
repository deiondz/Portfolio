"use client";
import { Card, CardBody } from "@nextui-org/react";
import {
  Briefcase,
  HammerIcon,
  Home,
  Mailbox,
  Menu,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { siteConfig } from "@config/site";
import NowView from "./NowView";

function WorksSideBar({ isOpen, setIsOpen }) {
  return (
    <section className="md:w-[20rem] overflow-scroll z-20 overflow-x-hidden md:p-5 bottom-0 bg-[#232323]  w-screen fixed h-screen border-t-[0.01px] md:border-t-0 md:border-r-[0.01px] border-neutral-700 ">
      <h1 className="hidden text-xl font-medium text-neutral-200 md:block">
        Work
      </h1>
      <div className="flex justify-between w-full p-5 md:hidden border-b-1 border-neutral-700">
        <h1>Work</h1>
        <Menu
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="w-6 h-6 text-neutral-200"
        />
      </div>
      <NowView />
      <div className="flex flex-col gap-2 px-4 pt-5 md:px-0 text-neutral-500">
        <h1 className="text-medium">Up next</h1>
        {siteConfig.work.map((item, index) => (
          <Link
            key={index}
            href={`/work/${item.title.replace(" ", "-")}`}
            className="h-1/2"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Card
              shadow="none"
              fullWidth
              radius="sm"
              className="p-0 bg-transparent hover:bg-neutral-700"
            >
              <CardBody>
                <h1 className="text-large text-neutral-200">{item.title}</h1>
                <p className="overflow-hidden text-sm text-gray-500 line-clamp-3">
                  {item.description}
                </p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WorksSideBar;
