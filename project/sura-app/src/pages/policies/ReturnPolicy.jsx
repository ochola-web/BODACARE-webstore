import React from "react";
import "../../styles/policies.css";

export default function ReturnPolicy() {
  return (
    <div className="policy-page">
      <h1>Return Policy</h1>

      <div className="policy-section">
        <h2>Eligibility</h2>
        <p>Items can be returned within 14 days of delivery if they are unused and in original packaging.</p>
      </div>

      <div className="policy-section">
        <h2>Process</h2>
        <p>Contact customer support to initiate a return and receive a return authorization number.</p>
      </div>

      <div className="policy-section">
        <h2>Refunds</h2>
        <p>Refunds are issued to the original payment method within 5-7 business days after receiving the returned item.</p>
      </div>

      <div className="policy-section">
        <h2>Exchanges</h2>
        <p>Exchanges are possible if the requested product is in stock. Otherwise, a refund will be issued.</p>
      </div>
    </div>
  );
}
