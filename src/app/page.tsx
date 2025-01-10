import Image from "next/image";
import CustomHeading from "@/components/heading";
import { howItWorksArray } from "@/constants";
import IconCard from "@/components/iconCard";

export default function Home() {

  return (
    <div className="container mx-auto sm:px-5">
      <section id="hero" className="py-16 text-center">

        <CustomHeading
          heading="Invest in sustainable change, one project at a time."
          paragraph="We empower people to invest in businesses that prioritise people, profit, and the planet."
        />

        <div className="flex flex-row gap-3 justify-center mt-20">
          <button className="px-4 py-4 rounded-md border border-slate-500 min-w-[170px]" >Browse projects</button>
          <button className="px-4 py-4 rounded-md bg-[#088C29] text-white min-w-[170px]" >Signup</button>
        </div>
        <div className="">
          <Image src="/hero_bg.png" alt="hero" width={2048}  height={2048} className="w-full mt-32 object-contain" />
        </div>
      </section>
      <section id="howitworks" className="py-16 text-center">
        
        <CustomHeading
          heading="How it works"
          paragraph=" A Simple Process for Startups to Secure Funding and Investors to Make an Impact"
        />

        <div className="mt-12 grid grid-cols-3 gap-10">
          { howItWorksArray.map((i) => (
            <IconCard icon={i.icon} title={i.title} description={i.description} key={i.title} />
          ))}
        </div>
      </section>
      <section id="whyus" className="py-16 text-center">
          <CustomHeading
            heading="Why choose us?"
            paragraph="What makes Eachseed different from the others?"
          />
      </section>
      <section id="cta" className="py-16 text-center">

      </section>

    </div>
  );
}
