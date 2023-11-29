import { Product } from "@/types/product.type";
import { HeartIcon } from "lucide-react";
import Image from "next/image";
import ProductTag from "./product-tag";
import ProductPrice from "./product-price";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const firstImage = product.imgs[0];

  return (
    <article className="max-w-[280px]">
      <div className="relative h-[400px] [&>div>#details]:hover:flex">
        <Image
          src={firstImage}
          alt={`Image du produit ${product.label}`}
          width={280}
          height={400}
          priority
          className="w-[280px] h-[400px]"
        />
        <div className="absolute top-0 right-0 mt-2 p-2 bg-white hover:bg-white/70 group">
          <HeartIcon className="text-black group-hover:fill-red-600 group-hover:text-red-600" />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          {product.discount && (
            <ProductTag
              tag="Promo"
              className="bg-red-600 w-fit text-white font-medium"
            />
          )}
          <div
            id="details"
            className="p-2 hidden gap-4 flex-wrap justify-center items-center bg-white"
          >
            {product.sizes.map((size, key) => (
              <div key={key} className="text-sm text-black whitespace-nowrap  overflow-ellipsis">
                {size}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2 py-2">
        <p className="text-sm">{product.label}</p>
        <ProductPrice product={product} />
      </div>
    </article>
  );
};

export default ProductCard;
