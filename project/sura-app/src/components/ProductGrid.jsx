import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { products } from "../data/Products";
import ProductCard from "./ProductCard";
import "../styles/products.css";

export default function ProductGrid() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(products);

  // SEARCH FUNCTION
  const handleSearch = () => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFiltered(results);
  };

  // HANDLE ADD TO CART
  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/login"); // redirect if not logged in
      return;
    }
    addToCart(product); // add to cart if logged in
  };

  return (
    <section>
      {/* SEARCH BAR */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="products-grid-container">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          ))
        ) : (
          <p className="no-product-msg">No products found.</p>
        )}
      </div>
    </section>
  );
}
