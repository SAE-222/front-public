"use client";

import Container from "@/components/container/container";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <Container className="flex flex-col gap-6 justify-center items-center">
      <div className="space-y-1">
        <h1 className="text-base text-center font-bold text-primary sm:text-lg">
          Oups, une erreur est survenue
        </h1>
        <p className="text-base text-center sm:text-lg">{error.message}</p>
      </div>
      <Link href="/" className={buttonVariants({ variant: "destructive" })}>
        Retour à l'accueil
      </Link>
    </Container>
  );
}
