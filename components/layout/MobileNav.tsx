"use client";
import { useEffect, useRef, useState } from "react";
import { Icons } from "../Icons";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const NAVS: Array<{ title: string; link: string }> = [
  { title: "About", link: "#" },
  { title: "Services", link: "#" },
  { title: "Porfolio", link: "#" },
  { title: "Studio", link: "#" },
  { title: "Foundation", link: "#" },
  { title: "Careers", link: "#" },
  { title: "Blog", link: "#" },
];

export default function MobileNav() {
  const [openNav, setOpenNav] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
     const menuIconRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpenNav(!openNav);
  };

   const handleClickOutside = (event: MouseEvent) => {
     if (
       navRef.current &&
       !navRef.current.contains(event.target as Node) &&
       menuIconRef.current &&
       !menuIconRef.current.contains(event.target as Node)
     ) {
       setOpenNav(false);
     }
   };

  useEffect(() => {
    if (openNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openNav]);

  return (
    <>
      <div
        ref={menuIconRef}
        onClick={handleClick}
        className="md:hidden bg-white bg-opacity-10 rounded-[0.375rem] cursor-pointer p-3"
      >
        <Icons.menu className="text-white size-[18px]" />
      </div>

      {openNav && (
        <HoverBorderGradient
          containerClassName="md:hidden flex flex-col border-none h-min w-60 justify-center p-px bg-primary-background !rounded-[2rem] bg-back fixed z-[9999] top-28 right-5 transition duration-500 overflow-hidden"
          as="div"
          className="w-full bg-transparent p-0 rounnoneded-none"
        >
          <div ref={navRef} className="">
            <div className="w-full px-5 py-8 bg-[linear-gradient(0deg,_rgba(7,_22,_38,_0)_32%,_rgb(7,_22,_38)_85%)]">
              <ul>
                {NAVS.map((nav, index) => (
                  <li key={index} className="w-full py-2.5">
                    <Link
                      href={nav.link}
                      className="text-white text-base py-3 w-full"
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </HoverBorderGradient>
      )}
    </>
  );
}
