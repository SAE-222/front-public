import useCategory from "@/hooks/use-category";
import { useContext } from "react";
import { isCategory } from "@/services/categories.service";
import { AppDataContext } from "../providers/app-data-provider";
import { Category, SubCategory } from "@/types/category.type";

interface ComponentProps {
  items: any;
  getHref: (element: any) => string;
}

// HOC that provides the items and getHref props to the component
const withUrlParams = (Component: React.ComponentType<ComponentProps>) => {
  return () => {
    const category = useCategory();
    const { group, categories } = useContext(AppDataContext);

    const items = category && isCategory(category) ? category.subs : categories;
    const buildHref = (element: Category | SubCategory) => {
      return category
        ? `/${group.name}?category=${category?.name}&sub=${element.name}`
        : `/${group.name}?category=${element.name}`;
    };

    return <Component items={items} getHref={buildHref} />;
  };
};

export default withUrlParams;
