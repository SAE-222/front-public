import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";

const Loader = ({ className }) => {
  return (
    <LoaderIcon
      className={cn(
        "animate-spin text-highlight dark:text-white dark:opacity-90",
        className,
      )}
    />
  );
};

export { Loader };
