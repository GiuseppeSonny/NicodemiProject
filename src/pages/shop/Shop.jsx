import { useState } from "react";
import styles from "./shop.module.scss";
import EmailForm from "../../componets/emailform/EmailForm.jsx";
import olioPiccolo from "../../assets/images/olio-piccolo.jpg";
import olioGrande from "../../assets/images/olio-grande.jpg";

const Shop = () => {
  // Stato per la quantità dei prodotti
  const [quantity, setQuantity] = useState({ vetro: 0, latta: 0 });

  return (
    <div className={styles.main}>
      <div className={styles.shoptext}>
        <h2>Shop</h2>
        <p>
          Olio extra vergine di oliva estratto in Italia da olive coltivate in
          Italia.
          <br />
          Olio d&apos;oliva di categoria superiore ottenuto direttamente dalle
          olive e <br />
          unicamente mediante processi meccanici. <br />
        </p>
      </div>

      <div className={styles.productsContainer}>
        {/* Prodotto Bottiglia 0,5L */}
        <div className={styles.productCard}>
          <img
            src={olioPiccolo}
            alt="Olio piccolo"
            className={styles.productImage}
          />
          <div className={styles.info}>
            <h3>
              Bottiglia Olio
              <br />
              Extra Vergine di Oliva
              <br />
              Formato 0,5L
            </h3>

            <p>Prezzo: 15€</p>
            <label>Quantità:</label>
            <input
              className={styles.quantityInput}
              type="number"
              min="0"
              value={quantity.vetro}
              onChange={(e) =>
                setQuantity({ ...quantity, vetro: parseInt(e.target.value) })
              }
            />
          </div>
        </div>

        {/* Prodotto Latta 3L */}
        <div className={styles.productCard}>
          <img
            src={olioGrande}
            alt="Olio grande"
            className={styles.productImage}
          />
          <div className={styles.info}>
            <h3>
              Latta Olio
              <br />
              Extra Vergine di Oliva
              <br />
              Formato 3L
            </h3>

            <p>Prezzo: 50€</p>
            <label>Quantità:</label>
            <input
              className={styles.quantityInput}
              type="number"
              min="0"
              value={quantity.latta}
              onChange={(e) =>
                setQuantity({ ...quantity, latta: parseInt(e.target.value) })
              }
            />
          </div>
        </div>
      </div>

      <hr className={styles.dashedline} />

      <EmailForm quantity={quantity} />
    </div>
  );
};

export default Shop;
