import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useCategoriesByGroup(name) {
  return useQuery({
    queryKey: ["categories", name],
    queryFn: async () =>
      axios.get(`/api/categories/${name}`).then((res) => res.data.categories),
    enabled: !!name,
  });
}
