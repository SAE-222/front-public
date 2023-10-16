import { groups } from "@/mocks/categories";

export async function GET(_request, { params: { name } }) {
  const group = groups.find((group) => group.name == name);
  if (!group) {
    return Response.json({ message: "Group not found" }, { status: 404 });
  }
  return Response.json({ group }, { status: 200 });
}
