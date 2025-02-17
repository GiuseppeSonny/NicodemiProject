// import React from "react";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

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
    bottleQty: quantity.vetro,
    canQty: quantity.latta,
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      bottleQty: quantity.vetro,
      canQty: quantity.latta,
    }));
  }, [quantity]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("dati inviati");
    // Dati da inviare a EmailJS
    const emailData = {
      user_name: formData.name,
      user_surname: formData.surname,
      user_email: formData.email,
      user_phone: formData.phone,
      user_address: formData.address,
      user_city: formData.city,
      user_province: formData.province,
      user_zip: formData.zipCode,
      user_bottiglia: formData.bottleQty,
      user_latta: formData.canQty,
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
          setFormData({
            name: "",
            surname: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            province: "",
            zipCode: "",
            bottleQty: quantity.vetro,
            canQty: quantity.latta,
          });
        },
        (error) => {
          alert(
            "Si è verificato un errore nell'invio dell'ordine, si prega di riprovare. In alternativa visitate la nostra pagina 'Contatti' "
          );
        }
      );

    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <h3>Modulo di Acquisto</h3>

      <label>Nome:</label>
      <input type="text" name="name" required onChange={handleChange} />

      <label>Cognome:</label>
      <input type="text" name="surname" required onChange={handleChange} />

      <label>N. Telefonico:</label>
      <input type="tel" name="phone" required onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" required onChange={handleChange} />

      <label>Indirizzo:</label>
      <textarea name="address" required onChange={handleChange} />

      <label>Città:</label>
      <input type="text" name="city" required onChange={handleChange} />

      <label>Provincia:</label>
      <input type="text" name="province" required onChange={handleChange} />

      <label>Codice Postale:</label>
      <input type="tel" name="zipCode" required onChange={handleChange} />

      <label>Bottiglia 0,5L:</label>
      <input
        type="number"
        name="bottleQty"
        value={formData.bottleQty}
        readOnly
      />

      <label>Latta 3L:</label>
      <input type="number" name="canQty" value={formData.canQty} readOnly />

      <button type="submit">Invia Ordine</button>
    </form>
  );
};

export default EmailForm;
