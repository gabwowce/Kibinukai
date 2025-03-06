"use client";

import { createContext, useContext, useState } from "react";

// Sukuriame kontekstą
const CartContext = createContext();

// Konteksto teikėjas (provider)
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Funkcija pridėti prekę į krepšelį
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity } // Vietoj 1 pridedame pasirinktą kiekį
            : cartItem
        );
      } else {
        return [...prevCart, { ...item }];
      }
    });
  };

  // Funkcija pašalinti prekę iš krepšelio
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Funkcija keisti prekės kiekį
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Krepšelio išvalymo funkcija
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Sukuriame hook'ą paprastam duomenų pasiekimui
export function useCart() {
  return useContext(CartContext);
}
