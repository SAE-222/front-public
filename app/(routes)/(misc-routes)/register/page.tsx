import { Separator } from "@/components/ui/separator";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { RegisterForm } from "./_components/form";

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-8 space-y-4 p-8">
      <div className="w-full space-y-4">
        <p className="text-base font-medium">Inscription</p>
        <RegisterForm />
      </div>
      <Separator />
      <div className="w-full space-y-4">
        <p className="text-base font-medium">J'ai déjà un compte client</p>
        <div className="flex items-center gap-4">
          <UserIcon size={22} />
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
