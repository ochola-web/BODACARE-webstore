// src/pages/Shop.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { products } from "../data/Products";
import ProductCard from "../components/ProductCard";
import "../styles/shop.css";

export default function Shop() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  return (
    <div className="shop-page">
      <h1>Shop Our Products</h1>

      {!user && (
        <div className="login-prompt">
          <p>
            You must <strong>login or sign up</strong> to start shopping.
          </p>
          <div className="prompt-buttons">
            <button onClick={handleLogin} className="auth-btn">Login</button>
            <button onClick={handleSignup} className="auth-btn signup-btn">Sign Up</button>
          </div>
        </div>
      )}

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
