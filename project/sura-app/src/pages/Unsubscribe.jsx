import React, { useState } from "react";
import "../styles/unsubscribe.css";

export default function Unsubscribe() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleUnsubscribe = (e) => {
    e.preventDefault();

    const currentSubscribers = JSON.parse(localStorage.getItem("subscribers") || "[]");

    if (!email) {
      setMsg("Please enter your email.");
      return;
    }

    if (!currentSubscribers.includes(email)) {
      setMsg("This email is not subscribed.");
      return;
    }

    const updated = currentSubscribers.filter((item) => item !== email);
    localStorage.setItem("subscribers", JSON.stringify(updated));

    setMsg("You have successfully unsubscribed.");
    setEmail("");
  };

  return (
    <div className="unsubscribe-container">
      <h2>Unsubscribe From Newsletter</h2>
      <p>We're sorry to see you go. Enter your email to unsubscribe.</p>

      <form className="unsubscribe-form" onSubmit={handleUnsubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="unsubscribe-input"
        />
        <button className="unsubscribe-btn">Unsubscribe</button>
      </form>

      {msg && <p className="unsubscribe-message">{msg}</p>}
    </div>
  );
}
