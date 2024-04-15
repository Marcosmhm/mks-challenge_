"use client";

import Image from "next/image";

import { ProductType } from "@/types/Product";
import styles from "./ProductCard.module.scss";
import { useCreateCartItem } from "@/hooks/useCartData"; 

type Props = {
  product: ProductType;
};

export default function ProductCard({ product }: Props) {
  const { mutate: createCartItem, isPending } = useCreateCartItem();

  const handleCartAdd = (product: ProductType) => {
    createCartItem(product);
  };
  return (
    <>
      <div className={styles.productWrapper}>
        <Image
          src={product.photo}
          width={200}
          height={200}
          alt={product.name + "image"}
        />
        <div className={styles.productFlex}>
          <h3 className={styles.productName}>{product.name}</h3>
          <div className={styles.productPrice}>R${product.price}</div>
        </div>
        <p className={styles.productDescription}>{product.description}</p>
        <div
          className={styles.productBuyWrapper}
          onClick={() => handleCartAdd(product)}
        >
          <button>
            <Image
              src={"/icons/shopping-bag.png"}
              width={200}
              height={200}
              alt="bag icon"
              className={styles.bagIcon}
            />
            {!isPending ? "COMPRAR" : "ADICIONANDO..."}
          </button>
        </div>
      </div>
    </>
  );
}
