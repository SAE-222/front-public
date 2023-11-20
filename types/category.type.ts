type SubCategory = {
  id: number;
  name: string;
  label: string;
}

type Category = {
  id: number;
  groupId: number;
  name: string;
  label: string;
  subs: SubCategory[];
}

export type { Category, SubCategory };