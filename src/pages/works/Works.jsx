import React, { useState } from "react";
import styles from "./works.module.scss";

const Works = () => {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.main}>
      <div className={styles.workstext}>
        <h2>Prodotti</h2>
      </div>

      <div className={styles.productsContainer}>
        <div className={styles.productCard}>
          <img
            src="https://source.unsplash.com/200x200/?olive-oil"
            alt="Olio E.V.O."
            className={styles.productImage}
          />
          <h3>Olio in Vetro</h3>
          <p>Prezzo: €10</p>

          <label>Quantità:</label>
          <input
            type="number"
            min="1"
            value={quantity.vetro}
            onChange={(e) => handleQuantityChange(e.target.value)}
          />
        </div>

        <div className={styles.productCard}>
          <img
            src="https://source.unsplash.com/200x200/?olive-oil"
            alt="Miele Bio"
            className={styles.productImage}
          />
          <h3>Olio in latte</h3>
          <p>Prezzo: €8</p>

          <label>Quantità:</label>
          <input
            type="number"
            min="1"
            value={quantity.latte}
            onChange={(e) => handleQuantityChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
