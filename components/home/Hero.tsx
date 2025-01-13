"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import CustomButton from "../CustomButton";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const BANNERS = [
  "/images/exec-pro.svg",
  "/images/phone.svg",
  "/images/stac.svg",
  "/images/activity.svg",
  "/images/africaFund.svg",
  "/images/starks.svg",
];

const words = [
  {
    text: "We",
    className: "text-white",
  },
  {
    text: "build",
    className: "text-white",
  },
  {
    text: "products",
    className: "text-cBlueLight",
  },
  {
    text: "that",
    className: "text-white",
  },
  {
    text: "shape",
    className: "text-white",
  },
  {
    text: "a",
    className: "text-white",
  },
  {
    text: "better",
    className: "text-white",
  },
  {
    text: "future",
    className: "text-white",
  },
];

const HERO_DESC =
  "We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.";

export default function HeroSection() {
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDesc(true);
    }, 3000);
  }, []);

  return (
    <section>
      <div className="mt-0.5 md:min-h-screen bg-[url('/images/header-background.svg')] bg-no-repeat bg-top">
        <div className="mb-10 global-padding-inline">
          <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 rounded-[2rem] sm:rounded-[3rem]">
            <div className="max-w-[57rem]">
              <div className="min-h-[100px] mb-7">
                <TypewriterEffect
                  className="text-left !text-[3.5rem] sm:!text-[4rem] lg:!text-[5rem] font-normal text-white !leading-[1] duration-300"
                  cursorClassName="text-transparent bg-transparent"
                  words={words}
                />
              </div>
              <div className="mb-8 max-w-3xl">
                {showDesc && (
                  <TextGenerateEffect
                    textClassName="md:text-lg mb-8 leading-7 text-cGreyDark text-base"
                    words={HERO_DESC}
                    filter={false}
                  />
                )}
              </div>
              <div className="mb-5 w-fit">
                <CustomButton showIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 text-white">
          {showDesc && (
            <TextGenerateEffect
              className="text-[2rem] font-normal leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] max-w-[90%] mx-auto text-center"
              textClassName="text-white text-normal"
              words="Success in Motion – Our clients’ journey"
              filter={false}
              indices={[2]}
              indexClx="text-cBlueLight"
            />
          )}
          <div className="flex flex-col gap-5 bg-[linear-gradient(0deg,_rgba(3,_5,_22,_0)_20%,_rgb(3,_5,_22)_80%)]">
            <Marquee>
              {BANNERS.map((banner, index) => (
                <Image
                  key={index}
                  src={banner}
                  alt={banner.split(".")[0]}
                  width={100}
                  height={100}
                  className="overflow-hidden w-full h-full"
                />
              ))}
            </Marquee>
            <Marquee direction="right">
              {BANNERS.map((banner, index) => (
                <Image
                  key={index}
                  src={banner}
                  alt={banner.split(".")[0]}
                  width={100}
                  height={100}
                  className="overflow-hidden w-full h-full"
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
