"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import withUrlParams from "./with-url-params";

interface ItemsSliderProps {
  items: any;
  getHref: (element: any) => string;
}

const ItemsSlider = ({ items, getHref }: ItemsSliderProps) => {
  return (
    <div className="w-full flex gap-2 overflow-x-auto scrollable md:hidden">
      {items.map((category: any) => (
        <Link
          key={category.id}
          href={getHref(category)}
          className={buttonVariants({ variant: "destructive" })}
        >
          {category.label}
        </Link>
      ))}
    </div>
  );
};

export default withUrlParams(ItemsSlider);
