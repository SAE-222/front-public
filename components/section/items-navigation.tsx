"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import withUrlParams from "./with-url-params";
import { cn } from "@/lib/utils";

interface ItemsNavigationProps {
  items: any;
  getHref: (element: any) => string;
}

const ItemsNavigation = ({ items, getHref }: ItemsNavigationProps) => {
  return (
    <div className="hidden flex-col gap-4 md:flex">
      {items.map((category: any) => (
        <Link 
          key={category.id}
          href={getHref(category)}
          className={cn(
            buttonVariants({ variant: "link" }),
            "max-w-max p-0 h-fit"
          )}
        >
          <span className="truncate">{category.label}</span>
        </Link>
      ))}
    </div>
  )
}

export default withUrlParams(ItemsNavigation);