"use client";

import Steps from "@/components/orders/Steps";


export default function Confirmation() {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-[#FAF4EC] shadow-custom rounded-lg my-10">
      <Steps currentStep={3} />

      <h2 className="text-2xl font-bold text-brown mb-4 text-center">Ačiū už užsakymą!</h2>
      <p className="text-gray-700 mb-14 text-center">
        Gavome jūsų užsakymą ir netrukus su jumis susisieksime dėl patvirtinimo.
      </p>
      <a
        href="/menu"
        className="w-full bg-[#D9480F] text-white py-3 rounded-lg inline-block text-center font-semibold hover:bg-[#b53c0c] transition-colors duration-200"
      >
        Grįžti į meniu
      </a>
    </section>
  );
}
