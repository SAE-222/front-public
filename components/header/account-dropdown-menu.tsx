import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

const AvatarAccount = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/antoine-mille.png" />
      <AvatarFallback>AM</AvatarFallback>
    </Avatar>
  );
};

const AccountDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <AvatarAccount />
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