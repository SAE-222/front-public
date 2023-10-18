import { ArrowLeftIcon, XIcon } from "lucide-react";
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
const MobileCategories = ({ onSelect }) => {
  const { currentGroup } = useCurrentGroup();
  const { status, data } = useCategoriesByGroup(currentGroup?.name);

  return (
    <div className="flex flex-col items-center">
      {status === "loading" ? (
        <Loader />
      ) : (
        data.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            className="w-max h-max flex flex-col gap-3"
            onClick={() => onSelect(category)}
          >
            {category.label}
            <Image
              src={category.img}
              alt="Photo qui représente la catégorie"
              priority
              width={150}
              height={150}
              className="min-w-[150px] h-[150px] object-cover"
            />
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
    <div className="flex flex-wrap justify-center py-4">
      {status === "loading" ? (
        <Loader />
      ) : (
        data.map((group) => (
          <Link
            key={group.id}
            href={`/category/${group.name}`}
            className={buttonVariants({
              variant: currentGroup.name === group.name ? "default" : "ghost",
            })}
          >
            {group.label}
          </Link>
        ))
      )}
    </div>
  );
};

// Mobile menu header
const MobileMenuHeader = ({ onReturn, selectedCategory, close }) => {
  return (
    <div className="flex justify-between items-center border-b border-frame">
      <div className="inline-flex items-center gap-2">
        {selectedCategory && (
          <ButtonIcon
            variant="ghost"
            size="icon"
            iconRef={ArrowLeftIcon}
            onClick={onReturn}
          />
        )}
        <h1 className="text-highlight font-medium dark:text-white">
          {selectedCategory
            ? selectedCategory.label
            : "Parcourir par catégorie"}
        </h1>
      </div>
      <ButtonIcon variant="ghost" size="icon" iconRef={XIcon} onClick={close} />
    </div>
  );
};

const MobileSelectedCategoryMenu = ({ close, category }) => {
  const { currentGroup } = useCurrentGroup();

  return (
    <div className="flex flex-col p-6 gap-6">
      <h1 className="text-highlight font-medium dark:text-white dark:opacity-90">
        Catégories
      </h1>
      <div className="flex flex-col gap-6">
        {category.subs.map((sub) => (
          <Link
            key={sub.id}
            href={`/category/${currentGroup.name}?cat=${category.name}&sub=${sub.name}`}
            className="pb-2 border-b border-frame text-sm text-highlight hover:text-highlight/90
              dark:text-white dark:opacity-90 dark:hover:text-white/90"
            onClick={close}
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Mobile menu is a list of buttons
export const MobileMenu = ({ close }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const onSelect = (category) => setSelectedCategory(category);
  const backToCategories = () => setSelectedCategory(null);

  return (
    <div className="z-10 w-full h-full absolute top-0 bg-white p-4 dark:bg-black">
      <MobileMenuHeader
        onReturn={backToCategories}
        selectedCategory={selectedCategory}
        close={close}
      />
      {selectedCategory ? (
        <MobileSelectedCategoryMenu close={close} category={selectedCategory} />
      ) : (
        <>
          <MobileGroups />
          <MobileCategories onSelect={onSelect} />
        </>
      )}
    </div>
  );
};

const DesktopSubsToShow = ({ category }) => {
  const { currentGroup } = useCurrentGroup();

  const showOnlyNthItems = 15;
  const subsToShow = category.subs.slice(0, showOnlyNthItems);

  return (
    <div className="w-full flex flex-col flex-wrap gap-4 mt-4 overflow-hidden">
      {subsToShow.map((sub) => (
        <Link
          key={sub.id}
          href={`/category/${currentGroup.name}?cat=${category.name}&sub=${sub.name}`}
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
        <h3 className="text-highlight font-medium dark:text-white dark:opacity-90">
          Catégories
        </h3>
        <DesktopSubsToShow category={category} />
      </div>
      {category.img && (
        <Image
          src={category.img}
          alt="Photo qui représente la catégorie"
          priority
          width={200}
          height={200}
          className="w-[200px] h-[200px] mx-auto object-cover"
        />
      )}
    </div>
  );
};

// Desktop menu is a simple list of links
export const DesktopMenu = () => {
  const { currentGroup } = useCurrentGroup();
  const { status, data } = useCategoriesByGroup(currentGroup?.name);

  // We use a state to know which category is hovered
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="hidden md:w-5/6 md:flex md:items-center">
      {status === "loading" ? (
        <Loader className="ml-4" />
      ) : (
        <div className="z-10 [&>div]:hover:flex">
          {data.map((category) => (
            <Link
              key={category.id}
              href={`/category/${currentGroup.name}?cat=${category.name}`}
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
