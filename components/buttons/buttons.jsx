import { getGenders } from "@/lib/categories";
import { Button } from "@/components/ui/button";

// Genders buttons is a list of buttons
const GenderButtons = () => {
  const currentGender = 1;

  const isActive = (genderId) => {
    return genderId === currentGender;
  };

  return (
    <>
      {getGenders.map((gender) => (
        <Button
          variant={isActive(gender.id) ? "default" : "ghost"}
          key={gender.id}
        >
          {gender.label}
        </Button>
      ))}
    </>
  );
};

export default GenderButtons;
