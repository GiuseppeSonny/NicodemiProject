// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>I Nostri Contatti</h1>
      <div className={styles.list}>
        <p>Azienda Agricola Nicodemi</p>
        <p>
          Email: <a href="mailto:aanicodemi@gmail.com">aanicodemi@gmail.com</a>
        </p>
        <p>
          Giorgio Nicodemi: <a href="tel:3357560815">3357560815</a>
        </p>
        <p>
          Francesca Curti: <a href="tel:3487816888">3487816888</a>
        </p>
      </div>
    </div>
  );
};
export default Contacts;
