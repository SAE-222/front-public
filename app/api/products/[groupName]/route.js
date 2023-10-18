import { groups } from "@/mocks/categories";
import { products } from "@/mocks/products";

export async function GET(_request, { params: { groupName } }) {
  const group = groups.find((group) => group.name === groupName.toString());
  if (!group) {
    return Response.json({ message: "Group not found" }, { status: 404 });
  }
  const filteredProducts = products.filter(
    (product) => product.groupId === group.id,
  );
  return Response.json({ products: filteredProducts }, { status: 200 });
}
