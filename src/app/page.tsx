import Image from "next/image";
import { Bayon } from "@next/font/google";
import Link from "next/link";

const bayon = Bayon({ weight: "400", subsets: ["latin"]})

export default function Home() {
  return (
    <div className="container mx-auto sm:px-5">
      <section id="hero" className="py-16 text-center">
        <h1 className={`${bayon.className} text-8xl`}>Invest in sustainable change, one project at a time.</h1>
        <p>We empower people to invest in businesses that prioritise people, profit, and the planet.</p>
        <div className="flex flex-row gap-3 justify-center mt-20">
          <button className="px-4 py-4 rounded-md bg-[#088C29] text-white min-w-[170px]" >Browse projects</button>
          <button className="px-4 py-4 rounded-md bg-[#088C29] text-white min-w-[170px]" >Signup</button>
        </div>
      </section>
      <section id="howitworks" className="py-16 text-center">

      </section>
      <section id="whyus" className="py-16 text-center">

      </section>
      <section id="cta" className="py-16 text-center">

      </section>

    </div>
  );
}
