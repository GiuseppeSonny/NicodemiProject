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
      {/*  <div className={styles.workstext}>
        <h2>Prodotti</h2>
      </div> */}

      <div className={styles.product1}>
        <h3>Olio E.V.O.</h3>
        <p>Prezzo: €10</p>

        <label>Quantità:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Works;
