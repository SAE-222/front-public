import categories from "@/mocks/categories.mock";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const subs = categories.map((category) => category.subs).flat();
  const sub = subs.find((sub) => sub.id === +params.id);
  if (!sub) {
    return new Response("Sub not found", { status: 404 });
  }
  return Response.json(sub, { status: 200 });
}