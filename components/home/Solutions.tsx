"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";
import CountUp from "react-countup";

const CONTENTS = [
  { count: "50", label: "Clients" },
  { count: "120", label: "Projects" },
  { count: "10", label: "Team Leads" },
  { count: "10", label: "Glorious Years" },
];

export default function SolutionsSection() {
  return (
    <section>
      <div className="py-14 md:py-20 xl:py-28 bg-[linear-gradient(rgb(12,_38,_69)_20%,_rgb(3,_5,_22)60%)] text-white">
        <div className="max-w-[52rem] mx-auto bg-[url('/images/arc.svg')] lg:bg-[url('/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
          <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
            <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
              <TextGenerateEffect
                className="text-xl md:text-2xl lg:text-3xl font-medium"
                words="We build solutions that help businesses of all sizes to scale"
                filter={false}
                indices={[5, 10]}
                indexClx="text-cBlueLight"
              />
            </div>
            <div className="flex justify-evenly sm:justify-between items-center gap-3">
              {CONTENTS.map((content, index) => (
                <div key={index} className="space-y-3 w-fit text-center">
                    <CountUp
                      end={parseInt(content.count)}
                      duration={5}
                      suffix="+"
                      className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-cBlueLight font-medium"
                    />
                  <p className="text-[15px] sm:text-base md:text-lg max-w-full overflow-hidden text-ellipsis">
                    {content.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
