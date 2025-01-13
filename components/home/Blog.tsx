import Link from "next/link";
import CustomButton from "../CustomButton";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";
import { Circle } from "lucide-react";

const CONTENT: Array<{
  img: string;
  title: string;
  caption: string;
  desc: string;
}> = [
  {
    img: "/images/will-ai-take-over.webp",
    title: "Blog",
    caption: "The Reformist",
    desc: "Will AI take over Art?",
  },
  {
    img: "/images/crypto-vs-token.webp",
    title: "Blog",
    caption: "The Reformist",
    desc: "Cryptocurrency vs Tokens",
  },
  {
    img: "/images/crypto-and-asset.webp",
    title: "Blog",
    caption: "The Reformist",
    desc: "Cryptocurrency and Crypto asset",
  },
];

export default function BlogSection() {
  return (
    <section>
      <div className="my-10 lg:mb-24 global-padding-inline text-white">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <TextGenerateEffect
            className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0 font-normal"
            textClassName="text-white text-normal"
            words="Read our articles, news and product blog"
            filter={false}
          />
          <CustomButton clx="w-fit" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {CONTENT.map((content, index) => (
            <Link key={index} href="#">
              <div className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-cBlueLight transition-all duration-500">
                <div className="h-60 sm:h-56 relative mb-6">
                  <div className="bg-cBlueLight z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem]">
                    <Image
                      src={content.img}
                      alt={content.caption}
                      fill
                      className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105 absolute inset-0 object-cover"
                    />
                  </div>
                </div>
                <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 duration-300">
                  <p className="text-lg font-semibold mb-1">{content.title}</p>
                  <div className="flex items-center text-base text-cGreyDark mb-6">
                    <span>{content.caption}</span>
                    <Circle className="size-2 fill-white" />
                    <span>May 29th, 2024</span>
                  </div>
                  <h6 className="text-xl md:text-2xl font-semibold line-clamp-2">
                    Will AI take over Art?
                  </h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
