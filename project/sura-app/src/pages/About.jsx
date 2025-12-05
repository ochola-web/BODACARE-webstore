import React from "react";
import "../styles/about.css"; // ✅ make sure the path is correct

export default function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>

      <div className="about-section">
        <p>
          Welcome to BODACARE-WebStore! We are committed to providing high-quality products
          and an exceptional shopping experience.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver quality products at affordable prices, ensuring
          customer satisfaction at every step.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be the most trusted online store, providing convenience, quality, and
          value to all our customers.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Team</h2>
        <p>
          Our dedicated team works tirelessly to source the best products and provide
          outstanding customer support.
        </p>
      </div>
    </div>
  );
}
