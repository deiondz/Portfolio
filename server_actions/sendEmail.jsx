"use server";
import { EmailTemplate } from "@emails/template";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(name, message, email) {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["deiondsouza12@gmail.com"],
      subject: `New Message from ${name}!`,
      react: EmailTemplate({ firstName: name, message: message, email: email }),
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
