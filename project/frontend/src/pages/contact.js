
import React, { useState } from 'react';
import '../styles/contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can add code to send the form data to your server using fetch API or other methods.

    // For the example, we'll simply show a success message.
    setSuccessMessage(true);
    setErrorMessage(false);

    // You can reset the form after successful submission if needed.
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="containerf">
      <form onSubmit={handleSubmit}>

        
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Submit</button>
      </form>

      {successMessage && <div className="successMessage">Message sent successfully!</div>}
      {errorMessage && <div className="errorMessage">Error sending message. Please try again later.</div>}
    </div>
  );
};

export default ContactForm;

