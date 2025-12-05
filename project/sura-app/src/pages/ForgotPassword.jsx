// src/pages/ForgotPassword.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/auth.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    // Here you would call your backend to send a reset code
    // For now we simulate success:
    toast.success("Reset code sent! Check your email.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Reset Password</h2>

      <form onSubmit={handleReset} className="auth-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="auth-btn">
          Send Reset Code
        </button>
      </form>

      <p className="auth-links">
        Remember your password? <Link className="link" to="/login">Login</Link>
      </p>
    </div>
  );
}
