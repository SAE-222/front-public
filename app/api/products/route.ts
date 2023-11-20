import products from "@/mocks/products.mock";

export async function GET() {
  return Response.json(products, { status: 200 })
}