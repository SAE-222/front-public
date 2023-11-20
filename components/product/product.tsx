"use client";

import axiosInstance from "@/lib/axios";
import { Product } from "@/types/product.type";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
import ProductSlider from "./product-slider";

interface ProductImageProps {
  img: string;
  label: string;
}

const ProductImage = ({ img, label }: ProductImageProps) => {
  const [zoom, setZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div 
      className="relative w-full max-w-[480px] max-h-[650px] overflow-hidden cursor-move"
      onMouseEnter={() => setZoom(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setZoom(false)}
    >
      <Image 
        src={img}
        alt={`Produit ${label}`}
        width={500}
        height={680}
        priority
        className={`w-full h-auto object-cover overflow-hidden transition-transform duration-300 ease-in-out ${zoom ? 'scale-150' : ''}`}
        style={{
          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
        }}
      />
    </div>
  );
};


interface ProductProps {
  productId: number;
}

const Product = ({ productId }: ProductProps) => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axiosInstance.get(`/products/${productId}`);
        setProduct(data.product);
      } catch (error: any) {
        console.error(error);
        if (error.response.status === 404) {
          setError("Product not found");
        } else {
          setError("Error while fetching product")
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [])

  if (error)
    throw new Error(error);

  if (product === null || isLoading)
    return <Skeleton className="w-full h-[650px]" />

  return (
    <article className="space-y-4">
      <ProductImage 
        label={product.label}
        img={product.imgs[active]} 
      />
      <ProductSlider 
        imgs={product.imgs} 
        label={product.label} 
        active={active}
        setActive={setActive}
      />
    </article>
  )
}

export default Product;