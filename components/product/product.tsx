"use client";

import axiosInstance from "@/lib/axios";
import { Product } from "@/types/product.type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductProps {
  productId: number;
}

// TODO: Create this component
const Product = ({ productId }: ProductProps) => {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axiosInstance.get(`/products/${productId}`);
        setProduct(data.product);
      } catch (error: any) {
        router.push("/");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [])

  if (isLoading) 
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div>
      <h1>{product?.label}</h1>
    </div>
  )
}

export default Product;