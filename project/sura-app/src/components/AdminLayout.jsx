// src/components/AdminLayout.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../styles/admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <NavLink to="/admin" end>
            Dashboard
          </NavLink>
          <NavLink to="/admin/orders">Orders</NavLink>
          <NavLink to="/admin/users">Users</NavLink>
          <NavLink to="/admin/subscribers">Subscribers</NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <section className="admin-content">
        <Outlet />
      </section>
    </div>
  );
}
