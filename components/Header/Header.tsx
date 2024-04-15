'use client'

import Image from "next/image";
import styles from './Header.module.scss';
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useCartItem } from "@/hooks/useCartData";

export default function Header() {
  const { data: cartItems } = useCartItem()
  const [isOpen, setIsOpen] = useState(false)
  return ( 
    <>
      <header role="heading" className={styles.header}>
        <div className={styles.title}>
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </div>
        <div className={styles.cartWrapper} onClick={() => setIsOpen(prevState => !prevState)}>
          <Image src={'/vector.png'} alt="Cart icon" width={200} height={200} className={styles.cartIcon} />
          <span className={styles.cartAmmount}>{cartItems?.length}</span>
        </div>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
   );
}

