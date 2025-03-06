import React from "react";

export default function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <li className="flex justify-between border-b pb-2 items-center">
      <span>{item.pavadinimas} x {item.quantity}</span>
      <div className="flex items-center">
        <button
          className="bg-gray-200 px-3 py-1 rounded-md"
          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
        >
          -
        </button>
        <span className="px-4">{item.quantity}</span>
        <button
          className="bg-gray-200 px-3 py-1 rounded-md"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
        <button
          className="ml-4 text-red-500 hover:text-red-700"
          onClick={() => removeFromCart(item.id)}
        >
          ✕
        </button>
      </div>
      <span className="font-bold">{(item.kaina * item.quantity).toFixed(2)}€</span>
    </li>
  );
}
