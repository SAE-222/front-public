import { clsx } from "clsx";
import { HeartIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const links = [
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
