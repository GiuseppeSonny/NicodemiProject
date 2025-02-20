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
          Telefono: <a href="tel:+391234567890">+39 123 456 7890</a>
        </p>
      </div>
    </div>
  );
};
export default Contacts;
