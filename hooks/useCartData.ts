import { getCartItems, mockCart, updateMockCart } from "@/services/api";
import { ProductType } from "@/types/Product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCreateCartItem() {
  const queryClient = useQueryClient();

  const query = useMutation({
    mutationFn: (product: ProductType) => mockCart(product),
    mutationKey: ['add-cart-item'],
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["cart-items"] });
      }
    },
  })

  return {
    ...query
  }
}

export function useUpdateCartItem() {
  const queryClient = useQueryClient()
  
  const query = useMutation({
    mutationFn: (product: ProductType) => updateMockCart(product),
    onSettled: async (_, error, variables) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["cart-items"]});
        await queryClient.invalidateQueries({
          queryKey: ["todo", { id: variables.id }],
         });
        
      }
    },
  })

  return {
    ...query
  }
}

export function useCartItem() {
  const query = useQuery({
    queryFn: getCartItems,
    queryKey: ['cart-items'],
  })

  return {
    ...query,
    data: query.data
  }
}