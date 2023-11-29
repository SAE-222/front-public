import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProductSliderProps {
  imgs: string[];
  label: string;
  active: number;
  setActive: (key: number) => void;
}

const ProductSlider = ({
  imgs,
  label,
  active,
  setActive,
}: ProductSliderProps) => {
  const onClick = (key: number) => setActive(key);

  return (
    <div className="w-full max-w-full flex gap-2 overflow-x-auto scrollable">
      {imgs.map((img, key) => (
        <Image
          key={key}
          src={img}
          alt={`Produit ${label}`}
          width={100}
          height={150}
          onClick={() => onClick(key)}
          className={cn(
            "cursor-pointer w-[100px] h-[150px]",
            active === key && "border-2 border-black dark:border-white"
          )}
        />
      ))}
    </div>
  );
};

export default ProductSlider;
