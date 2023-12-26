import { Poppins, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@components/Layout/Navbar";
import { Providers } from "./providers";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const monoSpace = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});
export const metadata = {
  title: {
    default: "Portfolio",
    template: `%s`,
  },
  description:
    "NoteVault is here to elevate your learning journey with a comprehensive and user-friendly repository designed exclusively for St. Aloysius students.  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monoSpace.variable} ${inter.variable}`}>
        {" "}
        <Providers>
          <Navbar />
          <div className="ml-0 grid place-items-center  md:ml-[4rem]">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
