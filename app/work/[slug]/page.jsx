"use client";
import { Image } from "@nextui-org/react";
import React, { useContext } from "react";
import { siteConfig } from "@config/site";
import Link from "next/link";
import { useGlobalContext } from "@contexts/WorkContext";
import BurgerMenu from "@components/Work/Layout/BurgerMenu";
function Page({ params }) {
  const { setData } = useGlobalContext();
  const pageData = siteConfig.work.find(
    (page) => page.title.replace(" ", "-") === params.slug
  );
  setData(pageData);
  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen py-10 pb-28 md:pb-10">
      <div className="flex flex-col items-start justify-start w-full gap-5 px-4 md:px-10 lg:w-[60%]">
        <Image
          src="/deion.jpg"
          alt=""
          className="object-cover  w-full h-full aspect-[16/9]"
        />
        <div className="space-y-10">
          <h1 className="text-2xl">{pageData.title}</h1>
          <div className="flex flex-row gap-6 text-[15px]">
            <div className="flex flex-col gap-3 text-neutral-500">
              {pageData.client && <h6>Client</h6>}
              {pageData.role && <h6>Role</h6>}
              {pageData.outcome && <h6>Outcome</h6>}
              {pageData.link && <h6>Link</h6>}
              {pageData.dummy && <h6>Dummy login</h6>}
            </div>
            <div className="flex flex-col gap-3 text-[15px] text-neutral-200">
              {pageData.client && <p>{pageData.client}</p>}
              {pageData.role && <p>{pageData.role}</p>}
              {pageData.outcome && <p>{pageData.outcome}</p>}
              {pageData.link && (
                <Link
                  href={pageData.link}
                  className="underline text-sky-300 underline-offset-2"
                >
                  {pageData.link}
                </Link>
              )}
              {pageData.dummy && (
                <p className="flex gap-2">
                  <span className=" text-neutral-400">
                    Username : {pageData.dummy.username}
                  </span>
                  <span className=" text-neutral-400">
                    Password : {pageData.dummy.password}
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col text-[15px] w-full space-y-10 ">
            {pageData.p.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
