import React from "react";
import "../styles/checkout.css"; // ✅ make sure the path is correct

export default function Checkout() {
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <form className="checkout-form">
        <div className="form-group">
          <label>
            Full Name:
            <input type="text" placeholder="Your Name" />
          </label>
        </div>

        <div className="form-group">
          <label>
            Email:
            <input type="email" placeholder="Your Email" />
          </label>
        </div>

        <div className="form-group">
          <label>
            Shipping Address:
            <textarea placeholder="Your Address"></textarea>
          </label>
        </div>

        <div className="form-group">
          <label>
            Payment Method:
            <select>
              <option value="mpesa">M-Pesa</option>
              <option value="card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </label>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
