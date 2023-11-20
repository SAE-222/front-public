import products from "@/mocks/products.mock";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const product = products.find((product) => product.id === +params.id);
  if (!product) {
    return new Response("Product not found", { status: 404 });
  }
  return Response.json({ product }, { status: 200 });
}