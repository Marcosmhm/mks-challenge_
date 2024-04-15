'use client'

import Image from "next/image";
import styles from './Header.module.scss';
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

export default function Header() {
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
          <span className={styles.cartAmmount}>0</span>
        </div>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
   );
}

