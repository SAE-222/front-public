import { Product } from "@/types/product.type";

const products: Product[] = [
  {
    id: 1,
    groupId: 1,
    categoryId: 1,
    subCategoryId: 11,
    name: "robe-chemise",
    label: "Robe chemise",
    description: "Robe chemise en coton mélangé avec col classique et manches longues. Modèle avec poches de poitrine, ceinture amovible à nouer à la taille et fente sur les côtés. Base arrondie, plus longue dans le dos. Non doublée.",
    price: 39.99,
    discount: 0.2,
    imgs: [
      "https://img01.ztat.net/article/spp-media-p1/bdf59609515d41a388bff6115bb0b357/192a3df65e8247359afb760a6865941c.jpg",
      "https://img01.ztat.net/article/spp-media-p1/30cf666e130845f7a699bcd0c92984b3/36a19d133f11492596cc67f3dbb444d4.jpg",
      "https://img01.ztat.net/article/spp-media-p1/b23aa4aa24bc4db6901abe4a7c703982/04068a518b7c4c42881217fc25f2a38e.jpg",
      "https://img01.ztat.net/article/spp-media-p1/0e0f7d6537dd46fa962178152f2ac6fa/41747fa0f3bb418184a47f775284d714.jpg",
    ],
    sizes: [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
  },
  {
    id: 2,
    groupId: 1,
    categoryId: 1,
    subCategoryId: 4,
    name: "bottes-plateau",
    label: "Bottes à plateau",
    description: "Bottes à plateau en similicuir avec fermeture éclair sur le côté et semelle intérieure en imitation cuir. Semelle extérieure en caoutchouc. Hauteur du plateau 4 cm, hauteur du talon 10 cm.",
    price: 179.95,
    imgs: [
      "https://img01.ztat.net/article/spp-media-p1/0f636c606ccf35138355bdfcb59a6530/510eb87a0b024d86892fd5125e22096b.jpg",
      "https://img01.ztat.net/article/spp-media-p1/6865de8ddddb3be9b3e57e8dbfa2d670/690d6821ad0c4662acd20681ae0cf779.jpg",
      "https://img01.ztat.net/article/spp-media-p1/82b343f82ff4340796de3b753e03116f/025aa3c0c25f4f53b9b55b8f8f2ed980.jpg",
    ],
    sizes: [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41"
    ],
  },
  {
    id: 3,
    groupId: 1,
    categoryId: 1,
    subCategoryId: 1,
    name: "pullandbear-t-shirt-imprime-beige",
    label: "T-shirt imprimé",
    description: "T-shirt en coton avec imprimé devant.",
    price: 9.99,
    imgs: [
      "https://img01.ztat.net/article/spp-media-p1/4decc05e88c74c9e8fdd024f4717b800/66b17a8f9d344c439e8f2a2de97f6959.jpg",
    ],
    sizes: [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
  }
]

export default products;