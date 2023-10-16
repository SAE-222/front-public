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
      priority
      alt="Logo de la plateforme Nocif"
      width={width}
      height={height}
      className={cn("dark:bg-highlight rounded-xl", className)}
    />
  );
};

export default Logo;
