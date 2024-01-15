import client from "@/lib/paypal";
import { orders } from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { orderId } = body;
  if (!orderId)
    return new NextResponse(
      "S'il vous plaît, fournissez un id de transaction.",
      { status: 400 },
    );
  const paypalClient = client();
  const ordersCaptureRequest = new orders.OrdersCaptureRequest(orderId);
  const response = await paypalClient.execute(ordersCaptureRequest);
  if (!response) {
    return new NextResponse("Une erreur est survenue côté du backend.", {
      status: 500,
    });
  }

  return new NextResponse(
    JSON.stringify({
      response,
    }),
    { status: 200 },
  );
}
