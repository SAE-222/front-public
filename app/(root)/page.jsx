"use client";

import GroupProvider from "@/lib/providers/group-provider";

// Default page
export default function Home() {
  return (
    <GroupProvider>
      <h1 className="text-highlight font-medium dark:text-white">
        Page d'accueil
      </h1>
    </GroupProvider>
  );
}
