import { useDarkSideStore } from "@/store/dark-side-store";
import Image from "next/image";

// Logo is a simple image with a background color that changes depending on the theme
const Logo = () => {
  const theme = useDarkSideStore((state) => state.theme);
  const src = theme === "dark" ? "/dark-logo.svg" : "/light-logo.svg";

  return (
    <div className="dark:bg-highlight rounded-xl">
      <Image
        src={src}
        priority
        alt="Logo de la plateforme Nocif"
        width={55}
        height={55}
        className="rounded-xl"
      />
    </div>
  );
};

export default Logo;
