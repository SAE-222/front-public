import { cn, formatPrice } from "@/lib/utils";
import { Product } from "@/types/product.type";

interface ProductPriceProps {
  product: Product;
}

const ProductPrice = ({ product }: ProductPriceProps) => {

  const calculatePriceAfterDiscount = (price: number, discount?: number) => {
    return discount ? price - price * discount : price;
  };

  return (
    <div className="space-y-1">
      <p className={cn("text-sm", product.discount && "text-red-600 font-bold")}>
          {formatPrice(calculatePriceAfterDiscount(product.price, product.discount))}
      </p>
      {product.discount && (
          <p className="text-xs">
            À l'origine :&nbsp;
            <span className="line-through">{formatPrice(product.price)}</span>
            <span className="ml-2 text-red-600">{`-${product.discount * 100}%`}</span>
          </p>
      )}
    </div>
  )
}

export default ProductPrice;