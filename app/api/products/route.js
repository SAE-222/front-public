import { products } from "@/mocks/products";

export async function GET() {
  return Response.json({ products }, { status: 200 });
}
