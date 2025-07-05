"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
const TTL = 24 * 60 * 60 * 1000; // 24 h milisekundėmis
const STORAGE_KEY = "cart";

/* --- Provideris --- */
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [pulse, setPulse] = useState(false);

  /* 1️⃣ – įkeliame iš localStorage (tik kliente) */
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const { savedAt, items } = JSON.parse(raw);
      const expired = Date.now() - savedAt > TTL;

      if (!expired && Array.isArray(items)) {
        setCart(items);
      } else {
        localStorage.removeItem(STORAGE_KEY); // pasenę – išmetam
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY); // sugadinti duomenys
    }
  }, []);

  /* 2️⃣ – saugome kaskart, kai cart keičiasi */
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ savedAt: Date.now(), items: cart })
    );
  }, [cart]);

  /* --- helper-funkcijos --- */
  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id);
      return found
        ? prev.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          )
        : [...prev, { ...item }];
    });
    setPulse(true); // suveikia animacijai
    setTimeout(() => setPulse(false), 600); // ~0.6 s
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  const updateQuantity = (id, quantity) =>
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        pulse,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* --- custom hook --- */
export const useCart = () => useContext(CartContext);
