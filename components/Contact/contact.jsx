"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { sendEmail } from "@server_actions/sendEmail";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast, { LoaderIcon, Toaster } from "react-hot-toast";
import { useState } from "react";

const ContactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(1).max(1000),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();
  async function onSubmit(formData) {
    const validated = ContactFormSchema.safeParse(formData);
    if (!validated.success) {
      toast.error("Please fill in all the fields correctly.");
    } else {
      setLoading(true);
      const value = await sendEmail(
        formData.name,
        formData.message,
        formData.email
      );
      if (value.success) {
        setLoading(false);
        toast.success("Your message has been sent successfully.");
      } else {
        setLoading(false);
        toast.error("An error occurred while sending your message.");
      }
    }
    reset();
  }
  return (
    <form
      className="flex flex-col w-full gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-start justify-start w-full gap-2 md:flex-row">
        <Input
          label="Name"
          placeholder="John Doe"
          className="w-full dark"
          required
          {...register("name")}
        />

        <Input
          label="Email"
          placeholder="youremail@gmail.com"
          className="w-full dark"
          required
          type="email"
          {...register("email")}
        />
      </div>
      <div>
        <Textarea
          label="Message"
          placeholder="Hello there!"
          className="w-full dark"
          required
          textarea
          {...register("message")}
        />
      </div>
      <div>
        <Button
          disabled={loading || isSubmitting}
          loading={loading}
          radius="sm"
          type="submit"
          color="secondary"
          className="w-full font-medium border-2 disabled:bg-neutral-700 bg-neutral-800 border-neutral-700"
          endContent={
            !loading && <Send size={20} strokeWidth={1.5} absoluteStrokeWidth />
          }
        >
          {loading ? <LoaderIcon /> : "Send your message"}
        </Button>
      </div>
      <Toaster />
    </form>
  );
}
