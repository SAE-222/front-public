import { XIcon } from "lucide-react";
import { Button, ButtonIcon, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getCategories, getGenders } from "@/lib/utils";

// Desktop menu is a simple list of links
export const DesktopMenu = () => {
  return (
    <div className="hidden w-5/6 md:flex">
      {getCategories.map((category) => (
        <Link
          key={category.id}
          href="#"
          className={buttonVariants({ variant: "ghost" })}
        >
          {category.label}
        </Link>
      ))}
    </div>
  );
};

// Mobile menu is a list of buttons
export const MobileMenu = ({ close }) => {
  return (
    <div className="w-full absolute top-0 bg-white p-4 dark:bg-black">
      <div className="flex justify-between items-center">
        <h1 className="text-highlight font-medium dark:text-white">
          Parcourir par catégorie
        </h1>
        <ButtonIcon variant="link" iconRef={XIcon} onClick={close} />
      </div>
      <div className="flex justify-center mt-2 p-4 border-t border-frame">
        {getGenders.map((gender) => (
          <Button variant={gender.active ? "default" : "ghost"} key={gender.id}>
            {gender.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
