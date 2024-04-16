'use client'

import React, { useState } from "react";
import Image from "next/image";

import Sidebar from "@/components/Sidebar/Sidebar";
import { useCartItem } from "@/hooks/useCartData";
import styles from './Header.module.scss';

export default function Header() {
  const { data: cartItems } = useCartItem()
  const [isOpen, setIsOpen] = useState(false)

  const cartAmmount = cartItems?.reduce((accumulator, product) => {
    return accumulator + Number(product.quantity);
  }, 0);

  return ( 
    <>
      <header role="heading" className={styles.header}>
        <div className={styles.title}>
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </div>
        <div className={styles.cartWrapper} onClick={() => setIsOpen(prevState => !prevState)}>
          <Image src={'/icons/vector.png'} alt="Cart icon" width={200} height={200} className={styles.cartIcon} />
          <span className={styles.cartAmmount}>{cartAmmount}</span>
        </div>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
   );
}

