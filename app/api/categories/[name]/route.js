import { categories as allCategories, groups } from "@/mocks/categories";

export async function GET(_request, { params: { name } }) {
  const group = groups.find((group) => group.name == name);

  if (!group) {
    return Response.json({ message: "Group not found" }, { status: 404 });
  }

  const categories = allCategories.filter(
    (category) => category.groupId == group.id
  );

  return Response.json({ categories }, { status: 200 });
}
