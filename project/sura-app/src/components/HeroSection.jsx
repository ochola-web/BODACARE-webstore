import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import '../styles/hero.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleClick = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate("/shop");
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Your Modern Web Store</h1>
        <p>Discover quality products at unbeatable prices. Shop now and save more!</p>
        <button onClick={handleClick}>Shop Now</button>
      </div>
    </section>
  );
}
