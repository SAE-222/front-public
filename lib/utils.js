import { clsx } from "clsx";
import { HeartIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getLinks = [
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

export const getGenders = [
  { id: 1, label: "Femme", active: true },
  { id: 2, label: "Homme" },
  { id: 3, label: "Enfant" },
];

export const getCategories = [
  {
    id: 1,
    label: "Vêtements",
  },
  {
    id: 2,
    label: "Chaussures",
  },
  {
    id: 3,
    label: "Accessoires",
  },
  {
    id: 4,
    label: "Sacs",
  },
  {
    id: 5,
    label: "Bijoux",
  },
  {
    id: 6,
    label: "Montres",
  },
  {
    id: 7,
    label: "Beauté",
  },
  {
    id: 8,
    label: "Luxe",
  },
];
