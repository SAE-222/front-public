"use client";

import axiosInstance from "@/lib/axios";
import { Product } from "@/types/product.type";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import ProductSlider from "./product-slider";
import ProductPrice from "./product-price";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import ProductImage from "./product-image";
import { Button } from "../ui/button";
import { HeartIcon } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";

interface ProductProps {
  productId: number;
}

const FormSchema = z.object({
  size: z.string({
    required_error: "Veuillez choisir une taille"
  })
});

interface ProductFormProps {
  product: Product;
}

const ProductForm = ({ product }: ProductFormProps) => {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = () => {
    console.log("submit")
  }

  return (
    <Form {...form}>
      <form id="cart" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
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
  )
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
    <article className="max-w-[480px] space-y-4">
      <ProductImage 
        img={product.imgs[active]} 
        product={product}
      />
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
        <Button form="cart" type="submit" variant="destructive" className="flex-grow">Ajouter au panier</Button>
        <Button variant="outline" size="icon">
          <HeartIcon />
        </Button>
      </div>

    </article>
  )
}

export default Product;