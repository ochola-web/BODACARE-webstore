import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        <p>No items in your cart yet.</p>
      </div>
    );
  }

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>KSH {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2>Total: KSH {total}</h2>
      <button className="clear-btn" onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}
