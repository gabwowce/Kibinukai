"use client";

import { useCart } from "@/context/cartContext";
import Cart from "@/components/orders/cart";

export default function OrdersPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
  );
}
