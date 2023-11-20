import { cn, formatPrice } from "@/lib/utils";
import { Product } from "@/types/product.type";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import ProductTag from "./product-tag";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

  const calculatePriceAfterDiscount = (price: number, discount?: number) => {
    return discount ? price - price * discount : price;
  };

  const firstImage = product.imgs[0];

  return (
    <article>
      <div className="relative w-[280px] h-[400px]">
        <Image
          src={firstImage}
          alt={`Image du produit ${product.label}`}
          width={280}
          height={400}
          priority
          className="w-[280px] h-[400px]"
        />
        <div className="absolute top-0 right-0 mt-2 p-2 bg-white">
          <HeartIcon />
        </div>
        {product.discount && (
          <ProductTag tag="Promo" className="bg-red-600 text-white font-medium" />
        )}
      </div>
      <div className="space-y-2 py-2">
        <p className="text-sm">{product.label}</p>
        <p className={cn("text-sm", product.discount && "text-red-600 font-bold")}>
          {formatPrice(calculatePriceAfterDiscount(product.price, product.discount))}
        </p>
        {product.discount && (
          <p className="text-xs">
            À l'origine :&nbsp;
            <span className="line-through">{formatPrice(product.price)}</span>
            <span className="text-red-600">{`-${product.discount * 100}%`}</span>
          </p>
        )}
      </div>
    </article>
  )
}

export default ProductCard;