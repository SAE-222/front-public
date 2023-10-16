import { groups } from "@/mocks/categories";

export async function GET() {
  return Response.json({ groups }, { status: 200 });
}
