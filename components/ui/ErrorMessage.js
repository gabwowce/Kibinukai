"use client";

export default function ErrorMessage({ message }) {
  return (
    <div className="container flex flex-col items-center justify-center text-center p-6 bg-red-100 text-red-600 rounded-lg shadow-md ">
      <h2 className="text-lg font-bold">⚠ Klaida</h2>
      <p className="text-base">{message || "Įvyko klaida. Bandykite vėliau."}</p>
    </div>
  );
}
