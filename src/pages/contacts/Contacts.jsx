import React from "react";
import styles from "./contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>I Nostri Contatti</h1>
      <ul className={styles.list}>
        <li>Nicodemi Azienda Agricola</li>
        <li>aanicodemi@gmail.com</li>
        <li>123-456-7890</li>
      </ul>
    </div>
  );
};
export default Contacts;
