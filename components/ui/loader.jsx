import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";

const Loader = ({ className }) => {
  return (
    <LoaderIcon
      className={cn("animate-spin text-highlight dark:text-white", className)}
    />
  );
};

export { Loader };
