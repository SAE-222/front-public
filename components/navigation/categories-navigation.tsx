"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Category } from "@/types/category.type";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { AppDataContext } from "../providers/app-data-provider";

interface CategoryNavigationContentProps {
  category: Category;
}

const CategoryNavigationContent = ({
  category,
}: CategoryNavigationContentProps) => {
  const { group } = useContext(AppDataContext);

  return (
    <div className="w-screen h-64 p-8">
      <div className="w-2/3 h-full flex flex-col gap-4">
        <h1 className="font-bold">Catégories</h1>
        <div className="grid grid-flow-col grid-cols-4 grid-rows-4">
          {category.subs.map((sub) => (
            <Link
              key={sub.id}
              href={`/${group.name}?category=${category.name}&sub=${sub.name}`}
              className={cn(buttonVariants({ variant: "link" }), "p-0 w-fit")}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const CategoriesNavigation = () => {
  const { categories } = useContext(AppDataContext);

  if (categories.length === 0) return null;

  return (
    <div className="hidden w-full border-b border-bg md:block">
      <NavigationMenu>
        <NavigationMenuList className="px-4">
          {categories.map((category) => (
            <NavigationMenuItem key={category.id}>
              <NavigationMenuTrigger>{category.label}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <CategoryNavigationContent category={category} />
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default CategoriesNavigation;
