"use client";

import { HeartIcon } from "lucide-react";
import { Product } from "@/types/product.type";
import useArrayStorage from "@/hooks/use-array-storage";

export const FavoritesCount = () => {
  const { values } = useArrayStorage<Product>("favorites");

  if (values.length === 0) return <HeartIcon size={22} />;

  return (
    <div className="relative">
      <HeartIcon size={22} className="text-primary" />
      <div className="text-xs flex justify-center items-center absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-orange-500 w-4 h-4 rounded-full text-primary">
        {values.length > 9 ? "9+" : values.length}
      </div>
    </div>
  );
};
