// src/pages/Contact.jsx
import React from "react";
import "../styles/contact.css"; // ✅ correct path

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your Name" />
        </label>

        <label>
          Email:
          <input type="email" placeholder="Your Email" />
        </label>

        <label>
          Message:
          <textarea placeholder="Your Message"></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
