// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./home.module.scss";
const Home = () => {
  return (
    <div>
      <h1 className={styles.titleHome}>LA NOSTRA STORIA</h1>
      <p className={styles.paragraphHome}>
        La presenza della famiglia Nicodemi sul territorio del comune di Monte
        Roberto, secondo quanto <br />
        tramandato, risale al 1500. <br />
        Certamente nel 1731 Giuseppe Nicodemi era Curato presso la Chiesa
        Parrocchiale.
      </p>
      <div className={styles.imgHome}>
        <img
          src="src\assets\images\la-nostra-storia.jpg"
          alt="la nostra storia"
          width={700}
        />
      </div>
      <p className={styles.paragraphs}>
        Successivamente nel 1835 il Catasto Gregoriano, il primo catasto
        particellare dello Stato Pontificio, assegna <br /> alla Famiglia
        Nicodemi parte dei campi attualmente coltivati.
      </p>
      <div className={styles.imgHome}>
        <img
          src="src\assets\images\territorio.jpg"
          alt="il nostro territorio"
          width={600}
        />
      </div>
      <p className={styles.paragraphs}>
        Ulteriori appezzamenti sono stati aggiunti nel corso degli anni ‘60.
      </p>
      <h1 className={styles.titleHome}>IL NOSTRO TERRITORIO</h1>
      <p className={styles.paragraphHome}>
        Monte Roberto è un piccolo borgo sito sulle colline nell’entroterra
        anconetano. <br /> Assieme ai comuni limitrofi fa parte dei Castelli di Jesi,
        l’insieme dei comuni della Vallesina che, sin dal <br /> Medioevo, erano
        assoggettati al Contado di Jesi, città regia per volere dell’Imperatore
        Federico II di Svevia <br /> che qui nacque il 26 dicembre del 1194. <br /> Nel XV
        secolo, finita la parentesi imperiale, Jesi e i suoi Castelli tornarono
        sotto l&apos;egemonia diretta del Papa, <br />mantenendo una posizione di
        riguardo all&apos;interno dello Stato Pontificio. <br /> Attualmente, Monte
        Roberto, vanta il riconoscimento di Città dell’olio ed è inserita
        nell’area di produzione del Verdicchio dei Castelli di Jesi DOP.
      </p>
    </div>
  );
};

export default Home;
