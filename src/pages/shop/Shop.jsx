import { useState } from "react";
import styles from "./shop.module.scss";

const Shop = () => {
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
      <div className={styles.shoptext}>
        <h2>SHOP</h2>
        <p className={styles.paragraph}>Olio extra vergine di oliva estratto in Italia da olive coltivate in Italia.
        <br />
        Olio d&apos;oliva di categoria superiore ottenuto direttamente dalle olive e <br />
        unicamente mediate prodotti meccanici. <br /> 
        </p>
      </div>

      <div className={styles.productsContainer}>
        <div className={styles.productCard}>
          <img
            src="src\assets\images\olio-piccolo.jpg"
            alt="Olio piccolo"
            className={styles.productImage}
          />
          <h3>Bottiglia Olio Extra<br/>Vergine di Oliva<br/>Formato 0,5L</h3>
          <p>Prezzo: 15€</p>

          <label>Quantità:</label>
          <input
            className={styles.quantityInput}
            type="number"
            min="0"
            value={quantity.vetro}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className={styles.productCard}>
          <img
            src="src/assets/images/olio-grande.jpg"
            alt="olio grande"
            className={styles.productImage}
          />
          <h3>Latta Olio Extra<br/>Vergine di Oliva<br/>Formato 3L</h3>
          <p>Prezzo: 50€</p>

          <label>Quantità:</label>
          <input
            className={styles.quantityInput}
            type="number"
            min="0"
            value={quantity.latte}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      </div>

      <hr className={styles.dashedline}/>

      <form onSubmit={handleSubmit} className={styles.orderform}>
        <h3>Inserisci i tuoi dati</h3>

        <label>Nome:</label>
        <input  type="text" name="name" required onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" required onChange={handleChange} />

        <label>Indirizzo:</label>
        <textarea name="address" required onChange={handleChange} />

        <button type="submit">Invia Ordine</button>
      </form>
    </div>
  );
};

export default Shop;
