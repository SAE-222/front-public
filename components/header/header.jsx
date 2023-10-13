import Link from "next/link";
import { HeartIcon, ShoppingCartIcon, UserIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import Logo from "@/components/logo/logo";
import Switcher from "@/components/dark-side/dark-side";
import GenderButtons from "@/components/buttons/buttons";

// Links is a list of links to the cart, favorites and account pages
const Links = () => {
  const links = [
    {
      icon: ShoppingCartIcon,
      href: "/cart",
    },
    {
      icon: HeartIcon,
      href: "/favorites",
    },
    {
      icon: UserIcon,
      href: "/account",
    },
  ];

  return (
    <div className="flex items-center">
      // The dark side switcher
      <Switcher />
      // The links
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={buttonVariants({ variant: "link" })}
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
    <header className="container flex justify-between p-2">
      // Gender buttons are only visible on desktop
      <div className="hidden md:flex md:items-center">
        <GenderButtons />
      </div>
      // The logo
      <Logo />
      // Links (cart, favorites, account)
      <Links />
    </header>
  );
};

export default Header;
