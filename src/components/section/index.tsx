import * as React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Orbe from "../orbe";

type Props = {
  order: number;
};

export default function Section(props: Props) {
  const myStructure = {
    "Máximo de Cargas": "2",
    "Custo": ": 200",
    "Duração": " 7 segundos"

  };
  const myStructureTwo = {
    "Máximo de Cargas": ": 1",
    "Sem Custo": ": Recarga: 45s",
    Autocura: ": 30 HP",
    "Cura de Aliados:": ": 100 HP",
  };
  const myStructureThree = {
    "Máximo de Cargas": ": 1",
    "Custo": ": 100 HP",
  };
  const myStructureFour = {
    "Máximo de Cargas": ": 1",
    "Custo": ": 8 orbes",
  };

  switch (props.order) {
    case 0:
      return (
        <section className={styles.sessaoPrincipal}>
          <div className={styles.conteudoPrincipal}>
            <h1 className={styles.tituloPrincipal}>
              EQUILIBRIO DA <strong>FORÇA</strong>
            </h1>
            <h2 className={styles.mensagemPrincipal}>
              Sage é uma agente que represenat a a china e é classificada como
              sentinela
            </h2>
            <button className={styles.botaoPrincipal}>Saiba Mais</button>
          </div>
          <Image
            height={640}
            width={500}
            alt="sage"
            src={"/assets/agente.png"}
          />
        </section>
      );
    case 1:
      return (
        <section className={styles.conteudoSecundario}>
          <h3 className={styles.tituloSecundario}>A agente mais forte</h3>
          <p className={styles.paragrafoSecundario}>
            Como uma verdadeira fortaleza chinesa, Sage traz segurança para si
            mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e
            rechaçar investidas agressivas, ela oferece um centro de calmaria em
            meio ao caos da batalha
          </p>
        </section>
      );
    case 2:
      return (
        <section className={styles.ultimaSessao}>
          <div>
            <h1 className={styles.ultimoTitulo}>
              "You will not Kill my allies!"
            </h1>
            <div className={styles.orbes}>
            <Orbe
                imgReference="/assets/orbe de lentidao.webp"
                titulo="Orbe de lentidão"
                key={"Orbe de lentidão"}
                structure={myStructure}
                paragrafoHabilidade="Primeira ativação: Invoca uma orbe de gelo
                Segunda ativação: Dispara a orbe que, ao
                entrar em contato com a superfície, atrasa os adversários que
                estiverem sobre ela causando lentidão"
              />

              <Orbe
                imgReference="/assets/orbe de cura.webp"
                titulo="Orbe Curativo"
                key={"Orbe Curativo"}
                structure={myStructureTwo}
                paragrafoHabilidade="Botão esquerdo: Depois de direcionar mira ao
                aliado, Sage confirma a ação e o cura.
                Botão direito: Caso esteja ferida, Sage se
                cura com a orbe."
              />

              <Orbe
                imgReference="/assets/barreira.webp"
                titulo="Orbe de Barreira"
                key={"Orbe de Barreira"}
                structure={myStructureThree}
                paragrafoHabilidade="Primeira ativação</strong>: Mostra a marcação do local
                onde a barreira será invocada.
                Segunda ativação: Invoca uma barreira sólida,
                que impedirá o avanço dos adversários. Ela também pode ser
                usada como um “degrau” para alcançar pontos elevados do mapa."
              />

              <Orbe
                imgReference="/assets/res.webp"
                titulo="Ressurreição"
                key={"Ressurreição"}
                structure={myStructureFour}
                paragrafoHabilidade="Primeira ativação: Ativa a habilidade de
                ressurreição.
                Segunda ativação: Direcionando a mira ao
                aliado morto, Sage canaliza por aproximadamente 2 segundos e
                traz o companheiro de volta com vida completa."
              />

              {/* <div className={styles.orbeHabilidade}>
                <Image
                  src={"/assets/orbe de lentidao.webp"}
                  className={styles.imgHab}
                  height={60}
                  width={60}
                  alt=""
                />
                <div>
                  <h4 className={styles.tituloHabilidade}>Orbe de lentidão</h4>
                  <p className={styles.paragrafoHabilidade}>
                    {" "}
                    <strong>Máximo de Cargas</strong>: 2
                    <br /> <strong>Custo</strong>: 200
                    <br /> <strong>Duração</strong>: 7 segundos
                  </p>
                </div>
                <p className={styles.paragrafoHabilidade}>
                  <strong>Primeira ativação</strong>: Invoca uma orbe de gelo{" "}
                  <br />
                  <strong>Segunda ativação</strong>: Dispara a orbe que, ao
                  entrar em contato com a superficie, atrasa os adversarios que
                  estiverem sobre ela causando lentidão
                </p>
              </div>
              <div className={styles.orbeHabilidade}>
                <Image
                  src="/assets/orbe de cura.webp"
                  className={styles.imgHab}
                  height={60}
                  width={60}
                  alt=""
                />
                <div>
                  <h4 className={styles.tituloHabilidade}>Orbe Curativo </h4>
                  <p className={styles.paragrafoHabilidade}>
                    {" "}
                    <strong>Máximo de Cargas</strong>: 1
                    <br /> <strong>Sem Custo</strong>: Recarga: 45s
                    <br /> <strong>Autocura</strong>: 30 HP
                    <br /> <strong>Cura de aliados:</strong>: 100 HP
                  </p>
                </div>
                <p className={styles.paragrafoHabilidade}>
                  <strong>Botão esquerdo</strong>: Depois de direcionar mira ao
                  aliado, Sage confirma a ação e o cura.
                  <br />
                  <strong>Botão direito</strong>: Caso esteja ferida, Sage se
                  cura com a orbe.
                </p>
              </div>
              <div className={styles.orbeHabilidade}>
                <Image
                  src="/assets/barreira.webp"
                  className={styles.imgHab}
                  height={60}
                  width={60}
                  alt=""
                />
                <div>
                  <h4 className={styles.tituloHabilidade}>Orbe de Barreira</h4>
                  <p className={styles.paragrafoHabilidade}>
                    {" "}
                    <strong>Máximo de Cargas</strong>: 1
                    <br /> <strong>Custo</strong>: 400
                  </p>
                </div>
                <p className={styles.paragrafoHabilidade}>
                  <strong>Primeira ativação</strong>: Mostra a marcação do local
                  onde a barreira será invocada <br />
                  <strong>Segunda ativação</strong>: Invoca uma barreira sólida,
                  que impedirá o avanço dos adversários. Ela também pode ser
                  usada como um “degrau” para alcançar pontos elevados do mapa.
                </p>
              </div>
              <div className={styles.orbeHabilidade}>
                <Image
                  src="/assets/res.webp"
                  className={styles.imgHab}
                  height={60}
                  width={60}
                  alt=""
                />
                <div>
                  <h4 className={styles.tituloHabilidade}> Ressurreição</h4>
                  <p className={styles.paragrafoHabilidade}>
                    {" "}
                    <strong>Máximo de Cargas</strong>: 1
                    <br /> <strong>Custo</strong>: 8 orbes
                  </p>
                </div>
                <p className={styles.paragrafoHabilidade}>
                  <strong>Primeira ativação</strong>: Ativa a habilidade de
                  ressurreição
                  <br />
                  <strong>Segunda ativação</strong>: Direcionando a mira ao
                  aliado morto, Sage canaliza por aproximadamente 2 segundos e
                  traz o companheiro de volta com vida completa.
                </p>
              </div> */}

            </div>
          </div>
          <Image
            src={"/assets/sentinela.png"}
            width={500}
            height={400}
            alt="Sentinela"
          />
        </section>
      );
  }
}
