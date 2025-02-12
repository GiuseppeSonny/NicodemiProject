import React from "react";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>LA NOSTRA STORIA</h1>
      <p>
        La presenza della famiglia Nicodemi sul territorio del comune di Monte
        Roberto, secondo quanto tramandato, risale al 1500. Certamente nel 1731
        Giuseppe Nicodemi era Curato presso la Chiesa Parrocchiale.
      </p>
      <img
        src="src\assets\images\la-nostra-storia.jpg"
        alt="la nostra storia"
        className={styles.imageStory}
      />
      <p>
        Successivamente nel 1835 il Catasto Gregoriano, il primo catasto
        particellare dello Stato Pontificio, assegna alla Famiglia Nicodemi
        parte dei campi attualmente coltivati.
      </p>
      <img
        src="src\assets\images\territorio.jpg"
        alt="il nostro territorio"
        className={styles.imageTerritory}
      />
      <p>
        Ulteriori appezzamenti sono stati aggiunti nel corso degli anni ‘60.
      </p>
      <h1>IL NOSTRO TERRITORIO</h1>
      <p>
        Monte Roberto è un piccolo borgo sito sulle colline nell’entroterra
        anconetano. Assieme ai comuni limitrofi fa parte dei Castelli di Jesi,
        l’insieme dei comuni della Vallesina che, sin dal Medioevo, erano
        assoggettati al Contado di Jesi, città regia per volere dell’Imperatore
        Federico II di Svevia che qui nacque il 26 dicembre del 1194. Nel XV
        secolo, finita la parentesi imperiale, Jesi e i suoi Castelli tornarono
        sotto l'egemonia diretta del Papa, mantenendo una posizione di riguardo
        all'interno dello Stato Pontificio. Attualmente, Monte Roberto, vanta il
        riconoscimento di Città dell’olio ed è inserita nell’area di produzione
        del Verdicchio dei Castelli di Jesi DOP.
      </p>
    </div>
  );
};

export default Home;
