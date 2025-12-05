import React from "react";
import "../../styles/policies.css";

export default function ShippingPolicy() {
  return (
    <div className="policy-page">
      <h1>Shipping Policy</h1>

      <div className="policy-section">
        <h2>Order Processing</h2>
        <p>Orders are processed within 1-2 business days after payment confirmation.</p>
      </div>

      <div className="policy-section">
        <h2>Shipping Methods</h2>
        <p>We offer standard, express, and same-day delivery depending on your location.</p>
      </div>

      <div className="policy-section">
        <h2>Delivery Time</h2>
        <p>Delivery times vary by location, typically 1-7 business days.</p>
      </div>

      <div className="policy-section">
        <h2>Shipping Fees</h2>
        <p>Shipping fees are calculated at checkout based on your address and delivery method.</p>
      </div>

      <div className="policy-section">
        <h2>Tracking</h2>
        <p>You will receive a tracking number to monitor your shipment status.</p>
      </div>
    </div>
  );
}
