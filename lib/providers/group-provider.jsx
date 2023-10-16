"use client";

import { useGroups } from "@/hooks/groups";
import { useCurrentGroup } from "@/store/current-group-store";
import { useEffect } from "react";

const GroupProvider = ({ children }) => {
  const { status, data } = useGroups();
  const { setCurrentGroup } = useCurrentGroup();

  useEffect(() => {
    if (status === "success") {
      setCurrentGroup(data[0].name);
    }
  }, [status]);

  return <>{children}</>;
};

export default GroupProvider;
