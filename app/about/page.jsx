/* eslint-disable react/no-unescaped-entities */
import IntroSection from "@components/IntroSection";
import Time, { Education } from "@components/Layout/Time";
import { Image } from "@nextui-org/react";
import React from "react";

export const metadata = {
  title: "About",
};

function Page() {
  return (
    <main className="flex flex-col items-center justify-center max-w-full min-h-screen px-4 py-10 md:py-20 pb-28 md:pb-10">
      <IntroSection />
      <Time />
      <Education />
    </main>
  );
}

export default Page;
