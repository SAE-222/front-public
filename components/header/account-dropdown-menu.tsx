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

const AccountDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <UserIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/account">Aperçu de mon compte</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>Commandes</DropdownMenuItem>
        <DropdownMenuItem>Aide & contact</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdownMenu;
