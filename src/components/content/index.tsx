import * as React from 'react';
import styles from "./styles.module.css";
import Section from '../section';

export enum OrderSection{
    One,
    Two,
    Three,
}

export default function Content(){
    return (
        <main className={styles.conteudo}>
            <Section order={OrderSection.One} />
            <Section order={OrderSection.Two} />
            <Section order={OrderSection.Three}  />
        </main>
    );
}