"use client";

import { useGroups } from "@/hooks/groups";
import { useCurrentGroup } from "@/store/current-group-store";
import { useEffect } from "react";

const GroupProvider = ({ children }) => {
  const { status, data } = useGroups();
  const { currentGroup, setCurrentGroup } = useCurrentGroup();

  useEffect(() => {
    if (status !== "success" || currentGroup?.length > 0) return;
    setCurrentGroup(data[0].name);
  }, [status]);

  return <>{children}</>;
};

export default GroupProvider;
