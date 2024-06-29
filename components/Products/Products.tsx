"use client";

import { useProductData } from "@/hooks/useProductData";
import ProductCard from "./ProductCard/ProductCard";
import { useMutationState } from "@tanstack/react-query";

import styles from "./Products.module.scss";
import Loading from "../Loading/Loading";

export default function Products() {
  const { data: products, isLoading, isError } = useProductData();

  // access mutation state
  const states = useMutationState({
    filters: { mutationKey: ["add-cart-item"] },
    select: (mutation) => mutation.state,
  });
  const mutationState = states && states.length > 0 ? states[0] : null;

  if (isLoading)
    return (
      <div className={styles.loaderWrapper}>
        <Loading />
      </div>
    );

  if (isError)
    return (
      <div>
        <h2>Occoreu um erro inesperado!</h2>
      </div>
    );

  return (
    <>
      {mutationState?.status === "success" && (
        <div className={styles.success}>Produto adicionado ao carrinho!</div>
      )}
      {mutationState?.status === "error" && (
        <div className={styles.error}>
          Ocorreu um erro ao adicionar produto ao carrinho
        </div>
      )}

      <div className={styles.productsWrapper}>
        {products?.map((product, index) => (
          <ProductCard product={product} key={`${product.id} ${index}`} />
        ))}
      </div>
    </>
  );
}
