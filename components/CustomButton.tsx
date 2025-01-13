"use client";

import { cn } from "@/lib/utils";
import { PlayIcon } from "lucide-react";

interface Props {
  showIcon?: boolean;
  action?: () => void;
  clx?: string;
  text?: string;
}

export default function CustomButton({
  showIcon,
  action,
  clx,
  text = "Book a call",
}: Props) {
  const handleClick = () => {
    if (action) {
      action();
    }
  };

  return (
    <div className={cn("group relative w-fit", clx)}>
      <button
        onClick={handleClick}
        className="relative z-[1] flex items-center gap-2 rounded-full font-semibold bg-white text-black hover:text-white hover:bg-cBlueDark duration-300 w-max px-5 py-3 focus-within:outline-none outline-none"
        type="button"
      >
        <span>{text}</span>
        {showIcon && <PlayIcon className="size-2.5 fill-current" />}
      </button>
      <div className="absolute z-0 top-1.5 right-1.5 border border-dashed border-white group-hover:border-cBlueDark rounded-full w-full h-full duration-300"></div>
    </div>
  );
}
