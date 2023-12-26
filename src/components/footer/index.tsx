import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.conteudoRodape}>
      <Image className={styles.imgFooter} src={"/assets/logo.png"} width={50} height={50} alt="logo sage" />
    </footer>
  );
}
