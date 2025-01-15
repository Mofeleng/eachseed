import Image from "next/image";
import CustomHeading from "@/components/heading";
import { forCampaignBackers, forCampaignCreators, howItWorksArray } from "@/constants";
import IconCard from "@/components/iconCard";
import { MeteorCard } from "@/components/meteorCard";
import { TypewriterCTA } from "@/components/typewriterHeading";
import { GlobeSection } from "@/components/globeSection";
import CustomLink from "@/components/ui/link";

export default function Home() {

  return (
    <div className="container mx-auto sm:px-5">
      <section id="hero" className="py-16 text-center">

        <CustomHeading
          heading="Invest in sustainable change, one project at a time."
          paragraph="We empower people to invest in businesses that prioritise people, profit, and the planet."
        />

        <div className="flex flex-row gap-3 justify-center mt-20">
          <CustomLink href="/browse" type="secondary">Browse projects</CustomLink>
          <CustomLink href="/signup">Sign up</CustomLink>
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
      <section id="customers" className="py-16 text-center">
          <CustomHeading
            heading="Launch sustainable campaigns"
            paragraph="Turn your sustainability vision into reality. Join a platform designed specifically for impact-driven startups, where passionate supporters are ready to back meaningful projects."
          />

          <div className="grid grid-cols-4 mt-16 gap-10">
            { forCampaignCreators.map((k) => (
              <MeteorCard key={k.heading} heading={k.heading} paragraph={k.paragraph} />
            ))}
          </div>

          <TypewriterCTA 
            heading_sm="Ready to Launch Your Project?"
            textBlock_one="Join EachSeed"
            textBlock_two="today and turn your"
            textBlock_three="sustainable vision into"
            textBold="Reality."
          />
      </section>

      <section id="backers" className="py-16 text-center">
          <CustomHeading
            heading="Back projects that matter"
            paragraph="Join a community of changemakers funding the future of sustainability. Every project you support brings us closer to a more sustainable world."
          />

          <div className="grid grid-cols-4 mt-16 gap-10">
            { forCampaignBackers.map((k) => (
              <MeteorCard key={k.heading} heading={k.heading} paragraph={k.paragraph} />
            ))}
          </div>

          <TypewriterCTA 
            heading_sm="Ready to Make an Impact?"
            textBlock_one="Discover innovative sustainable"
            textBlock_two="projects waiting for"
            textBlock_three="supporters like"
            textBold="you."
          />
      </section>

      <section id="cta" className="py-10 text-center">
            
            <GlobeSection />
      </section>

        
    </div>
    
  );
}
