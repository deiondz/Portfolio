import ContactForm from "@components/Contact/contact";
import CopyPasteButton from "@components/Copy";
import { Button } from "@nextui-org/react";
import { TwitterIcon } from "lucide-react";
import Link from "next/link";

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
        <ContactForm />
      </div>
    </main>
  );
}

export default Page;
