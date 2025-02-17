// import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

// eslint-disable-next-line react/prop-types
const EmailForm = ({ quantity }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("dati inviati");
    // Dati da inviare a EmailJS
    const emailData = {
      user_name: formData.name,
      user_email: formData.email,
      user_address: formData.address,
      bottle_qty: quantity.glass,
      can_qty: quantity.milk,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          alert("Il tuo ordine è stato inviato con successo!");
          setFormData({ name: "", email: "", address: "" });
        },
        (error) => {
          alert("Si è verificato un errore nell'invio dell'ordine.");
        }
      );

    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <h3>Inserisci i tuoi dati</h3>

      <label>Nome:</label>
      <input type="text" name="name" required onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" required onChange={handleChange} />

      <label>Indirizzo:</label>
      <textarea name="address" required onChange={handleChange} />

      <label>Bottiglia 0,5L:</label>
      <input type="number" name="bottle_qty" value={quantity.glass} readOnly />

      <label>Latta 3L:</label>
      <input type="number" name="can_qty" value={quantity.milk} readOnly />

      <button type="submit">Invia Ordine</button>
    </form>
  );
};

export default EmailForm;
