import { useState } from "react";
/* import emailjs from "emailjs-com"; */

const EmailForm = ({ quantity }) => {
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

    // Dati da inviare a EmailJS
    const emailData = {
      user_name: formData.name,
      user_email: formData.email,
      user_address: formData.address,
      bottle_qty: quantity.vetro,
      can_qty: quantity.latte,
    };

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(() => {
        alert("Il tuo ordine è stato inviato con successo!");
        setFormData({ name: "", email: "", address: "" });
      })
      .catch(() => {
        alert("Si è verificato un errore nell'invio dell'ordine.");
      });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Inserisci i tuoi dati</h3>

      <label>Nome:</label>
      <input type="text" name="name" required onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" required onChange={handleChange} />

      <label>Indirizzo:</label>
      <textarea name="address" required onChange={handleChange} />

      <label>Bottiglia 0,5L:</label>
      <input type="number" name="bottle_qty" value={quantity.vetro} readOnly />

      <label>Latta 3L:</label>
      <input type="number" name="can_qty" value={quantity.latte} readOnly />

      <button type="submit">Invia Ordine</button>
    </form>
  );
};

export default EmailForm;
