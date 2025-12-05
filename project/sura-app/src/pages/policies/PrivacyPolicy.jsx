import React from "react";
import "../../styles/policies.css";

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <h1>Privacy Policy</h1>

      <div className="policy-section">
        <h2>Introduction</h2>
        <p>
          At BODACARE-WebStore, your privacy is important. This policy explains how we collect, use, and protect your personal data.
        </p>
      </div>

      <div className="policy-section">
        <h2>Information Collection</h2>
        <p>
          We collect your name, email, phone, address, and payment info to process orders and improve your experience.
        </p>
      </div>

      <div className="policy-section">
        <h2>Use of Information</h2>
        <p>
          Your data is used to process orders, provide customer support, send updates (if opted in), and improve our services.
        </p>
      </div>

      <div className="policy-section">
        <h2>Sharing Information</h2>
        <p>
          We do not sell your data. Trusted service providers may access it for order fulfillment and payment processing.
        </p>
      </div>

      <div className="policy-section">
        <h2>Cookies & Security</h2>
        <p>
          We use cookies to improve your experience. We implement security measures to protect your data.
        </p>
      </div>

      <div className="policy-section">
        <h2>Changes</h2>
        <p>
          We may update this policy from time to time. Continued use of the site means acceptance.
        </p>
      </div>
    </div>
  );
}
