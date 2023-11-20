import categories from "@/mocks/categories.mock";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const category = categories.find((category) => category.id === +params.id);
  if (!category) {
    return new Response("Category not found", { status: 404 });
  }
  return Response.json(category, { status: 200 });
}