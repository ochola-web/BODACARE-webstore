// src/pages/admin/AdminDashboard.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../styles/admin.css";

export default function AdminDashboard() {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <NavLink 
            to="/admin" 
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard Home
          </NavLink>

          <NavLink 
            to="/admin/orders" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Orders
          </NavLink>

          <NavLink 
            to="/admin/users" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Users
          </NavLink>

          <NavLink 
            to="/admin/subscribers" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Subscribers
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
