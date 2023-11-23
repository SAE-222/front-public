import categories from "@/mocks/categories.mock";
import products from "@/mocks/products.mock";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 250));
  const category = categories.find(
    (category) => category.id === +params.id
  );
  if (!category) {
    return new Response("Category not found", { status: 404 });
  }
  const filteredProducts = products.filter((product) => product.categoryId === category.id);
  return Response.json({ products: filteredProducts }, { status: 200 });
}