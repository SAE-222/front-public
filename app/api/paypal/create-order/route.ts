import client from "@/lib/paypal";
import { orders } from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { orderPrice } = body;
  if (!orderPrice)
    return new NextResponse(
      "S'il vous plaît, fournissez un prix pour la transation.",
      { status: 400 },
    );

  try {
    const paypalClient = client();
    const ordersCreateRequest = new orders.OrdersCreateRequest();
    ordersCreateRequest.headers["Prefer"] = "return=representation";
    ordersCreateRequest.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: `${orderPrice}`,
          },
        },
      ],
    });

    const response = await paypalClient.execute(ordersCreateRequest);

    if (response.statusCode !== 201) {
      return new Response("Une erreur est survenue côté du backend.", {
        status: 500,
      });
    }

    const { id } = response.result;

    return new NextResponse(
      JSON.stringify({
        orderId: id,
      }),
      { status: 200 },
    );
  } catch (err) {
    return new NextResponse(
      "Une erreur est survenue lors de la création de la commande.",
      { status: 500 },
    );
  }
}
