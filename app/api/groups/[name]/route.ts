import groups from "@/mocks/groups.mock";

export async function GET(
  _request: Request,
  { params }: { params: { name: string } },
) {
  const group = groups.find((group) => group.name === params.name);
  if (!group) {
    return new Response("Group not found", { status: 404 });
  }
  return Response.json(group, { status: 200 });
}