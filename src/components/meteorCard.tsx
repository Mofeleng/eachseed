import React from "react";
import { Meteors } from "./ui/meteors";
import { bayon } from "../../lib/fonts";

export function MeteorCard({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) {
  return (
    <div className="">
      <div className="w-full relative max-w-xs min-h-[350px] border border-gray-500 rounded-md"> {/* Set min-h */}
        <div className="absolute inset-0 h-full w-full " />
        <div className="relative px-4 py-8 h-full overflow-hidden flex flex-col justify-between"> {/* Use justify-between */}
          

          <div className="flex-grow">
            <h1 className={`${bayon.className} font-bold text-xl mb-4`}>{heading}</h1>
            <p className="font-normal text-base mb-4">{paragraph}</p>
          </div>

          <div className="flex-shrink-0">
            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
