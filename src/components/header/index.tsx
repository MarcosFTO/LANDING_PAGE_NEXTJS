import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.css"

export default function Header(){
    return <header className={styles.cabecalho}>
        <Image src={"/assets/logo.png"} alt="logo" width={72} height={72}/>
        <nav className={styles.menu}>
            <a className={styles.menuItem} href="">Sobre</a>
            <a className={styles.menuItem} href="">Habilidade</a>
            <a className={styles.menuItem} href="">Recrutamento</a>
        </nav>
    </header>;
}