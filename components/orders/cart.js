"use client";
import React from "react";
import CartItem from "./cartItem";
import { useRouter } from "next/navigation";

import Steps from "@/components/orders/Steps"; // arba "@/components/Steps" pagal tavo struktūrą



export default function Cart({ cart, updateQuantity, removeFromCart }) {
  const router = useRouter();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.kaina * item.quantity,
    0
  );

  return (
    <section className="max-w-4xl mx-auto p-6 bg-[#FAF4EC] shadow-custom rounded-lg my-10">
      <Steps currentStep={1} /> {/* 👈 Pridedame žingsnius viršuje */}

      <h2 className="text-2xl font-bold text-brown mb-4">Jūsų krepšelis</h2>

      {cart.length > 0 ? (
        <>
          <ul className="space-y-4 mb-6">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>

          <div className="flex justify-between items-center mb-6 text-lg font-semibold text-brown">
            <span>Viso:</span>
            <span>{totalAmount.toFixed(2)} €</span>
          </div>

          <p className="text-sm text-gray-600 mb-3 text-center">
            Užpildykite kontaktinę formą — mes patikslinsime jūsų užsakymą telefonu ar el. paštu.
          </p>

          <button
            className="w-full bg-[#D9480F] text-white py-3 rounded-lg text-center"
            onClick={() => router.push("/orders/checkout")}
          >
            <span className="block font-semibold">Užpildyti kontaktinę formą</span>
          </button>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Jūsų krepšelis tuščias.</p>
          
          <button
            className="mt-4 inline-block w-full bg-[#D9480F] text-white py-3 px-6 rounded-lg text-center font-semibold"
            onClick={() => router.push("/menu")}
          >
            Grįžti į meniu
          </button>
        </div>

      )}
    </section>
  );
}
