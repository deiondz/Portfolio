import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Portfolio",
    template: `%s | Portfolio`,
  },
  description:
    "NoteVault is here to elevate your learning journey with a comprehensive and user-friendly repository designed exclusively for St. Aloysius students.  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="ml-0 md:ml-[4rem]">{children}</div>
      </body>
    </html>
  );
}
