"use client";

import useCategory from "@/hooks/use-category";
import { useContext } from "react";
import { AppDataContext } from "../providers/app-data-provider";

const SectionLabel = () => {
  const { group } = useContext(AppDataContext);
  const category = useCategory();

  const title = category ? `${category.label} ${group.label.toLowerCase()}` : `Articles pour ${group.label.toLowerCase()}`

  return <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
}

export default SectionLabel;