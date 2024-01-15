"use client";

import Container from "@/components/container/container";
import Image from "next/image";
import { ArrowDownIcon, ArrowRightIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types/product.type";
import ProductCard from "@/components/product/product-card";
import useArrayStorage from "@/hooks/use-array-storage";
import axiosInstance from "@/lib/axios";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface DiscoverProductsProps {
  products: Product[];
}

const DiscoverProducts = ({ products }: DiscoverProductsProps) => {
  const { contains, toggle } = useArrayStorage<Product>("favorites");

  return (
    <div className="space-y-4">
      <p className="text-lg text-primary inline-flex items-center gap-2">
        Découvrez aussi <ArrowDownIcon />
      </p>
      <div className="w-full max-w-full flex gap-3 overflow-x-auto scrollable">
        {products.length === 0 ? (
          <Skeleton className="w-full h-[400px]" />
        ) : (
          products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard
                product={product}
                contains={contains}
                toggle={toggle}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

interface BannerProps {
  color: string;
  img: string;
  title: string;
  subtitle: string;
  description: string;
}

const Banner = ({ color, img, title, subtitle, description }: BannerProps) => {
  return (
    <div
      className="w-full flex flex-col pl-6 pt-6 md:flex-row md:h-[360px]"
      style={{ backgroundColor: `${color}` }}
    >
      <div className="flex flex-col justify-center gap-3 pr-8">
        <InfoIcon className="text-primary text-gray-800" />

        <div className="space-y-2">
          <h1 className="text-base font-bold md:text-xl text-gray-800">
            {title}
          </h1>
          <h2 className="text-base md:text-xl text-gray-800">{subtitle}</h2>
        </div>

        <p className="text-sm leading-normal text-gray-800 md:text-base">
          {description}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-1 font-semibold text-gray-800 text-sm md:text-base"
        >
          Voir plus <ArrowRightIcon />
        </Link>
      </div>
      <div className="ml-auto flex justify-end pt-6">
        <Image
          alt=""
          src={img}
          width={1200}
          height={800}
          className="object-cover w-full"
        />
      </div>
    </div>
  );
};

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axiosInstance.get(`/products`);

        const randomProducts = data
          .sort(() => Math.random() - Math.random())
          .slice(0, 6);

        setProducts(
          randomProducts.map((product: any) => {
            return {
              id: product.id_produit,
              label: product.nom,
              price: product.prix,
              description: product.description,
              categoryId: product.id_categories,
              imgs: product.images,
              sizes: product.sizes,
            };
          }),
        );
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <Container className="space-y-8">
      <Banner
        color="#EFEFF0"
        img="https://img01.ztat.net/banner/80c95290aa0e4d7594da4828ceaec323/056a4db0654844ca9ac104aa26d61b3f.jpg?imwidth=1200"
        title="Ces accessoires,"
        subtitle="Qui font toute la différence !"
        description="Une sélection d'accessoires audacieux pour des looks d'hiver avec un petit truc en plus."
      />
      <DiscoverProducts products={products} />
      <Banner
        color="#f2d63c"
        img="https://img01.ztat.net/banner/9418efc4c20a49b0a4694422c835537a/5b5b2abd5ebc41adb66914a5f8206474.jpg?imwidth=1200"
        title="Cosy après le sport,"
        subtitle="Fêtez les petites victoires !"
        description="Maintenant que vous avez fait le plus dur, détendez-vous dans ces sweats et survêtements cosy."
      />
    </Container>
  );
};

export default HomePage;
