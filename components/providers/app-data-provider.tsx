"use client";

import { Category } from "@/types/category.type";
import { Group } from "@/types/group.type";
import { createContext } from "react";

interface AppDataProviderProps {
  children: React.ReactNode;
  group: Group;
  categories: Category[];
}

export const AppDataContext = createContext({
  group: {} as Group,
  categories: [] as Category[],
});

export const AppDataProvider = ({
  children,
  group,
  categories,
}: AppDataProviderProps) => {
  return (
    <AppDataContext.Provider value={{ group, categories }}>
      {children}
    </AppDataContext.Provider>
  );
};
