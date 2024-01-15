import { Product } from "@/types/product.type";

type CartItem = {
  id: number;
  product: Product;
  quantity: number;
  size: string;
};

export type { CartItem };
