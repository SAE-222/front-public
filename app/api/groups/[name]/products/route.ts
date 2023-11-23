import groups from "@/mocks/groups.mock";
import products from "@/mocks/products.mock";

export async function GET(
  _request: Request,
  { params }: { params: { name: string } }
) {
  // Simulate a slow response
  await new Promise((resolve) => setTimeout(resolve, 250));
  const group = groups.find(
    (group) => group.name.toLowerCase() === params.name.toLowerCase(),
  );
  if (!group) {
    return new Response("Group not found", { status: 404 });
  }
  const filteredProducts = products.filter((product) => product.groupId === group.id);
  return Response.json({ products: filteredProducts }, { status: 200 });
}