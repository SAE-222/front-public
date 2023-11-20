import { Category } from "@/types/category.type";

const categories: Category[] = [
  {
    id: 1,
    groupId: 1,
    name: "clothes",
    label: "Vêtements",
    subs: [
      {
        id: 1,
        name: "tshirt",
        label: "T-shirt"
      },
      {
        id: 2,
        name: "shirt",
        label: "Chemise"
      },
      {
        id: 3,
        name: "pants",
        label: "Pantalon"
      },
      {
        id: 4,
        name: "shoes",
        label: "Chaussures"
      },
      {
        id: 5,
        name: "accessories",
        label: "Accessoires"
      },
      {
        id: 11,
        name: "dresses",
        label: "Robes"
      }
    ]
  },
  {
    id: 2,
    groupId: 2,
    name: "clothes",
    label: "Vêtements",
    subs: [
      {
        id: 6,
        name: "tshirt",
        label: "T-shirt"
      },
      {
        id: 7,
        name: "shirt",
        label: "Chemise"
      },
      {
        id: 8,
        name: "pants",
        label: "Pantalon"
      },
      {
        id: 9,
        name: "shoes",
        label: "Chaussures"
      },
      {
        id: 10,
        name: "accessories",
        label: "Accessoires"
      }
    ]
  }
]

export default categories;