"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
function Header() {
  const router = useRouter();

  return (
    <div className="flex items-center px-3 md:hidden border-b-1 md:border-b-0 md:px-10 ">
      <div
        onClick={() => {
          router.back();
        }}
      >
        <ArrowLeft />
      </div>

      <h1 className="px-4 py-5 text-2xl font-medium md:py-10 md:pb-0 ">
        My projects
      </h1>
    </div>
  );
}

export default Header;
