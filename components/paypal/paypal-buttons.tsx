import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

interface PaypalButtonsProps {
  paypalCreateOrder: () => Promise<string | null>;
  paypalCaptureOrder: (order_id: string) => void;
}

export const PaypalButtons = ({
  paypalCreateOrder,
  paypalCaptureOrder,
}: PaypalButtonsProps) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
        currency: "EUR",
        intent: "capture",
      }}
    >
      <PayPalButtons
        style={{ color: "gold", shape: "rect", label: "pay", height: 50 }}
        createOrder={async (data, actions) => {
          const order_id = await paypalCreateOrder();
          return order_id + "";
        }}
        onApprove={async (data, actions) => paypalCaptureOrder(data.orderID)}
      />
    </PayPalScriptProvider>
  );
};
