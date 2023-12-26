import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

type Props = {
  imgReference: string;
  titulo: string;
  structure: { [key: string]: string };
  paragrafoHabilidade: string;
};

export default function Orbe(props: Props) {
  
  return (
    
    <div className={styles.orbeHabilidade}>
      <Image
        src={props.imgReference}
        alt="imagem orbe"
        width={60}
        height={60}
        className={styles.imgHab}
      />
      <div>
        <h4 className={styles.tituloHabilidade}>Orbe de lentidão</h4>
        <div className={styles.paragrafoHabilidade}>
          {Object.keys(props.structure).map((itemKey) => {
            return (
              <p>
                {itemKey}
                {props.structure[itemKey]}
              </p>
            );
          })}
        </div>
      </div>
      <p className={styles.paragrafoHabilidade}>{props.paragrafoHabilidade}</p>
    </div>
  );
}
