import { Product } from "@/types/product.type";
import Image from "next/image";
import { useState } from "react";
import ProductTag from "./product-tag";

interface ProductImageProps {
  img: string;
  product: Product;
}

const ProductImage = ({ img, product }: ProductImageProps) => {
  const [zoom, setZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="relative w-full max-h-[650px] overflow-hidden">
      <Image
        src={img}
        alt={`Produit ${product.label}`}
        width={500}
        height={680}
        priority
        className={`
          w-full 
          h-auto
          object-cover 
          cursor-move 
          overflow-hidden 
          transition-transform 
          duration-300 
          ease-in-out 
          ${zoom ? "scale-150" : ""}
        `}
        style={{
          transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
        }}
        onMouseEnter={() => setZoom(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setZoom(false)}
      />
      {product.discount && (
        <ProductTag
          tag="Promo"
          className="absolute bg-red-600 bottom-0 left-0 text-white font-medium"
        />
      )}
    </div>
  );
};

export default ProductImage;
