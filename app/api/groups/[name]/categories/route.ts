import categories from "@/mocks/categories.mock";
import groups from "@/mocks/groups.mock";

export async function GET(
  _request: Request,
  { params }: { params: { name: string } }
) {
  const group = groups.find(
    (group) => group.name.toLowerCase() === params.name.toLowerCase(),
  );
  if (!group) {
    return new Response("Group not found", { status: 404 });
  }
  const filteredCategories = categories.filter((category) => category.groupId === group.id);
  return Response.json({ categories: filteredCategories }, { status: 200 });
}