"use client";

import { Circle } from "@/components/circle/circle";
import { Separator } from "@/components/ui/separator";
import { CheckIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Circles = () => {
  return (
    <div className="mx-auto flex justify-center gap-8 md:gap-28 w-[300px] md:w-auto">
      <Circle text="Se connecter" lined />
      <Circle text="Validation" lined />
      <Circle text="C'est fait !" />
    </div>
  );
};

export default function CheckoutSuccessPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const firstName = session?.user.firstName || "John";

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-8 max-w-md mx-auto space-y-8">
      <Circles />
      <Separator />

      <div className="mx-auto border border-green-400 rounded-full w-fit p-3 text-green-500">
        <CheckIcon size={44} />
      </div>

      <p className="text-primary text-base text-center">
        <span className="text-lg font-semibold">
          Merci {firstName} pour votre commande !
        </span>{" "}
        <br />
        Vous recevrez un email de confirmation dans les prochaines minutes.
      </p>
    </div>
  );
}
