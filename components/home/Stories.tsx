"use client";
import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StoryCardProps {
  title: string;
  desc: string;
  img: string;
  name: string;
  style: string;
}

const STARTUPS: Array<{ logo: string; name?: string }> = [
  { logo: "/images/starksLogo.svg", name: "Starks" },
  { logo: "/images/ExecutiveProsLogo.svg" },
  { logo: "/images/stacaiLogo.svg" },
  { logo: "/images/iwariaLogo.svg" },
  { logo: "/images/BeaupreneurLogo.svg" },
];

const TESTIMONIALS: Array<StoryCardProps> = [
  {
    title: "Starks Associate",
    desc: "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
    img: "/images/john.svg",
    name: "John, Management",
    style: "0px",
  },
  {
    title: "ExecutivePros",
    desc: "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
    img: "/images/executive-pro-ceo.svg",
    name: "Testimony, Co-founder",
    style: "20%",
  },
  {
    title: "Stac AI",
    desc: "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
    img: "/images/edwin.svg",
    name: "Edwin, Former CTO",
    style: "40%",
  },
  {
    title: "Iwaria",
    desc: "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
    img: "/images/iwaria-founder.svg",
    name: "Iwaria, Founder",
    style: "30%",
  },
  {
    title: "Beaupreneur",
    desc: "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
    img: "/images/christina.svg",
    name: "Christiana, Founder",
    style: "50%",
  },
];

export default function StoriesSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % STARTUPS.length);
    }, 15000);
    return () => clearInterval(interval);
  });

  const handleSwitch = (index: number) => {
    setActive(index);
  };

  return (
    <section>
      <div className="py-10 text-white global-padding-inline">
        <TextGenerateEffect
          className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center font-normal"
          textClassName="text-white text-normal"
          words="Discover the transformative stories of startups that scaled new heights with us"
          filter={false}
          indices={[2, 3]}
          indexClx="text-cBlueLight"
        />
        <div className="w-full text-white">
          <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="w-full border border-cBlueDarker rounded-full grid grid-cols-5 min-w-[750px]">
              {STARTUPS.map((startup, index) => (
                <div
                  key={index}
                  onClick={() => handleSwitch(index)}
                  className={cn(
                    "w-full p-[1.1rem] cursor-pointer transition-all duration-300",
                    active === index && "bg-cBlueDarker2",
                    index === 0 && "rounded-s-full",
                    index === STARTUPS.length - 1 && "rounded-e-full"
                  )}
                >
                  <div className="flex items-center justify-center w-fit h-full mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit">
                    <Image
                      src={startup.logo}
                      alt={`Brand-${startup.logo.split(".")[0]}`}
                      width={20}
                      height={20}
                      loading="lazy"
                      className={cn(
                        "w-full",
                        index === 3 && "w-20",
                        index === 4 && "w-36"
                      )}
                    />
                    {startup.name && <span>{startup.name}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {active === 0 && <StoryCard data={TESTIMONIALS[0]} />}
          {active === 1 && <StoryCard data={TESTIMONIALS[1]} />}
          {active === 2 && <StoryCard data={TESTIMONIALS[2]} />}
          {active === 3 && <StoryCard data={TESTIMONIALS[3]} />}
          {active === 4 && <StoryCard data={TESTIMONIALS[4]} />}
        </div>
      </div>
    </section>
  );
}

const StoryCard: React.FC<{ data: StoryCardProps }> = ({ data }) => {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowName(true);
    }, 5000);
    return () => clearTimeout(timeout);
  });

  return (
    <div
      className="flex flex-col sm:flex-row mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] p-5 sm:p-7 bg-cBlueDarker2 lg:relative"
      style={{ left: data.style }}
    >
      <div className="sm:basis-[58%] pr-3 text-white">
        <TextGenerateEffect
          className="text-base font-bold mb-4"
          words={data.title}
          filter={false}
        />
        <TextGenerateEffect
          className="text-base leading-7 mb-3"
          words={data.desc}
          filter={false}
          duration={0.8}
        />
        {showName && (
          <TextGenerateEffect
            className="text-[15px] font-semibold mb-4"
            words={data.name}
            filter={false}
          />
        )}
      </div>
      <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
        <div className="absolute top-0 left-0 z-0 w-full h-full rounded-xl">
          <Image
            src={data.img}
            alt={data.name}
            fill
            className="rounded-xl object-top h-full w-full absolute inset-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
