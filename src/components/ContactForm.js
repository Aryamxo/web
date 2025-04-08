import React, { useState } from 'react';
import { db, collection, addDoc } from '../config/firebase'; // تأكد من المسار الصحيح
import './ContactForm.css'; // Ensure the correct path is used


function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, "contacts"), {
        name: name,
        email: email,
        message: message,
      });
      alert('Sent!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error  ");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">submit</button>
    </form>
  );
}

export default ContactForm;
