// src/pages/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/auth.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Small delay helper for toast visibility
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      // Call login from AuthContext
      const result = login(email, password);

      if (result.success && result.user) {
        const role = result.user.role || "user";
        toast.success(`Welcome back${role === "admin" ? ", Admin!" : "!"}`);

        // Wait a bit so toast is visible before navigating
        await delay(300);

        // Navigate based on role
        if (role === "admin") navigate("/admin");
        else navigate("/shop");
      } else {
        toast.error(result.message || "Invalid email or password");
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
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="auth-links">
        Forgot your password?{" "}
        <Link className="link" to="/forgot-password">
          Reset here
        </Link>
      </p>
      <p className="auth-links">
        Don't have an account?{" "}
        <Link className="link" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
