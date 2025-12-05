import React from "react";
import "../styles/shop.css";
import { products } from "../data/Products"; // Import the product data

export default function Products() {
  return (
    <div className="shop-page">
      <h1>Motorcycle Spare Parts</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">Ksh {product.price}</p>
            <button className="buy-button">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}
