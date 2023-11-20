import useCategory from "@/hooks/use-category";
import { useContext } from "react";
import { isCategory } from "@/services/categories.service";
import { AppDataContext } from "../providers/app-data-provider";

interface ComponentProps {
  items: any;
  getHref: (element: any) => string;
}

// HOC that provides the items and getHref props to the component
const withUrlParams = (Component: React.ComponentType<ComponentProps>) => {
  return () => {
    const category = useCategory();
    const { group, categories } = useContext(AppDataContext);

    const items = (category && isCategory(category)) ? category.subs : categories;
    const getHref = (element: any) => {
      if (category) {
        return `/${group.name}?category=${category?.name}&sub=${element.name}`
      }
      return `/${group.name}?category=${element.name}`
    }

    return <Component items={items} getHref={getHref} />;
  };
};

export default withUrlParams;