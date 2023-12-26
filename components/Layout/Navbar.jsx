import { Briefcase, Home, Mailbox, Search, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const data = [
  {
    icon: (
      <Home
        strokeWidth={1.25}
        size={30}
        absoluteStrokeWidth
        className="transition-all text-neutral-600 hover:text-neutral-200"
      />
    ),
    name: "Home",
  },
  {
    icon: (
      <Briefcase
        strokeWidth={1.5}
        absoluteStrokeWidth
        size={30}
        className="transition-all text-neutral-600 hover:text-neutral-200"
      />
    ),
    name: "Work",
  },
  {
    icon: (
      <User
        strokeWidth={1.5}
        absoluteStrokeWidth
        size={30}
        className="transition-all text-neutral-600 hover:text-neutral-200"
      />
    ),
    name: "About",
  },
  {
    icon: (
      <Mailbox
        strokeWidth={1.5}
        absoluteStrokeWidth
        size={30}
        className="transition-all text-neutral-600 hover:text-neutral-200"
      />
    ),
    name: "Contact",
  },
  {
    icon: (
      <Search
        strokeWidth={1.5}
        absoluteStrokeWidth
        size={30}
        className="transition-all text-neutral-600 hover:text-neutral-200"
      />
    ),
    name: "Search",
  },
];

function Navbar() {
  return (
    <nav className="md:w-[4rem] h-[4rem]  bottom-0  w-screen fixed md:h-screen border-t-[0.01px] md:border-t-0 md:border-r-[0.01px] border-neutral-700 ">
      <div className="flex flex-row items-center h-full gap-5 justify-evenly md:justify-center md:flex-col">
        {data.map((item, index) => (
          <Link
            href={item.name.toLowerCase()}
            key={index}
            className="flex flex-col items-center justify-center "
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
