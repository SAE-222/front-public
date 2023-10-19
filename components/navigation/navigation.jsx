"use client";

import { MenuIcon, SearchIcon } from "lucide-react";
import { ButtonIcon } from "@/components/ui/button";
import { InputIcon } from "@/components/ui/input";
import { DesktopMenu } from "@/components/navigation/menu";
import { useMobileMenu } from "@/store/mobile-menu";

const Navigation = () => {
  const { toggle } = useMobileMenu();

  return (
    <div className="w-full flex border-y border-frame">
      <ButtonIcon
        iconRef={MenuIcon}
        variant="ghost"
        size="icon"
        className="border-r md:hidden"
        onClick={toggle}
      />
      <DesktopMenu />
      <InputIcon
        iconRef={SearchIcon}
        className="w-full md:w-auto md:border-l"
        placeholder="Rechercher"
        hasBorder={false}
      />
    </div>
  );
};

export default Navigation;
