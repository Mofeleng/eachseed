import type { Metadata } from "next";
import { Poppins } from "@next/font/google"
import "./globals.css";

import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Eachseed | Plant the seeds for a better tomorrow",
  description: "Eachseed is an investment platform for eco friendly startups aligned with the UN sustainability goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
