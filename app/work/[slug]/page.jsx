"use client";
import { Image } from "@nextui-org/react";
import React, { useContext, useEffect } from "react";
import { siteConfig } from "@config/site";
import Link from "next/link";
import { useGlobalContext } from "@contexts/WorkContext";
function Page({ params }) {
  const { setData } = useGlobalContext();
  const normalizeSlug = (str) =>
    str
      .toLowerCase()
      .normalize("NFD") // Normalize accents
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, ""); // Trim leading/trailing hyphens

  const decodedSlug = decodeURIComponent(params.slug); // Fix %20 issue
  const pageData = siteConfig.work.find(
    (page) => normalizeSlug(page.title) === normalizeSlug(decodedSlug)
  );

  useEffect(() => {
    setData(pageData);
  }, [setData, pageData]);

  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen py-10 pb-28 md:pb-10">
      <div className="flex flex-col items-start justify-start w-full gap-5 px-4 md:px-10 lg:w-[60%]">
        <Image
          src={pageData.image}
          alt=""
          className="object-cover  w-full h-full aspect-[16/9]"
        />
        <div className="space-y-10">
          <h1 className="text-2xl">{pageData.title}</h1>
          <div className="grid gap-y-3 text-[15px] text-neutral-200">
            {pageData.client && (
              <div className="flex items-start gap-3">
                <h6 className="flex-shrink-0 w-32 text-left text-neutral-500">
                  Client
                </h6>
                <p className="flex-grow">{pageData.client}</p>
              </div>
            )}

            {pageData.role && (
              <div className="flex items-start gap-3">
                <h6 className="flex-shrink-0 w-32 text-left text-neutral-500">
                  Role
                </h6>
                <p className="flex-grow">{pageData.role}</p>
              </div>
            )}

            {pageData.outcome && (
              <div className="flex items-start gap-3">
                <h6 className="flex-shrink-0 w-32 text-left text-neutral-500">
                  Outcome
                </h6>
                <p className="flex-grow leading-relaxed max-w-prose">
                  {pageData.outcome}
                </p>
              </div>
            )}

            {pageData.link && (
              <div className="flex items-start gap-3">
                <h6 className="flex-shrink-0 w-32 text-left text-neutral-500">
                  Link
                </h6>
                <Link
                  href={pageData.link}
                  target="_blank"
                  className="flex-grow underline break-words text-sky-300 underline-offset-2"
                >
                  {pageData.link}
                </Link>
              </div>
            )}

            {pageData.dummy && (
              <div className="flex items-start gap-3">
                <h6 className="flex-shrink-0 w-32 text-left text-neutral-500">
                  Dummy login
                </h6>
                <div className="flex flex-col flex-grow gap-1 text-neutral-400">
                  <span>Username: {pageData.dummy.username}</span>
                  <span>Password: {pageData.dummy.password}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col text-[15px] w-full space-y-10 ">
            {pageData.p.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
            {pageData.keyfeatures && (
              <div className="flex flex-col gap-3">
                <h6 className="font-medium text-large">Key features</h6>
                <ul className="flex flex-col gap-5 list-decimal list-inside">
                  {pageData.keyfeatures.map((item, index) => (
                    <li key={index}>
                      <span className="font-semibold">{item.header} : </span>
                      <span className="font-normal text-neutral-400">
                        {" "}
                        {item.point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {pageData.technologiesUsed && (
              <div className="flex flex-col gap-3">
                <h6 className="font-medium text-large">Technologies used</h6>
                <ul className="flex flex-col gap-2 list-disc list-inside">
                  {pageData.technologiesUsed.map((item, index) => (
                    <li key={index}>
                      <span className="font-semibold">{item.header} : </span>
                      <span className="font-normal text-neutral-400">
                        {" "}
                        {item.point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
