"use client";
import WorksSideBar from "@components/Work/Layout/Works";
import React, { useState } from "react";

function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <WorksSideBar setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
}

export default Page;
