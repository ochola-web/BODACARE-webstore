// src/pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "../styles/auth.css";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminKey, setAdminKey] = useState(""); // Optional secret key for admin signup
  const [loading, setLoading] = useState(false);

  // Small delay helper for toast visibility
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);

    try {
      // Determine role
      let role = "user";
      if (adminKey === "SUPERSECRET") role = "admin";

      // Call signup from AuthContext
      const result = signup({ name, email, password, role });

      if (result.success) {
        toast.success(
          `Signup successful! Please login to continue.${role === "admin" ? " (Admin account)" : ""}`
        );

        // Delay so toast is visible
        await delay(300);

        // Redirect to login page
        navigate("/login");
      } else {
        toast.error(result.message || "Signup failed!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSignup} className="auth-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Admin Key (optional)"
          value={adminKey}
          onChange={(e) => setAdminKey(e.target.value)}
        />
        <button type="submit" className="auth-btn signup-btn" disabled={loading}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      <p className="auth-links">
        Already have an account? <Link className="link" to="/login">Login</Link>
      </p>
    </div>
  );
}
