"use client";
import { motion } from "framer-motion";

import { useCartItem, useUpdateCartItem } from "@/hooks/useCartData"; 
import styles from "./Sidebar.module.scss";
import Image from "next/image";
import { ProductType } from "@/types/Product";

type Props = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({ isOpen, setIsOpen }: Props) {
  const { data: cartItems } = useCartItem();
  const { mutate } = useUpdateCartItem()

  const cartTotal = cartItems?.reduce((accumulator, product) => {
    return accumulator + Number(product.price * product.quantity)
  }, 0)

  const handleDecrementItem = async (product: ProductType) => {
    mutate({...product, quantity: product.quantity--})
  }

  const hanldeIncrementItem = async (product: ProductType) => {
    mutate({...product, quantity: product.quantity++})
  }

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={isOpen ? { x: 0} : ''}
      exit={{ x: '100%', display: 'none' }}
      transition={{ease: "easeInOut", duration: 0.30}}
      className={styles.sidebar}
    >
      <div className={styles.cartFlex}>
        <h3 className={styles.cartTitle}>Carrinho de compras</h3>
        <div onClick={() => setIsOpen(prevState => !prevState)}>
          <Image src={'/icons/close_cart.png'} width={200} height={200} alt="close cart icon" className={styles.closeCartIcon} /> 
        </div>
      </div>

      <div className={styles.cartProductsWrapper}>
        {cartItems?.map((product, index) => (
          <div className={styles.productWrapper} key={`${product.id} ${index}`}>
            <div className={styles.productContainer}>
              <Image src={product.photo} width={200} height={200} alt={`${product.name} image`} />
              <h4 className={styles.productName}>{product.name}</h4>
              <div className={styles.ammountContainer}>
                <span className={styles.ammountButton} onClick={() => handleDecrementItem(product)}>-</span>
                <span className={styles.ammountPreview}>{product.quantity}</span>
                <span className={styles.ammountButton} onClick={() => hanldeIncrementItem(product)}>+</span>
              </div>
              <span className={styles.productPrice}>R${product.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className={styles.cartTotal}>
          <span>Total:</span>
          <span>R${cartTotal?.toFixed(2)}</span>
        </div>
        <button className={styles.cartBuyButton}>Finalizar Compra</button>
      </div>
    </motion.div>
  );
}
