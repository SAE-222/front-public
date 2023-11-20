type Product = {
  id: number;
  groupId?: number;
  categoryId?: number;
  subCategoryId?: number;
  name: string;
  label: string;
  price: number;
  discount?: number;
  imgs: string[];
  sizes: string[];
}

export type { Product };