"use client";
import { siteConfig } from "@config/site";
import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Work() {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{ y: 20, opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
      whileInView={{ y: 0, opacity: 1 }}
      className="flex flex-col items-center justify-center w-full gap-5 mt-10 lg:w-1/2"
    >
      <div className="flex flex-col items-start justify-start w-full gap-10 lg:flex-row">
        <h6 className=" text-neutral-500 md:block">Work</h6>
        <div className="flex flex-col w-full gap-3 text-sm">
          {siteConfig.work.slice(0, 3).map((item, index) => (
            <Link key={index} href={`/work/${item.title.replace(" ", "-")}`}>
              <Card
                shadow="none"
                fullWidth
                className="  hover:bg-neutral-700 bg-[#282828] border border-[#343434]"
              >
                <CardHeader className="flex gap-3">
                  <div className=" w-[50px] aspect-square">
                    <Image
                      alt="nextui logo"
                      className="object-cover aspect-square"
                      radius="sm"
                      src={item.icon}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md">{item.title}</p>
                    <p className="overflow-hidden text-sm text-gray-500 line-clamp-1">
                      {item.shortDescription}
                    </p>
                  </div>
                </CardHeader>
                <CardBody className="p-3 pt-0 overflow-visible ">
                  <Image
                    unoptimized="true"
                    alt="Card background"
                    isZoomed
                    className="object-cover w-full h-64 rounded-xl"
                    src={item.image}
                    width={1000}
                    height={50}
                  />
                </CardBody>
              </Card>
            </Link>
          ))}
          <Button
            endContent={
              <span>
                <ArrowRight color="#7a7575" size={20} strokeWidth={1.75} />
              </span>
            }
            className="hover:bg-neutral-700 font-medium bg-[#282828] border text-neutral-200 border-[#343434]"
          >
            View more
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
