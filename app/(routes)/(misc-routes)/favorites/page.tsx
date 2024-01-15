"use client";

import useArrayStorage from "@/hooks/use-array-storage";
import { Product } from "@/types/product.type";
import { ChevronRightIcon } from "lucide-react";
import ProductCard from "@/components/product/product-card";
import Link from "next/link";

export default function FavoritesPage() {
  const { values, contains, toggle } = useArrayStorage<Product>("favorites");

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-8 p-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-lg font-bold">Articles préférés</p>
        <p className="inline-flex items-center gap-1 text-base font-medium">
          {values.length} articles <ChevronRightIcon size={22} />
        </p>
      </div>
      <p className="text-justify text-base text-primary dark:text-white">
        Garder un œil sur tout ce que vous aimez et partagez ces articles pour
        obtenir un deuxième avis.
      </p>
      <div className="flex justify-center flex-wrap gap-4 md:justify-normal">
        {values.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductCard
              product={product}
              contains={contains}
              toggle={toggle}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
