"use client";

import { useCurrentGroup } from "@/store/current-group-store";
import { useCategoriesByGroup } from "@/hooks/categories";
import { Loader } from "@/components/ui/loader";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useProductsByGroup } from "@/hooks/products";
import { HeartIcon, InfoIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const CategoryButton = ({ href, category }) => {
  return (
    <Link href={href} className={buttonVariants({ variant: "destructive" })}>
      {category.label}
    </Link>
  );
};

const CategoryHeader = ({ currentGroup, categories }) => {
  return (
    <div className="px-4 flex gap-2 scrollable overflow-x-scroll whitespace-nowrap md:hidden">
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          href={`/category/${currentGroup.name}?cat=${category.name}`}
          category={category}
        />
      ))}
    </div>
  );
};

const ProductsAmount = ({ amount }) => {
  return (
    <p className="inline-flex gap-2 items-center text-sm text-highlight dark:text-white dark:opacity-90">
      {amount} {amount > 1 ? "articles" : "article"}
      <InfoIcon className="text-highlight dark:text-white dark:opacity-90" />
    </p>
  );
};

const ProductTag = ({ className, tag }) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 mb-2 py-1 px-2 text-xs bg-white",
        className,
      )}
    >
      {tag}
    </div>
  );
};

const CategoryProduct = ({ product }) => {
  const firstImg = product.imgs[0];
  const percentageDiscount = `-${product.discount * 100}%`;
  const priceAfterDiscount = product.discount
    ? product.price - product.price * product.discount
    : product.price;

  const formatPrice = (price) => {
    return parseInt(price).toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
    });
  };

  return (
    <article className="flex flex-col min-w-[150px] max-w-[300px]  cursor-pointer md:w-1/3">
      <div className="relative">
        <img
          src={firstImg}
          alt={`Image du produit ${product.label}`}
          className="w-auto h-auto object-cover"
        />
        <div className="absolute top-0 right-0 mt-2 bg-white p-2">
          <HeartIcon className="text-highlight" />
        </div>
        {product.discount && (
          <ProductTag className="bg-red text-white font-medium" tag="Promo" />
        )}
      </div>

      <div className="flex flex-col gap-1 py-2">
        <p className="text-highlight text-sm dark:text-white dark:opacity-90">
          {product.label}
        </p>
        <p
          className={cn(
            "text-highlight text-sm dark:text-white dark:opacity-90",
            product.discount ? "text-red font-bold" : "",
          )}
        >
          {formatPrice(priceAfterDiscount)}
        </p>
        {product.discount && (
          <p className="text-highlight text-xs dark:text-white dark:opacity-90">
            À l'origine :&nbsp;
            <span className="line-through">{formatPrice(product.price)}</span>
            <span className="text-red">{percentageDiscount}</span>
          </p>
        )}
      </div>
    </article>
  );
};

const CategoryProducts = ({ currentGroup }) => {
  const { status, data, isError } = useProductsByGroup(currentGroup?.name);

  if (isError) {
    return <div>Une erreur est survenue.</div>;
  }

  return (
    <div className="border-t border-frame">
      {status === "loading" ? (
        <Loader className="m-4" />
      ) : (
        <div className="flex justify-center flex-wrap gap-4 p-4 md:justify-start">
          {data.map((product) => (
            <CategoryProduct key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

const CategoryLayout = ({ children }) => {
  const { currentGroup } = useCurrentGroup();
  const { status, data } = useCategoriesByGroup(currentGroup?.name);

  const groupLabel = currentGroup?.label.toLowerCase();

  return (
    <div className="mt-4">
      {status === "loading" ? (
        <Loader className="m-4" />
      ) : (
        <>
          <h1 className="px-4 pb-4 text-highlight font-bold text-xl md:text-2xl dark:text-white dark:opacity-90">
            Articles pour {groupLabel}
          </h1>
          <CategoryHeader currentGroup={currentGroup} categories={data} />
          <CategoryProducts currentGroup={currentGroup} />
        </>
      )}
      {children}
    </div>
  );
};

export default CategoryLayout;
