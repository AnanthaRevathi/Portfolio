import React, { useState } from 'react';
import './styles.scss'; // Custom styles

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validation
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    // Reset error if all fields are filled
    setError('');
    alert('Message sent successfully!');
    // Handle form submission (e.g., send data to API or log it)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
