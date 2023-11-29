"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { Product } from "@/types/product.type";
import useCategory from "@/hooks/use-category";
import ProductCard from "./product-card";
import { AppDataContext } from "../providers/app-data-provider";
import { Skeleton } from "../ui/skeleton";
import { ShirtIcon } from "lucide-react";
import axiosInstance from "@/lib/axios";
import Link from "next/link";

interface ProductsProps {
  isLoading: boolean;
  products: Product[];
}

const Products = ({ isLoading, products }: ProductsProps) => {
  if (isLoading) return <Skeleton className="w-full h-[400px]" />;

  if (products.length === 0)
    return (
      <div className="h-[400px] flex flex-col justify-center items-center gap-2">
        <ShirtIcon />
        <div className="text-center">
          <p className="font-semibold">
            Aucun article disponible pour le moment
          </p>
          <p className="text-xs">
            Nous vous invitons à revenir ultérieurement pour découvrir nos
            nouveautés
          </p>
        </div>
      </div>
    );

  return (
    <div className="w-full grid grid-cols-auto-fit justify-center gap-4">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  );
};

// HOC that provides the products prop to the component
const withProducts = (Component: React.ComponentType<ProductsProps>) => {
  return () => {
    const { group } = useContext(AppDataContext);
    const category = useCategory(true);

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const buildUrl = useCallback(() => {
      return `products/categories/${!category ? group.id : category.id}`;
    }, [category]);

    useEffect(() => {
      const controller = new AbortController();
      const fetchProducts = async () => {
        setIsLoading(true);
        try {
          const { data } = await axiosInstance.get(buildUrl(), {
            signal: controller.signal,
          });
          setProducts(
            data.map((product: any) => {
              return {
                id: product.id_produit,
                label: product.nom,
                price: product.prix,
                description: product.description,
                category: product.id_categories,
                imgs: product.images,
                sizes: ["XS", "M", "L", "XL"],
              };
            })
          );
          setIsLoading(false);
        } catch (error: any) {
          if (error.message === "canceled") {
            console.error("Request canceled");
          } else {
            console.error("Error while fetching products", error);
            setIsLoading(false);
          }
        }
      };

      fetchProducts();

      return () => {
        controller.abort();
      };
    }, [buildUrl]);

    return <Component isLoading={isLoading} products={products} />;
  };
};

export default withProducts(Products);
