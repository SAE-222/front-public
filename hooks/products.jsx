import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useProductsByGroup(name) {
  return useQuery({
    queryKey: ["products", name],
    queryFn: async () =>
      axios.get(`/api/products/${name}`).then((res) => res.data.products),
    enabled: !!name,
  });
}
