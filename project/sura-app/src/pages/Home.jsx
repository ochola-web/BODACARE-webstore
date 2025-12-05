// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import Newsletter from "../components/NewsLetter";
import "../styles/home.css"; // import the CSS here

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <h1 className="home-title">Featured Products</h1>
      <ProductGrid />
      <Newsletter />
    </div>
  );
}
