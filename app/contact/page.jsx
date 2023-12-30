import CopyPasteButton from "@components/Copy";
import { Button, Divider, Input, Textarea } from "@nextui-org/react";
import { FilesIcon, MailIcon, Send, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen py-10 pb-28 md:pb-10">
      <div className="flex flex-col items-start justify-start w-full gap-5 px-4 md:px-10  lg:w-[40%]">
        <div className="flex flex-col items-start justify-start w-full gap-2 0 lg:w-[60%]">
          <h1 className="text-3xl">Contact</h1>
          <p className="text-neutral-500">
            Let&apos;s talk about working together
          </p>
          <div
            viewport={{ once: true }}
            initial={{ y: 40, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
            whileInView={{ y: 0, opacity: 1 }}
            className="flex items-center gap-2 text-sm text-neutral-400"
          >
            <span>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
            </span>
            <p>Available for new opportunities</p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2 md:flex-row">
          <CopyPasteButton copyText="deiondsouza12@gmail.com">
            Copy Email
          </CopyPasteButton>
          <Link
            className="w-full"
            href="https://twitter.com/messages/compose?recipient_id=905371150888210432"
          >
            <Button
              radius="sm"
              color="secondary"
              className="w-full font-medium border-2 bg-neutral-800 border-neutral-700"
              endContent={
                <TwitterIcon size={20} strokeWidth={1.5} absoluteStrokeWidth />
              }
            >
              DM me
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center w-full ">
          <span className="text-sm text-neutral-500">or</span>
        </div>
        <form action="" method="post" className="flex flex-col w-full gap-3">
          <div className="flex flex-col items-start justify-start w-full gap-2 md:flex-row">
            <Input
              label="Name"
              placeholder="John Doe"
              className="w-full dark"
              required
            />
            <Input
              label="Email"
              placeholder="youremail@gmail.com"
              className="w-full dark"
              required
              type="email"
            />
          </div>
          <div>
            <Textarea
              label="Message"
              placeholder="Hello there!"
              className="w-full dark"
              required
              textarea
            />
          </div>
          <div>
            <Button
              radius="sm"
              type="submit"
              color="secondary"
              className="w-full font-medium border-2 bg-neutral-800 border-neutral-700"
              endContent={
                <Send size={20} strokeWidth={1.5} absoluteStrokeWidth />
              }
            >
              Send your message
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Page;
