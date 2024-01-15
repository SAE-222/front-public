import { Separator } from "@/components/ui/separator";
import { UserPlusIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LoginForm } from "./_components/form";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-8 space-y-4 p-8">
      <div className="w-full space-y-4">
        <p className="text-base font-medium">Authentification</p>
        <LoginForm />
      </div>
      <Separator />
      <div className="w-full space-y-4">
        <p className="text-base font-medium">Je suis nouveau ici</p>
        <div className="flex items-center gap-4">
          <UserPlusIcon size={22} />
          <Link
            href="/register"
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
}
