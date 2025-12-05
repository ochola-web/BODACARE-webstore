import React, { useState, useEffect } from "react";
import "../styles/newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribers, setSubscribers] = useState([]);

  // Load subscribers from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("subscribers")) || [];
    setSubscribers(stored);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return alert("Please enter your email");

    const newList = [...subscribers, email];
    localStorage.setItem("subscribers", JSON.stringify(newList));
    setSubscribers(newList);

    alert("You have subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-card">
        
        <h2 className="newsletter-title">Stay Updated</h2>
        <p className="newsletter-desc">
          Subscribe to receive offers, promotions, and new spare part updates.
        </p>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="newsletter-btn">Subscribe</button>
        </form>

        <p className="newsletter-count">
          📌 Subscribers: <strong>{subscribers.length}</strong>
        </p>

        <a className="unsubscribe-link" href="/unsubscribe">
          Unsubscribe
        </a>

      </div>
    </section>
  );
}
