"use client";

import { CartItem } from "@/types/cart-item.type";
import useArrayStorage from "@/hooks/use-array-storage";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "@/components/product/product-price";
import { useEffect } from "react";
import { PaypalButtons } from "@/components/paypal/paypal-buttons";
import { Circle } from "@/components/circle/circle";

const Circles = () => {
  return (
    <div className="mx-auto flex justify-center gap-8 md:gap-28 w-[300px] md:w-auto">
      <Circle text="Se connecter" lined />
      <Circle text="Validation" current lined grayLined />
      <Circle text="C'est fait !" next />
    </div>
  );
};

export default function CheckoutPage() {
  const { values, clear } = useArrayStorage<CartItem>("cart-items");
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated" || values.length <= 0) {
      router.push("/login");
    }
  }, []);

  if (status === "loading") {
    return null;
  }

  const fullName =
    (session?.user.firstName || "John") +
    " " +
    (session?.user.lastName || "Doe");

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

  const paypalCreateOrder = async () => {
    const response = await fetch("/api/paypal/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderPrice: calculateTotalWithTaxes() + "",
      }),
    });
    const { orderId } = await response.json();
    return orderId;
  };

  const calculateTotalWithTaxes = () => {
    return (calculateTotal() * 1.2).toFixed(2);
  };

  const paypalCaptureOrder = async (orderID: string) => {
    const response = await fetch("/api/paypal/capture-order", {
      method: "POST",
      body: JSON.stringify({
        orderId: orderID,
      }),
    });
    if (response.ok) {
      clear();
      router.push("/checkout/success");
    }
  };

  return (
    <div className="flex flex-col justify-center mx-auto max-w-2xl gap-8 mt-8 p-4">
      <Circles />
      <div className="space-y-2 w-full">
        <p className="text-base text-primary font-semibold">
          Vérifiez votre commande
        </p>
        <Separator />
      </div>
      <div className="flex flex-col gap-6">
        <div className="space-y-2">
          <p className="text-base text-primary font-semibold">
            Adresse de livraison
          </p>
          <Separator />
          <p className="text-base text-primary">{fullName}</p>
          <p className="text-base text-primary">15 rue du moulin</p>
          <p className="text-base text-primary">80000 Amiens</p>
          <p className="text-base text-primary">France</p>
        </div>
        <div className="space-y-2">
          <p className="text-base text-primary font-semibold">
            Adresse de facturation
          </p>
          <Separator />
          <p className="text-base text-primary">
            Identique à l'adresse de livraison
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-base text-primary font-semibold">Commande</p>
          <Separator />
          <div className="flex flex-wrap justify-center mx-auto gap-4">
            {values.map((item) => (
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
                <div className="text-primary text-sm space-y-2 leading-normal">
                  <p>{item.product.label}</p>
                  <p>{item.product.description}</p>
                  <p>Taille : {item.size}</p>
                  <p>Quantité : {item.quantity}</p>
                </div>
                <div className="float-right">
                  <ProductPrice product={item.product} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PaypalButtons
          paypalCreateOrder={paypalCreateOrder}
          paypalCaptureOrder={paypalCaptureOrder}
        />
      </div>
    </div>
  );
}
