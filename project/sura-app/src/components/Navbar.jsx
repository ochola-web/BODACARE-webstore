// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [policiesDropdownOpen, setPoliciesDropdownOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setPoliciesDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMenuOpen(false);
    setPoliciesDropdownOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setPoliciesDropdownOpen(false);
  };

  const handleProtectedClick = (path) => {
    if (!user) navigate("/login");
    else navigate(path);
    closeMenu();
  };

  const isPoliciesActive = location.pathname.startsWith("/policy");

  return (
    <nav className={`navbar ${user?.role === "admin" ? "admin-navbar" : ""}`}>
      <div className="logo">
        <NavLink to="/" onClick={closeMenu}>
          BODACARE-WebStore
        </NavLink>
      </div>

      {/* Regular user links */}
      {!isAdminRoute && (
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <span className={`nav-link ${location.pathname === "/shop" ? "active" : ""}`} onClick={() => handleProtectedClick("/shop")}>Shop</span>
          <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Products</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          <span className={`nav-link ${location.pathname === "/cart" ? "active" : ""}`} onClick={() => handleProtectedClick("/cart")}>Cart</span>
          <span className={`nav-link ${location.pathname === "/checkout" ? "active" : ""}`} onClick={() => handleProtectedClick("/checkout")}>Checkout</span>
          <NavLink to="/blog" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink>

          {/* Policies Dropdown */}
          <div className={`dropdown ${policiesDropdownOpen ? "open" : ""}`}>
            <span className={`dropdown-label ${isPoliciesActive ? "active" : ""}`} onClick={() => setPoliciesDropdownOpen(!policiesDropdownOpen)}>
              Policies ▾
            </span>
            <div className="dropdown-content">
              <NavLink to="/policy/privacy" onClick={closeMenu}>Privacy Policy</NavLink>
              <NavLink to="/policy/shipping" onClick={closeMenu}>Shipping Policy</NavLink>
              <NavLink to="/policy/returns" onClick={closeMenu}>Return Policy</NavLink>
              <NavLink to="/policy/terms" onClick={closeMenu}>Terms & Conditions</NavLink>
            </div>
          </div>

          {!user ? (
            <>
              <NavLink to="/login" className="auth-btn" onClick={closeMenu}>Login</NavLink>
              <NavLink to="/signup" className="auth-btn signup-btn" onClick={closeMenu}>Sign Up</NavLink>
            </>
          ) : (
            <button className="auth-btn logout-btn" onClick={handleLogout}>Logout</button>
          )}
        </div>
      )}

      {/* Admin route top nav */}
      {isAdminRoute && user?.role === "admin" && (
        <div className="nav-links">
          <button className="auth-btn logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      )}

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}
