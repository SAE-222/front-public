import { categories, groups } from "@/mocks/categories";

export async function GET(_request, { params: { groupName } }) {
  const group = groups.find((group) => group.name === groupName.toString());
  if (!group) {
    return Response.json({ message: "Group not found" }, { status: 404 });
  }
  const filteredCategories = categories.filter(
    (category) => category.groupId === group.id,
  );
  return Response.json({ categories: filteredCategories }, { status: 200 });
}
