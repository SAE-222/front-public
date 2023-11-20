import categories from "@/mocks/categories.mock";

export async function GET() {
  return Response.json(categories, { status: 200 });
}