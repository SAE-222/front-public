import { Category, SubCategory } from "@/types/category.type";
import { BACK_URL } from "@/lib/environment";

const getCategoriesByGroup = async (groupName: string): Promise<Category[]> => {
  const response = await fetch(`${BACK_URL}/categories/${groupName}`, {
    next: { revalidate: 300 },
  });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return await response.json();
};

const isCategory = (object: Category | SubCategory): object is Category => {
  return "subs" in object && object.subs.length > 0;
};

export { getCategoriesByGroup, isCategory };
