"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { useCart } from "@/context/cartContext";
import OrderInfo from "@/components/orders/orderInfo";

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

  useEffect(() => {
    // Kai modalas atsidaro – išjungi scroll
    document.body.style.overflow = "hidden";

    // Kai modalas užsidaro – grąžini scroll
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-5">
      <div className="bg-white rounded-lg shadow-lg relative w-full max-w-[700px] mx-4 p-6 sm:p-10 overflow-y-auto max-h-[90vh]">
        {/* Uždarymo mygtukas */}
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <IoClose size={24} />
        </button>

        {/* Produkto pavadinimas ir aprašymas */}
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
          {item.pavadinimas}
        </h2>
        <p className="text-sm lg:text-base text-gray-600">{item.aprasymas}</p>

        {/* Produktas su paveikslėliu */}
        {item.image && (
          <Image
            src={item.image}
            alt={item.pavadinimas}
            width={200}
            height={200}
            sizes="00px"
            className="rounded-lg my-4 mx-auto"
          />
        )}

        {/* Kiekio pasirinkimas su matavimo vienetu */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            className="bg-gray-200 px-3 py-1 rounded-md"
            onClick={() =>
              setQuantity((prev) => Math.max(measureStep, prev - measureStep))
            }
          >
            -
          </button>

          <input
            type="number"
            step={measureStep}
            min={measureStep}
            value={quantity}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              if (!isNaN(value) && value >= measureStep) {
                setQuantity(value);
              }
            }}
            className="w-24 text-center text-base xl:text-lg font-semibold border border-gray-300 rounded-md py-1 appearance-none hide-number-arrows"
          />

          <span className="text-base">{item.matavimo_vienetas || "vnt."}</span>

          <button
            className="bg-gray-200 px-3 py-1 rounded-md"
            onClick={() => setQuantity((prev) => prev + measureStep)}
          >
            +
          </button>
        </div>

        {/* Pridėti į krepšelį mygtukas */}
        <button
          className="text-base xl:text-xl w-full bg-outrageous-orange-400 text-white py-2 rounded-lg mt-4 hover:bg-orange-600"
          onClick={handleAddToCart}
        >
          Į KREPŠELĮ {(item.kaina * quantity).toFixed(2)} €
        </button>
        <OrderInfo />
      </div>
    </div>
  );
}
