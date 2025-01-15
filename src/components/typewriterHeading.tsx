"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { bayon } from "../../lib/fonts";
import CustomLink from "./ui/link";

export function TypewriterCTA({heading_sm, textBlock_one, textBlock_two, textBlock_three, textBold}:{
    heading_sm: string,
    textBlock_one:string,
    textBlock_two:string,
    textBlock_three:string,
    textBold: string
}) {
  const words = [
    
    {
      text: textBlock_one,
    },
    {
      text: textBlock_two,
    },
    {
      text: textBlock_three,
    },
    {
      text: textBold,
      className: "text-[#088C29] dark:text-[#088C29]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]  ">
      <p className="text-xl ">
        { heading_sm}
      </p>
      <TypewriterEffectSmooth className={`${bayon.className}`} words={words} />
      <div className="flex flex-row gap-3 justify-center mt-5">
        <CustomLink href="/browse" type="secondary">Browse projects</CustomLink>
        <CustomLink href="/signup">Sign up</CustomLink>
        </div>
    </div>
  );
}
