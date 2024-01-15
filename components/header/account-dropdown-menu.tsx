"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AccountDropdownMenu = () => {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <UserIcon size={22} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/account">Aperçu de mon compte</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Commandes</DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>Aide & contact</DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()}>
            Se déconnecter
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <UserIcon size={22} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/login">Se connecter</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/register">S'inscrire</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Aide & contact</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdownMenu;
