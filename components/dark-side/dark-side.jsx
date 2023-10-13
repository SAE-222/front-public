import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDarkSideStore } from "@/store/dark-side-store";

// Switcher is a button that toggles the theme
const Switcher = () => {
  // We get the theme and toggle function from the store
  const { theme, toggle } = useDarkSideStore();
  // We use the theme to render the right icon
  const Icon = theme === "dark" ? SunIcon : MoonIcon;

  return (
    <Button className="border-r border-frame" variant="link" onClick={toggle}>
      <Icon />
    </Button>
  );
};

export default Switcher;
