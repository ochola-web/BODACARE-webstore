import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/Products"; // Import your actual products array

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-20">Product not found</p>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img
        src={product.img}
        className="w-full rounded-xl shadow"
        alt={product.name}
      />
      <div>
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description || "No description available."}</p>
        <p className="text-3xl text-blue-600 font-bold mb-6">KSH {product.price}</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
