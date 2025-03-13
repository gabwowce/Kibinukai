"use client";
import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useCart } from "@/context/cartContext";

export default function ProductModal({ item, onClose }) {
  const { addToCart } = useCart();
  const isKg = item.matavimo_vienetas === "kg"; // Patikriname, ar matavimo vienetas yra kg
  const measureStep = isKg ? 0.5 : 1; // Jei kg - 0.5, kitu atveju - 1

  const [quantity, setQuantity] = useState(measureStep);

  if (!item) return null;

  const handleAddToCart = () => {
    addToCart({ ...item, quantity });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
        {/* Uždarymo mygtukas */}
        <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-800" onClick={onClose}>
          <IoClose size={24} />
        </button>

        {/* Produkto pavadinimas ir aprašymas */}
        <h2 className="text-xl font-bold text-gray-900">{item.pavadinimas}</h2>
        <p className="text-sm text-gray-600">{item.aprasymas}</p>

        {/* Produktas su paveikslėliu */}
        {item.image && (
          <Image
            src={item.image}
            alt={item.pavadinimas}
            width={100}
            height={100}
            className="rounded-lg my-4 mx-auto"
            unoptimized
          />
        )}

        {/* Kiekio pasirinkimas su matavimo vienetu */}
        <div className="flex items-center justify-between mt-4">
          <button
            className="bg-gray-200 px-3 py-1 rounded-md"
            onClick={() =>
              setQuantity((prev) => Math.max(measureStep, prev - measureStep))
            }
          >
            -
          </button>
          <span className="text-lg font-semibold">
            {quantity} {item.matavimo_vienetas || "vnt."} {/* Matavimo vienetas */}
          </span>
          <button
            className="bg-gray-200 px-3 py-1 rounded-md"
            onClick={() => setQuantity((prev) => prev + measureStep)}
          >
            +
          </button>
        </div>

        {/* Pridėti į krepšelį mygtukas */}
        <button
          className="w-full bg-outrageous-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-600"
          onClick={handleAddToCart}
        >
          Į KREPŠELĮ {(item.kaina * quantity).toFixed(2)} €
        </button>
      </div>
    </div>
  );
}
