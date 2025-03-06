import React from "react";
import CartItem from "./cartItem";

export default function Cart({ cart, updateQuantity, removeFromCart }) {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-[#FAF4EC] shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-bold text-[#5A2D0C] mb-4">Jūsų krepšelis</h2>

      {cart.length > 0 ? (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </ul>

          <button
            className="w-full bg-[#D9480F] text-white py-3 rounded-lg mt-6"
            onClick={() => alert("Užsakymas pateiktas!")}
          >
            Pateikti užsakymą
          </button>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Jūsų krepšelis tuščias.</p>
          <a href="/menu" className="mt-4 inline-block bg-[#D9480F] text-white py-2 px-6 rounded-lg">
            Grįžti į meniu
          </a>
        </div>
      )}
    </section>
  );
}
