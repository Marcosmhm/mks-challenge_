import { getProducts } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export function useProductData() {
  const query = useQuery({
    queryFn: getProducts,
    queryKey: ['products-data'],
  })

  return {
    ...query,
    data: query.data?.products
  }
}