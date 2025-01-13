import { Layers } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const CONTENTS: Array<{ title: string; desc: string }> = [
  {
    title: "Experience",
    desc: "Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
  },
  {
    title: "Quick Support",
    desc: "We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
  },
  {
    title: "Cost Savings",
    desc: "Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
  },
];

export default function ProductInnovationSection() {
  return (
    <section>
      <div className="bg-[linear-gradient(0deg,_rgb(12,_38,_69)_20%,_rgb(3,_5,_22)_70%)] py-14 global-padding-inline">
        <TextGenerateEffect
          className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-cBlueLight2 mx-auto text-center font-normal"
          words="Your best call for B2B/B2C product innovation"
          filter={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
          {CONTENTS.map((content, index) => (
            <HoverBorderGradient
              key={index}
              containerClassName="!bg-primary-background relative border-none transition duration-500 h-min w-fit !rounded-2xl w-full overflow-hidden"
              as="div"
              className="w-full bg-transparent p-0"
            >
              <div className="flex flex-col bg-primary-background p-8 sm:p-10">
                <div className="w-fit p-2 bg-cBlueLight bg-opacity-60 rounded-md mb-5">
                  <Layers className="text-white w-[30px] h-[30px]" />
                </div>
                <h4 className="text-2xl font-medium mb-5">{content.title}</h4>
                <TextGenerateEffect
                  className="text-cGreyDark text-[17.5px] font-normal"
                  words={content.desc}
                  filter={false}
                />
              </div>
            </HoverBorderGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
