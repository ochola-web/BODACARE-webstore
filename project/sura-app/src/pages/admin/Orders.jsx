// src/pages/admin/Orders.jsx
import React, { useState, useEffect } from "react";
import { products } from "../../data/Products"; // <-- correct path from admin folder
import "../../styles/admin.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="admin-content">
      <h2>All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}<br/>{order.email}</td>
                <td>
                  {order.items.map((item) => {
                    const product = products.find(p => p.id === item.productId);
                    return <div key={item.productId}>{product?.name} x {item.quantity}</div>
                  })}
                </td>
                <td>KSH {order.total}</td>
                <td>{order.status}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
