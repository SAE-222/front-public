import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGroups() {
  return useQuery({
    queryKey: ["groups"],
    queryFn: async () =>
      axios.get("/api/groups").then(({ data }) => data.groups),
  });
}
