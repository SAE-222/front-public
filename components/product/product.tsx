"use client";

import axiosInstance from "@/lib/axios";
import { Product } from "@/types/product.type";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import ProductSlider from "./product-slider";
import ProductPrice from "./product-price";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ProductImage from "./product-image";
import { Button } from "../ui/button";
import { HeartIcon } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import useArrayStorage from "@/hooks/use-array-storage";
import { cn } from "@/lib/utils";
import { CartItem } from "@/types/cart-item.type";
import { useRouter } from "next/navigation";

interface ProductDetailProps {
  description: string;
}

const ProductDetail = ({ description }: ProductDetailProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="description">
        <AccordionTrigger className="font-bold">
          Détails du produit
        </AccordionTrigger>
        <AccordionContent>{description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const FormSchema = z.object({
  size: z.string({
    required_error: "Veuillez choisir une taille",
  }),
});

interface ProductFormProps {
  product: Product;
}

const ProductForm = ({ product }: ProductFormProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { replace } = useArrayStorage<CartItem>("cart-items");
  const router = useRouter();

  const onSubmit = ({ size }: z.infer<typeof FormSchema>) => {
    const item: CartItem = {
      id: product.id,
      product,
      size,
      quantity: 1,
    };
    replace(item);
    router.push("/cart");
  };

  return (
    <Form {...form}>
      <form id="cart" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Votre taille" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {product.sizes.map((size, key) => (
                    <SelectItem key={key} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
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

  const { contains, toggle } = useArrayStorage<Product>("favorites");

  const handleClickFavorite = (product: Product, event: any) => {
    event.preventDefault();
    toggle(product);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axiosInstance.get(`/products/${productId}`);
        setProduct({
          id: data.id_produit,
          label: data.nom,
          price: data.prix,
          description: data.description,
          categoryId: data.id_categories,
          imgs: data.images,
          sizes: data.sizes,
        });
      } catch (error: any) {
        console.error(error);
        if (error.response.status === 404) {
          setError("Le produit n'existe pas");
        } else {
          setError("Erreur lors de la récupération du produit");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (error) throw new Error(error);

  if (product === null || isLoading)
    return <Skeleton className="w-full h-[650px]" />;

  return (
    <article className="w-[480px] space-y-4">
      <ProductImage img={product.imgs[active]} product={product} />
      <ProductSlider
        imgs={product.imgs}
        label={product.label}
        active={active}
        setActive={setActive}
      />
      <div className="space-y-2">
        <h1 className="text-lg text-primary font-bold">{product.label}</h1>
        <ProductPrice product={product} />
      </div>
      <div className="w-full">
        <ProductForm product={product} />
      </div>

      <div className="flex gap-2">
        <Button
          form="cart"
          type="submit"
          variant="destructive"
          className="flex-grow"
        >
          Ajouter au panier
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="group"
          onClick={(event) => handleClickFavorite(product, event)}
        >
          <HeartIcon
            size={22}
            className={cn(
              "text-black group-hover:fill-red-600 group-hover:text-red-600",
              contains(product) && "fill-red-600 text-red-600",
            )}
          />
        </Button>
      </div>

      <ProductDetail description={product.description} />
    </article>
  );
};

export default Product;
