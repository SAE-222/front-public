"use client";

import { cn } from "@/lib/utils";
import { useDarkSideStore } from "@/store/dark-side-store";
import Image from "next/image";

// Logo is a simple image with a background color that changes depending on the theme
const Logo = ({ className, width = 50, height = 50 }) => {
  const theme = useDarkSideStore((state) => state.theme);
  const src = theme === "dark" ? "/dark-logo.svg" : "/light-logo.svg";

  return (
    <Image
      src={src}
      alt="Logo du site e-commerce Nocif"
      priority
      width={width}
      height={height}
      className={cn("rounded-xl dark:bg-highlight", className)}
    />
  );
};

export default Logo;
