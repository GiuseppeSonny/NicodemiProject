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

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      user_name: formData.name,
      user_email: formData.email,
      user_address: formData.address,
      product_quantity: quantity,
      product_name: "Olio",
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Sostituisci con il tuo Service ID
        "YOUR_TEMPLATE_ID", // Sostituisci con il tuo Template ID
        emailData,
        "YOUR_USER_ID" // Sostituisci con il tuo User ID
      )
      .then((response) => {
        alert("Il tuo ordine è stato inviato correttamente!");
        setFormData({
          name: "",
          email: "",
          address: "",
        });
        setQuantity(1);
        error;
        {
          alert("Si è verificato un errore durante l'invio dell'ordine.");
        }
      });
  };
  return (
    <div className={styles.main}>
      <div className={styles.workstext}>
        <h2>Prodotti</h2>
      </div>

      <div className={styles.productsContainer}>
        <div className={styles.productCard}>
          <img
            src="src\assets\images\olio-piccolo.jpg"
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
            src="src/assets/images/olio-grande.jpg"
            alt="olio Bio"
            className={styles.productImage}
          />
          <h3>Olio in Latta</h3>
          <p>Prezzo: €8</p>

          <label>Quantità:</label>
          <input
            type="number"
            min="1"
            value={quantity.latte}
            onChange={(e) => handleQuantityChange(e.target.value)}
          />
          <form onSubmit={handleSubmit} className="order-form">
            <h3>Inserisci i tuoi dati</h3>

            <label>Nome:</label>
            <input type="text" name="name" required onChange={handleChange} />

            <label>Email:</label>
            <input type="email" name="email" required onChange={handleChange} />

            <label>Indirizzo:</label>
            <textarea name="address" required onChange={handleChange} />

            <button type="submit">Invia Ordine</button>
          </form>
        </div>
        {/*  <form onSubmit={handleSubmit} className="order-form">
          <h3>Inserisci i tuoi dati</h3>

          <label>Nome:</label>
          <input type="text" name="name" required onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" required onChange={handleChange} />

          <label>Indirizzo:</label>
          <textarea name="address" required onChange={handleChange} />

          <button type="submit">Invia Ordine</button>
        </form> */}
      </div>
    </div>
  );
};

export default Works;
