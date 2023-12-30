import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { siteConfig } from "@config/site";

function page() {
  return (
    <div className="w-full min-h-screen pb-20 space-y-5 max-h-max">
      <h1 className="px-4 py-5 text-2xl font-medium md:py-8 md:pb-0 border-b-1 md:border-b-0 md:px-10 ">
        My Projects
      </h1>
      <div className="grid grid-cols-1 gap-5 px-4 md:grid-cols-3 md:px-10 lg:grid-cols-3 xl:grid-cols-4">
        {siteConfig.work.map((item, index) => (
          <Link
            className="w-full h-full"
            key={index}
            href={`/work/${item.title.replace(" ", "-")}`}
          >
            <div className=" rounded-xl p-3 gap-2 hover:bg-neutral-700 transition-all h-full flex flex-col justify-between  bg-[#282828] border border-[#343434]">
              <div className="flex flex-col items-start h-full gap-3 ">
                <div className="flex items-start w-full gap-2 ">
                  <Image
                    alt="nextui logo"
                    className="object-cover w-[40px] aspect-square"
                    radius="sm"
                    src={item.icon}
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-md">{item.title}</p>
                    <p className="text-xs text-neutral-500">DSDS</p>
                  </div>
                </div>
                <div className="flex flex-col h-full">
                  <p className="h-full text-sm line-clamp-3 text-neutral-200">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="w-full h-full pt-0 overflow-visible ">
                <Image
                  unoptimized="true"
                  alt="Card background"
                  isZoomed
                  className="object-cover w-full aspect-video rounded-xl"
                  src={item.image}
                  width={1000}
                  height={50}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
