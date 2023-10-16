"use client";

import { useState } from "react";

import { MenuIcon, SearchIcon } from "lucide-react";
import { ButtonIcon } from "@/components/ui/button";
import { InputIcon } from "@/components/ui/input";
import { DesktopMenu, MobileMenu } from "@/components/navigation/menu";

export const MobileMenuButton = ({ onToggle }) => {
  return (
    <ButtonIcon
      iconRef={MenuIcon}
      variant="ghost"
      size="icon"
      className="border-r md:hidden"
      onClick={onToggle}
    />
  );
};

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="w-full flex border-y border-frame">
      {isMobileMenuOpen && <MobileMenu close={closeMobileMenu} />}
      <MobileMenuButton onToggle={toggleMobileMenu} />
      <DesktopMenu />
      <InputIcon
        iconRef={SearchIcon}
        className="w-full md:grow md:w-auto md:border-l"
        placeholder="Rechercher"
        hasBorder={false}
      />
    </div>
  );
};

export default Navigation;
