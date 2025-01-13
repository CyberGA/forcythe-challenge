import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import Image from "next/image";
import Copyright from "./Copyright";
import { Icons } from "../Icons";

const SOCIALS = [
  {
    name: "Facebook",
    icon: <Icons.facebook className="fill-current w-5 h-auto" />,
    link: "#",
  },
  {
    name: "Instagram",
    icon: <Icons.instagram className="fill-current text-current w-5 h-auto" />,
    link: "#",
  },
  {
    name: "Twitter",
    icon: <Icons.twitter className="text-current w-5 h-auto" />,
    link: "#",
  },
  {
    name: "LinkedIn",
    icon: <Icons.linkedIn className="text-current w-5 h-auto" />,
    link: "#",
  },
  {
    name: "Youtube",
    icon: <Icons.youtube className="text-current w-5 h-auto" />,
    link: "#",
  },
  {
    name: "Signal",
    icon: <Icons.signal className="text-current w-5 h-auto" />,
    link: "#",
  },
];

const NAVS = [
  "About",
  "Services",
  "Portfolio",
  "Studio",
  "Foundation",

  "Careers",
  "Blog",
];

export default function Footer() {
  return (
    <footer>
      <div className="global-padding-inline py-10 bg-secondary-background text-center">
        <div className="lg:grid lg:grid-cols-3 my-10">
          <div className="max-w-lg mb-10 lg:mb-0">
            <div className="grid grid-cols-4 w-full">
              <input
                type="email"
                placeholder="Your Email Address"
                className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
              />
              <button className="py-3 h-full bg-white text-black hover:bg-cBlueDark hover:text-white rounded-e-full text-sm font-normal border border-l-0 border-white duration-300">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-3 mt-5 font-normal ">
              <RadioGroup>
                <div className="flex items-center space-x-2 text-white">
                  <RadioGroupItem
                    className="size-5 border-white"
                    value="option-one"
                    id="option-one"
                  />
                  <Label className="text-left font-normal" htmlFor="option-one">
                    I agree to receive other notifications from Forcythe
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
            <div className="lg:pl-14 md:col-span-2 md:pr-10">
              <Link href="/">
                <Image
                  src="/images/brand-logo.svg"
                  alt="Forcythe Brand Logo"
                  width={130}
                  height={9}
                  priority
                  className="mb-5 md:mb-8"
                />
              </Link>
              <p className="text-base text-cGreyDark text-left font-normal">
                We are the growth company for businesses looking to scale. We
                are dedicated to transforming businesses with bespoke digital
                solutions that drive growth.
              </p>
              <div className="mt-10 hidden md:flex items-center gap-2">
                {SOCIALS.map((social, index) => (
                  <Link
                    key={index}
                    href={social.link}
                    className="flex items-center justify-center text-cBlueLight p-1 rounded-full border border-cBlueLight size-9"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="lg:pl-10 text-white text-left">
              <h3 className="mb-8 text-2xl font-bold">Company</h3>
              <ul className="flex flex-col gap-2">
                {NAVS.map((nav, index) => (
                  <li
                    key={index}
                    className="text-base text-cBlueLight2 font-medium"
                  >
                    <Link href="/about">{nav}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
