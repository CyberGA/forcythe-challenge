"use client";

import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";

type contentType = {
  tab: string;
  title: string;
  desc: string;
  banner: string;
};

const CONTENTS: Array<contentType> = [
  {
    tab: "Idea",
    title: "Your vision is unique.",
    desc: "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
    banner: "/images/camera-man.svg",
  },
  {
    tab: "Design",
    title: "Crafting the blueprint for success",
    desc: "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
    banner: "/images/plan-design.svg",
  },
  {
    tab: "Develop",
    title: "Turning blueprints into reality.",
    desc: "Turning blueprints into reality.",
    banner: "/images/plan-develop.svg",
  },
  {
    tab: "Launch",
    title: "Your launchpad to the market.",
    desc: "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
    banner: "/images/plan-launch.svg",
  },
];

export default function SpotLightSection() {
  const [active, setActive] = useState(0);

  const handleSwitchTab = (index: number) => {
    setActive(index);
  };
  return (
    <section>
      <div className="py-20 global-padding-inline text-white">
        <TextGenerateEffect
          className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem] font-normal text-left mb-12 xl:mb-0 max-w-[45rem]"
          textClassName="text-white text-normal"
          words="From Spark to Spotlight: we take you every step of the way to success."
          filter={false}
          indices={[1, 3]}
          indexClx="text-cBlueLight"
        />
        <div className="flex lg:items-start flex-col md:flex-row">
          <div className="basis-1/2 flex mb-8 md:mb-0">
            <div className="md:pr-10 w-full">
              <div className="border-2 border-cBlueLight2 my-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                {CONTENTS.map((content, index) => (
                  <div
                    key={index}
                    onClick={() => handleSwitchTab(index)}
                    className={cn(
                      "px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 bg-transparent text-white",
                      index === active
                        ? "bg-cBlueLight2 text-black"
                        : "bg-transparent"
                    )}
                  >
                    <span>{content.tab}</span>
                  </div>
                ))}
              </div>
              {active === 0 && (
                <SpotlightBody
                  title={CONTENTS[0].title}
                  desc={CONTENTS[0].desc}
                />
              )}
              {active === 1 && (
                <SpotlightBody
                  title={CONTENTS[1].title}
                  desc={CONTENTS[1].desc}
                />
              )}
              {active === 2 && (
                <SpotlightBody
                  title={CONTENTS[2].title}
                  desc={CONTENTS[2].desc}
                />
              )}
              {active === 3 && (
                <SpotlightBody
                  title={CONTENTS[3].title}
                  desc={CONTENTS[3].desc}
                />
              )}
              <CustomButton showIcon clx="w-fit" />
            </div>
          </div>
          <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
            <Image
              src={CONTENTS[active].banner}
              alt={`Banner-${CONTENTS[active].title}`}
              width={200}
              height={200}
              className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const SpotlightBody: React.FC<Omit<contentType, "banner" | "tab">> = ({
  title,
  desc,
}) => {
  return (
    <div className="">
      <TextGenerateEffect
        className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12"
        words={title}
        filter={false}
      />
      <TextGenerateEffect
        className="text-cGreyDark text-base md:text-lg mb-8 leading-7 font-normal"
        words={desc}
        filter={false}
      />
    </div>
  );
};
