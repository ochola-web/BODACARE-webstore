// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load logged-in user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Signup function
  const signup = ({ name, email, password, role = "user" }) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email is already registered (case-insensitive)
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: "Email already registered" };
    }

    // Add new user
    const newUser = { name, email, password, role }; // role can be 'admin' or 'user'
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true, message: "Signup successful! Please login." };
  };

  // Login function
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user (case-insensitive email)
    const foundUser = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!foundUser) return { success: false, message: "Invalid email or password" };

    const { name, role } = foundUser;
    const currentUser = { name, email, role };
    setUser(currentUser);
    localStorage.setItem("user", JSON.stringify(currentUser));

    return { success: true, user: currentUser };
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using AuthContext
export const useAuth = () => useContext(AuthContext);
