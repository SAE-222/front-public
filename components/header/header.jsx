import Link from "next/link";

import { HeartIcon, ShoppingCartIcon, UserIcon } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";

import Logo from "@/components/logo/logo";
import Switcher from "@/components/dark-side/dark-side";

const GenderButtons = () => {
  return (
    <div className="hidden md:flex md:items-center">
      <Button>Homme</Button>
      <Button variant="ghost">Femme</Button>
      <Button variant="ghost">Enfant</Button>
    </div>
  );
};

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
      <Switcher />
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={buttonVariants({ variant: "link" })}
          >
            <Icon width={20} height={20} />
          </Link>
        );
      })}
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between p-2">
      <GenderButtons />
      <Logo />
      <Links />
    </header>
  );
};

export default Header;
