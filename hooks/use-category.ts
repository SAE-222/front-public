import { AppDataContext } from "@/components/providers/app-data-provider";
import { Category, SubCategory } from "@/types/category.type";
import { useSearchParams } from "next/navigation"
import { useContext, useMemo } from "react";

const useCategory = (withSubs = false): Category | SubCategory | undefined => {
  const searchParams = useSearchParams();
  const categoryName = searchParams.get('category') || '';
  const subCategoryName = searchParams.get('sub') || '';

  const { categories } = useContext(AppDataContext);

  const [category, subCategory] = useMemo(() => {
    const foundCategory = categories.find(cat => cat.name === categoryName);
    const foundSubCategory = withSubs && foundCategory 
      ? foundCategory.subs.find(sub => sub.name === subCategoryName) 
      : null;

    return [foundCategory, foundSubCategory];
  }, [categoryName, subCategoryName]);

  return withSubs ? (subCategory || category) : category;
};

export default useCategory;