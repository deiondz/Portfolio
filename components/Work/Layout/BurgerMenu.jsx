"use client";
import React, { useState } from "react";

import WorksSideBar from "./Works";
import { HammerIcon, Menu } from "lucide-react";
import { motion } from "framer-motion";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className="z-[100000px] relative flex justify-between w-full p-5 border-b-1 md:hidden border-neutral-700">
      <h1>Work</h1>
      <h1
        className="underline text-neutral-200 underline-offset-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        More Work
      </h1>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#232323]">
          <WorksSideBar setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      )}
    </motion.div>
  );
}

export default BurgerMenu;
