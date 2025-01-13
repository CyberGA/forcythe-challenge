import Image from "next/image";
import Link from "next/link";
import CustomButton from "../CustomButton";
import MobileNav from "./MobileNav";

const NAVS: Array<{ title: string; link: string }> = [
  { title: "About", link: "#" },
  { title: "Services", link: "#" },
  { title: "Porfolio", link: "#" },
  { title: "Studio", link: "#" },
  { title: "Foundation", link: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-[99] py-[1.8rem] backdrop-blur-md global-padding-inline">
      <div className="flex items-center justify-between gap-10">
        <div className="flex items-center gap-20">
          <Link href="/">
            <Image
              src="/images/brand-logo.svg"
              alt="Forcythe Brand Logo"
              width={150}
              height={10}
              priority
              className="w-28 sm:w-32 md:w-auto"
            />
          </Link>

          <nav className="md:flex hidden items-center gap-4 text-base text-white">
            {NAVS.map((nav, index) => (
              <Link key={index} href={nav.link}>
                {nav.title}
              </Link>
            ))}
          </nav>
        </div>

        <CustomButton clx="md:flex hidden" />

        <MobileNav />
      </div>
    </header>
  );
}
