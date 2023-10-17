import { XIcon } from "lucide-react";
import { Button, ButtonIcon, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "@/components/ui/loader";
import { useGroups } from "@/hooks/groups";
import { useCategoriesByGroup } from "@/hooks/categories";
import { useCurrentGroup } from "@/store/current-group-store";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Categories for mobile menu
const MobileCategories = () => {
  const { currentGroup } = useCurrentGroup();
  const { status, data } = useCategoriesByGroup(currentGroup);

  return (
    <div className="flex justify-center flex-wrap">
      {status === "loading" ? (
        <Loader />
      ) : (
        data.map((category, key) => (
          <Button
            key={key}
            variant="ghost"
            className="h-40 w-56 flex flex-col gap-2"
          >
            {category.label}
            <div className="relative w-full h-full">
              <Image
                fill
                src={category.img}
                sizes="auto"
                alt="Image qui représente la catégorie"
              />
            </div>
          </Button>
        ))
      )}
    </div>
  );
};

// Groups for mobile menu
const MobileGroups = () => {
  const { currentGroup } = useCurrentGroup();
  const { status, data } = useGroups();

  return (
    <div className="flex flex-wrap justify-center mt-2 p-4 border-t border-frame">
      {status === "loading" ? (
        <Loader />
      ) : (
        data.map((group) => (
          <Button
            variant={currentGroup === group.name ? "default" : "ghost"}
            key={group.id}
          >
            {group.label}
          </Button>
        ))
      )}
    </div>
  );
};

// Mobile menu header
const MobileMenuHeader = ({ close }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-highlight font-medium dark:text-white">
        Parcourir par catégorie
      </h1>
      <ButtonIcon variant="ghost" iconRef={XIcon} onClick={close} />
    </div>
  );
};

// Mobile menu is a list of buttons
export const MobileMenu = ({ close }) => {
  return (
    <div className="w-full absolute top-0 bg-white p-4 dark:bg-black">
      <MobileMenuHeader close={close} />
      <MobileGroups />
      <MobileCategories />
    </div>
  );
};

const DesktopSubsToShow = ({ category }) => {
  const { currentGroup } = useCurrentGroup();

  const showOnlyNthItems = 20;

  const subsToShow = category.subs.slice(0, showOnlyNthItems);

  return (
    <div className="w-full flex flex-col flex-wrap gap-4 mt-4 overflow-hidden">
      {subsToShow.map((sub, key) => (
        <Link
          key={key}
          href={`/category/${currentGroup}?cat=${category.query}&sub=${sub.query}`}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "p-0 w-fit h-fit",
          )}
        >
          {sub.label}
        </Link>
      ))}
    </div>
  );
};

// Desktop dropdown menu with subs and image of the category
const DesktopDropdownMenu = ({ category }) => {
  if (!category) {
    return null;
  }

  return (
    <div
      className="hidden absolute w-full h-64 items-center bg-white border-t border-t-frame border-b-2
        border-b-highlight dark:bg-black dark:border-b-white"
    >
      <div className="w-2/3 h-full flex flex-col p-4">
        <h3 className="text-highlight font-medium dark:text-white">
          Catégories
        </h3>
        <DesktopSubsToShow category={category} />
      </div>
      {category.img && (
        <Image
          src={category.img}
          alt="Photo qui représente la catégorie"
          priority
          width={350}
          height={150}
          className="w-[350px] h-[150px] self-center"
        />
      )}
    </div>
  );
};

// Desktop menu is a simple list of links
export const DesktopMenu = () => {
  const { currentGroup } = useCurrentGroup();
  const { status, data } = useCategoriesByGroup(currentGroup);

  // We use a state to know which category is hovered
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="hidden md:w-5/6 md:flex md:items-center">
      {status === "loading" ? (
        <Loader className="ml-4" />
      ) : (
        <div className="[&>div]:hover:flex">
          {data.map((category, key) => (
            <Link
              key={key}
              href={`/category/${currentGroup}?cat=${category.query}`}
              onMouseEnter={() => setHoveredCategory(category)}
              className={buttonVariants({ variant: "ghost" })}
            >
              {category.label}
            </Link>
          ))}
          {hoveredCategory && (
            <DesktopDropdownMenu
              currentGroup={currentGroup}
              category={hoveredCategory}
            />
          )}
        </div>
      )}
    </div>
  );
};
