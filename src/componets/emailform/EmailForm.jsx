import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./email.module.scss";

// eslint-disable-next-line react/prop-types
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
    console.log("Dati inviati");

    const emailData = {
      user_name: formData.name,
      user_surname: formData.surname,
      user_email: formData.email,
      user_phone: formData.phone,
      user_address: formData.address,
      bottle_qty: quantity.vetro,
      can_qty: quantity.latta,
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
    <form onSubmit={sendEmail} className={styles.form}>
      <h3>Modulo di Acquisto</h3>

      <label>Nome:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        required
        onChange={handleChange}
      />

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

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        required
        onChange={handleChange}
      />

      <label>Indirizzo:</label>
      <textarea
        name="address"
        value={formData.address}
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

      <label>Provincia:</label>
      <input
        type="text"
        name="province"
        value={formData.province}
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

      <label>Bottiglia 0,5L:</label>
      <input type="number" name="bottle_qty" value={quantity.vetro} readOnly />

      <label>Latta 3L:</label>
      <input type="number" name="can_qty" value={quantity.latte} readOnly />

      <button type="submit">Invia Ordine</button>
    </form>
  );
};

export default EmailForm;
