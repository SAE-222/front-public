"use client";

import useArrayStorage from "@/hooks/use-array-storage";
import { CartItem } from "@/types/cart-item.type";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { HeartIcon, TrashIcon } from "lucide-react";
import ProductPrice from "@/components/product/product-price";
import { Separator } from "@/components/ui/separator";
import { cn, formatPrice } from "@/lib/utils";
import { Product } from "@/types/product.type";
import Link from "next/link";

interface CartItemProps {
  item: CartItem;
  replace: (item: CartItem) => void;
  remove: (item: CartItem) => void;
}

const CartItem = ({ item, replace, remove }: CartItemProps) => {
  const { toggle, contains } = useArrayStorage<Product>("favorites");

  const handleChangeQuantity = (event: any) => {
    const newCartItem = {
      ...item,
      quantity: Number(event.target.value),
    };
    replace(newCartItem);
  };

  return (
    <div key={item.id} className="max-w-[285px] flex flex-col gap-4">
      <Link
        href={`/product/${item.product.id}`}
        className="w-[285px] h-[385px] relative"
      >
        <Image
          src={item.product.imgs[0]}
          alt={`Image du produit ${item.product.label}`}
          fill
          sizes="285px"
          priority
        />
      </Link>

      <div className="space-y-3">
        <div className="text-primary text-sm space-y-2 leading-normal">
          <p>{item.product.label}</p>
          <p>{item.product.description}</p>
          <p>Taille : {item.size}</p>
        </div>
        <Input
          type="number"
          min={1}
          defaultValue={item.quantity}
          onChange={handleChangeQuantity}
        />
        <div className="flex flex-col">
          <Button
            variant="link"
            className="px-0 w-fit gap-3"
            onClick={() => remove(item)}
          >
            <TrashIcon size={22} />
            Supprimer
          </Button>
          <Button
            variant="link"
            className="px-0 w-fit gap-3"
            onClick={() => toggle(item.product)}
          >
            <HeartIcon
              size={22}
              className={cn(
                contains(item.product) && "fill-red-600 text-red-600",
              )}
            />
            {contains(item.product)
              ? "Retirer des favoris"
              : "Ajouter aux favoris"}
          </Button>
        </div>
        <div className="float-right">
          <ProductPrice product={item.product} />
        </div>
      </div>
    </div>
  );
};

export default function CartPage() {
  const { values, replace, remove } = useArrayStorage<CartItem>("cart-items");

  const totalOfProducts = `(${
    values.length > 1 ? values.length + " produits" : values.length + " produit"
  })`;

  const calculatePriceAfterDiscount = (price: number, discount?: number) => {
    return discount ? price - price * discount : price;
  };

  const calculateTotal = () => {
    return values.reduce((acc, item) => {
      return (
        acc +
        calculatePriceAfterDiscount(item.product.price, item.product.discount) *
          item.quantity
      );
    }, 0);
  };

  const calculateTotalWithTaxes = () => {
    return calculateTotal() * 1.2;
  };

  return (
    <div className="w-full space-y-8 mt-4 max-w-[690px] mx-auto p-8">
      <p className="text-lg font-medium text-center">
        Mon panier {totalOfProducts}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {values.map((item) => (
          <CartItem
            item={item}
            replace={replace}
            remove={remove}
            key={item.id}
          />
        ))}
      </div>
      <div className="space-y-4 mx-auto max-w-md w-full pt-14 pb-4">
        <p className="text-xl text-primary font-bold">Total</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-primary text-base">Sous-total</p>
            <p className="text-primary text-sm">
              {formatPrice(calculateTotal())}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-primary text-base">Livraison</p>
            <p className="text-primary text-sm">0,00€</p>
          </div>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <p className="text-primary text-base">Total (TVA incluse) :</p>
          <p className="text-primary text-sm">
            {formatPrice(calculateTotalWithTaxes())}
          </p>
        </div>
        <Link
          className={cn(buttonVariants({ variant: "default" }), "w-full")}
          href="/checkout"
        >
          COMMANDER
        </Link>
      </div>
    </div>
  );
}
