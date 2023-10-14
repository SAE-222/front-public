import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import Logo from "@/components/logo/logo";
import Switcher from "@/components/dark-side/dark-side";

import { getGenders, getLinks } from "@/lib/utils";

// Left of the header desktop
const HeaderLeftDesktop = () => {
  return (
    <div className="hidden md:flex md:items-center">
      {getGenders.map((gender) => (
        <Button variant={gender.active ? "default" : "ghost"} key={gender.id}>
          {gender.label}
        </Button>
      ))}
    </div>
  );
};

// Header right is a list of actions
const HeaderRight = () => {
  return (
    <div className="flex items-center">
      <Switcher />
      {getLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <link.icon />
        </Link>
      ))}
    </div>
  );
};

// Header is the main component with gender buttons, logo and links
const Header = () => {
  return (
    <header className="flex max-[250px]:justify-center items-center justify-between p-4">
      <HeaderLeftDesktop />
      <Logo className="max-[250px]:hidden" />
      <HeaderRight />
    </header>
  );
};

export default Header;
