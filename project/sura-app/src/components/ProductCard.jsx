import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "../styles/products.css";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAdd = () => {
    if (!user) {
      toast.info("Please login to add items", { autoClose: 1500 });
      navigate("/login");
      return;
    }

    addToCart(product);
    toast.success(`${product.name} added to cart!`, { autoClose: 1500 });
  };

  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">KSH {product.price}</p>
      <button className="buy-button" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
}
