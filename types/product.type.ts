type Product = {
  id: number;
  groupId?: number;
  categoryId?: number;
  subCategoryId?: number;
  label: string;
  description: string;
  price: number;
  discount?: number;
  imgs: string[];
  sizes: string[];
}

export type { Product };