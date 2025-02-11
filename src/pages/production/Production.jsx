// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./production.module.scss";

const Production = () => {
  return (
    <div>
      <h1 className={styles.title}>LA COLTIVAZIONE</h1>
      <p className={styles.paragraph}>
        Fino agli anni ‘90, i campi erano destinati a un&apos;agricoltura di
        sussistenza: frumento, ortaggi, vite e olivi.
        <br />
        Nel 1994, si decise di passare ad una monocoltura piantumando
        un&apos;area di 6 ettari con 2.500 olivi, <br /> utilizzando i cultivar
        tipici del territorio: frantoio 80 %, leccino 15 % e pendolino 5 %, al
        fine di ottenere un <br /> blend dall’aroma bilanciato e persistente.
        <br />
        A partire dal 2022, è stata formalizzata la richiesta di coltivazione
        BIOLOGICA, quindi senza l’utilizzo di
        <br /> nessun pesticida, fertilizzante o diserbante di origine
        sintetica; a seguito dei tempi tecnici, a partire dal <br /> raccolto
        2026, si potrà apporre sulle etichette la dicitura BIO.
      </p>

      <h1 className={styles.title}>LA RACCOLTA</h1>
      <p className={styles.paragraph}>
        Il periodo di raccolta si svolge nei mesi di ottobre e novembre, a
        seconda delle condizioni climatiche e del <br />punto di maturazione delle
        olive al fine di ottenere un gusto bilanciato e delicato al palato. <br /> La
        raccolta, per arrecare il minor danno possibile alle piante, è
        realizzata manualmente da personale <br />specializzato. <br />La modalità non è
        cambiata nel corso dei secoli: attraverso bacchiatori, oggi meccanici,
        le olive vengono <br />fatte cadere su reti precedentemente disposte alla base
        dell’albero. A fine giornata le olive raccolte <br /> vengono portate al
        frantoio dove entro 12 ore vengono molite, per mantenere integre le
        qualità <br />organolettiche.
      </p>
    </div>
  );
};

export default Production;
