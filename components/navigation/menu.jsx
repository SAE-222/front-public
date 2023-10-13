import { XIcon } from "lucide-react";
import GenderButtons from "@/components/buttons/buttons";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/lib/categories";
import Link from "next/link";

// Desktop menu is a simple list of links
export const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center gap-4 p-4">
      {getCategories.map((category) => (
        <Link
          key={category.id}
          href="#"
          className="text-sm text-highlight dark:text-white"
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
    <div className="w-full absolute top-0 bg-white dark:bg-black p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-highlight font-medium dark:text-white">
          Parcourir par catégorie
        </h1>
        // The close button
        <Button variant="link" onClick={close}>
          <XIcon />
        </Button>
      </div>
      // Gender buttons are rendered here (man, woman, child)
      <div className="flex justify-center mt-2 p-4 border-t border-frame">
        <GenderButtons />
      </div>
    </div>
  );
};
