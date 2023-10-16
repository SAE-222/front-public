"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { ButtonIcon } from "@/components/ui/button";
import { useDarkSideStore } from "@/store/dark-side-store";

// Switcher is a button that toggles the theme
const Switcher = ({ className }) => {
  // We get the theme and toggle function from the store
  const { theme, toggle } = useDarkSideStore();
  // We use the theme to render the right icon
  const Icon = theme === "dark" ? SunIcon : MoonIcon;

  return (
    <ButtonIcon
      iconRef={Icon}
      variant="ghost"
      className={className}
      onClick={toggle}
    />
  );
};

export default Switcher;
