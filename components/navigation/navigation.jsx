"use client";

import { useState } from "react";

import { MenuIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InputIcon } from "@/components/ui/input";
import { DesktopMenu, MobileMenu } from "@/components/navigation/menu";

// Navigation is a wrapper component for the menu and search bar
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen((state) => !state);
  };

  const close = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between border-y border-frame">
      // If the menu is open, we render the mobile menu
      {isMenuOpen && <MobileMenu close={close} />}
      <DesktopMenu />
      // The button is only visible on mobile
      <Button
        variant="link"
        className="border-r border-frame md:hidden"
        onClick={toggle}
      >
        <MenuIcon />
      </Button>
      // The search bar
      <div className="flex w-full md:w-auto md:mr-4">
        <InputIcon
          className="w-full border-none md:border-solid md:w-52"
          placeholder="Rechercher"
        >
          <SearchIcon className="mr-4 text-highlight dark:text-white" />
        </InputIcon>
      </div>
    </div>
  );
};

export default Navigation;
