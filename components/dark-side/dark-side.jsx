import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDarkSideStore } from "@/store/dark-side-store";

const Switcher = () => {
  const { theme, toggle } = useDarkSideStore();
  const Icon = theme === "dark" ? SunIcon : MoonIcon;

  return (
    <Button
      className="border-r text-hightlight text-highlight dark:text-white"
      variant="link"
      onClick={toggle}
    >
      <Icon width={20} height={20} />
    </Button>
  );
};

export default Switcher;
