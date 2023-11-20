import categories from "@/mocks/categories.mock";

export async function GET() {
  const subs = categories.map((category) => category.subs).flat();
  return Response.json(subs, { status: 200 });
}