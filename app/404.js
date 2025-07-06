import { FaSkullCrossbones } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-yellow-100 text-gray-800">
      <FaSkullCrossbones className="text-6xl mb-4 text-red-500" />
      <h1 className="text-4xl font-bold mb-2">404 – Puslapis nerastas</h1>
      <p className="mb-6">
        Deja, tokio puslapio nėra. Bet gali grįžti į pradžią!
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
      >
        Grįžti į pradžią
      </a>
    </div>
  );
}
