"use client";

import { useGroups } from "@/hooks/groups";
import { useCurrentGroup } from "@/store/current-group-store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function CategoryPage({ params: { name } }) {
  const exists = (name, groups) => {
    return groups.find((group) => group.name === name);
  };

  const searchParams = useSearchParams();
  const router = useRouter();

  const { setCurrentGroup } = useCurrentGroup();
  const { status, data } = useGroups();

  const sub = searchParams.get("sub");

  useEffect(() => {
    if (status === "loading") return;

    if (!exists(name, data)) {
      router.push("/");
      return;
    }

    setCurrentGroup(name);
  }, [status, searchParams]);

  return (
    <div className="text-highlight font-medium dark:text-white">
      {sub && <h1>Sub category : {sub}</h1>}
    </div>
  );
}
