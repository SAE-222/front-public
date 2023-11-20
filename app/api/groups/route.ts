import groups from "@/mocks/groups.mock";

export async function GET() {
  return Response.json(groups, { status: 200 });
}