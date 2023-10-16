import { XIcon } from "lucide-react";
import { Button, ButtonIcon, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "@/components/ui/loader";
import { useGroups } from "@/hooks/groups";
import { useCategoriesByGroup } from "@/hooks/categories";
import { useCurrentGroup } from "@/store/current-group-store";

// Desktop menu is a simple list of links
export const DesktopMenu = () => {
  const { currentGroup } = useCurrentGroup();
  const { status, data } = useCategoriesByGroup(currentGroup);

  return (
    <div className="hidden md:w-5/6 md:flex md:items-center">
      {status === "loading" ? (
        <Loader className="ml-4" />
      ) : (
        data.map((category, key) => (
          <Link
            key={key}
            href={`/category/${currentGroup}?sub=${category.query}`}
            className={buttonVariants({ variant: "ghost" })}
          >
            {category.label}
          </Link>
        ))
      )}
    </div>
  );
};

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
