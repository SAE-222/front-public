"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Group } from "@/types/group.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface GroupsProps {
  groups: Group[];
}

const Groups = ({ groups }: GroupsProps) => {
  const pathname = usePathname();

  const isActive = (group: Group) => {
    if (!group || !pathname) return false;
    return pathname.startsWith(`/${group.name}`);
  };

  return (
    <div className="hidden md:block">
      {groups.map((group) => (
        <Link
          key={group.id}
          href={`/${group.name}`}
          className={cn(
            buttonVariants({ variant: "link" }),
            isActive(group) && "font-bold"
          )}
        >
          {group.label}
        </Link>
      ))}
    </div>
  );
};

export default Groups;
