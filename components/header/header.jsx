import Link from "next/link";

import { HeartIcon, ShoppingCartIcon, SunIcon, UserIcon } from "lucide-react";

import Logo from "@/components/logo/logo";
import { Button, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

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
      icon: SunIcon,
      href: "",
      hasBorder: true,
    },
    {
      icon: ShoppingCartIcon,
      href: "",
      hasBorder: false,
    },
    {
      icon: HeartIcon,
      href: "",
      hasBorder: false,
    },
    {
      icon: UserIcon,
      href: "",
      hasBorder: false,
    },
  ];

  return (
    <div className="flex items-center">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              buttonVariants({ variant: "link" }),
              link.hasBorder ? "border-r" : ""
            )}
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
