/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./email.module.scss";

const EmailForm = ({ quantity }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
  });

  const [quantities, setQuantities] = useState({
    bottleQty: 0,
    canQty: 0,
  });

  useEffect(() => {
    setQuantities({
      bottleQty: quantity.vetro,
      canQty: quantity.latta,
    });
  }, [quantity]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailData = {
      user_name: formData.name,
      user_surname: formData.surname,
      user_email: formData.email,
      user_phone: formData.phone,
      user_address: formData.address,
      user_city: formData.city,
      user_province: formData.province,
      user_zip: formData.zipCode,
      user_bottiglia: quantities.bottleQty,
      user_latta: quantities.canQty,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Il tuo ordine è stato inviato con successo!");
          setFormData({
            name: "",
            surname: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            province: "",
            zipCode: "",
          });
          setQuantities({
            bottleQty: 0,
            canQty: 0,
          });
        },
        () => {
          alert(
            "Si è verificato un errore nell'invio dell'ordine, si prega di riprovare. In alternativa visitate la nostra pagina 'Contatti'."
          );
        }
      );

    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <h3>Modulo di Acquisto</h3>
      <div className={styles.formContainer}>
        <div className={styles.column}>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />

          <label>Via:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            required
            onChange={handleChange}
          />

          <label>Provincia:</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            required
            onChange={handleChange}
          />

          <label>Bottiglia 0,5L:</label>
          <input
            type="number"
            name="bottleQty"
            value={quantities.bottleQty}
            readOnly
          />
        </div>

        <div className={styles.column}>
          <label>Cognome:</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            required
            onChange={handleChange}
          />

          <label>N. Telefonico:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            required
            onChange={handleChange}
          />

          <label>Città:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            required
            onChange={handleChange}
          />

          <label>Codice Postale:</label>
          <input
            type="tel"
            name="zipCode"
            value={formData.zipCode}
            required
            onChange={handleChange}
          />

          <label>Latta 3L:</label>
          <input
            type="number"
            name="canQty"
            value={quantities.canQty}
            readOnly
          />
        </div>
      </div>

      <button type="submit">Invia Ordine</button>
    </form>
  );
};

export default EmailForm;
