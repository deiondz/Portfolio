"use client";
import { Button } from "@nextui-org/react";
import { FilesIcon } from "lucide-react";
import { useState } from "react";
export default function CopyPasteButton({ children, copyText }) {
  const [click, onClick] = useState(false);
  const base = copyText;

  const links = base;
  const copylink = () => {
    navigator.clipboard.writeText(links);
    onClick(true);
    setTimeout(() => {
      onClick(false);
    }, 1000);
  };
  return (
    <Button
      onClick={copylink}
      radius="sm"
      color="secondary"
      className="w-full font-medium border-2 bg-neutral-800 border-neutral-700"
      endContent={<FilesIcon size={20} strokeWidth={1.5} absoluteStrokeWidth />}
    >
      {click ? "Copied!" : children}
    </Button>
  );
}
