"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import Logo from "@/components/logo/logo";
import Switcher from "@/components/dark-side/dark-side";
import { Loader } from "@/components/ui/loader";

import { links } from "@/lib/utils";
import { useGroups } from "@/hooks/groups";
import { useCurrentGroup } from "@/store/current-group-store";

// Left of the header desktop
const HeaderLeftDesktop = () => {
  const { currentGroup } = useCurrentGroup();
  const { status, data } = useGroups();

  return (
    <div className="hidden md:flex md:items-center">
      {status === "loading" ? (
        <Loader />
      ) : (
        data.map((group) => (
          <Link
            className={buttonVariants({
              variant: currentGroup === group.name ? "default" : "ghost",
            })}
            href={`/category/${group.name}`}
            key={group.id}
          >
            {group.label}
          </Link>
        ))
      )}
    </div>
  );
};

// Header right is a list of actions
const HeaderRight = () => {
  return (
    <div className="flex items-center">
      <Switcher className="border-r border-frame" />
      {links.map((link) => (
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

// Header is the main header of the app
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 max-[250px]:justify-center">
      <HeaderLeftDesktop />
      <Logo className="max-[250px]:hidden" />
      <HeaderRight />
    </header>
  );
};

export default Header;
