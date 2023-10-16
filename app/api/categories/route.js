import { categories } from "@/mocks/categories";

export async function GET() {
  return Response.json({ categories }, { status: 200 });
}
