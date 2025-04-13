import React from "react";

export default function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <li className="flex flex-col md:flex-row justify-between border-b pb-2 md:items-center gap-3">
      <span>{item.pavadinimas}</span>

      <div className="flex items-center justify-end md:justify-center">
        <button
          className="bg-gray-200 px-2 md:px-3 py-0 md:py-1 rounded-md"
          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
        >
          -
        </button>

        {/* Kiekis: centruotas tekstas, fiksuotas plotis */}
        <span className=" w-14 text-center">{item.quantity}</span>

        <button
          className="bg-gray-200 px-2 md:px-3 py-0 md:py-1 rounded-md"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>

        {/* Kaina: lygiuota dešinėje, fiksuotas plotis */}
        <span className="font-bold pl-4 w-20 text-right">
          {(item.kaina * item.quantity).toFixed(2)}€
        </span>

        <button
          className="ml-4 text-red-500 hover:text-red-700"
          onClick={() => removeFromCart(item.id)}
        >
          ✕
        </button>
      </div>
    </li>
  );
}
