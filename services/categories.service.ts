import { Category, SubCategory } from "@/types/category.type";

const getCategoriesByGroup = async (groupName: string) : Promise<Category[]> => {
  const response = await fetch(`http://localhost:3000/api/groups/${groupName}/categories`, { next: { revalidate: 300 } });
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const { categories } = await response.json();
  return categories;
}

const isCategory = (object: Category | SubCategory): object is Category => {
  return 'subs' in object;
}

export { getCategoriesByGroup, isCategory }