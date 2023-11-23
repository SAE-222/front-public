import { getGroups } from "@/services/groups.service";
import Link from "next/link";
import Groups from "./groups";
import AccountDropdownMenu from "./account-dropdown-menu";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";

const HeaderLeft = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href="/" className="text-lg text-primary font-bold">
        NOCIF.
      </Link>
    </div>
  );
};

const HeaderRight = () => {
  return (
    <div className="inline-flex gap-4">
      <AccountDropdownMenu />
      <Link
        href="/favorites"
      >
        <HeartIcon />
      </Link>
      <Link
        href="/cart"
      >
        <ShoppingCartIcon />
      </Link>
    </div>
  )
}

const Header = async () => {

  const groups = await getGroups();

  return (
    <header className="w-full h-16 border-b border-slate-200">
      <div className="w-full h-full flex justify-between items-center px-8">
        <HeaderLeft />
        <Groups groups={groups} />
        <HeaderRight />
      </div>
    </header>
  );
}

export default Header;