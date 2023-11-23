import categories from "@/mocks/categories.mock";
import products from "@/mocks/products.mock";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 250));
  const subs = categories.map((category) => category.subs).flat();
  const sub = subs.find((sub) => sub.id === +params.id);
  if (!sub) {
    return new Response("Sub not found", { status: 404 });
  }
  const filteredProducts = products.filter((product) => product.subCategoryId === sub.id);
  return Response.json({ products: filteredProducts }, { status: 200 });
}