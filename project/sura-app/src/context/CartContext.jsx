import React, { createContext, useState, useContext } from "react";
import { useAuth } from "./AuthContext"; // import AuthContext

// Create CartContext
export const CartContext = createContext();

// CartProvider to wrap around the app
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth(); // get current user

  // Add item to cart
  const addToCart = (product) => {
    if (!user) {
      console.warn("You must be logged in to add items to the cart.");
      return; // non-logged-in users cannot add to cart
    }

    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear cart
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ✅ Custom hook for easier access to cart
export function useCart() {
  return useContext(CartContext);
}
