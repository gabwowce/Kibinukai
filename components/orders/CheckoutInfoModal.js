"use client";

import Modal from "@/components/ui/Modal";

export default function CheckoutInfoModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">

        <h3 className="text-xl font-extrabold text-[#D9480F] uppercase text-center leading-snug">
          Svarbi informacija prieš užsakant
        </h3>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md shadow-sm space-y-2">
          <p className="text-base font-semibold text-red-700">🔴 Tos pačios (darbo) dienos užsakymai</p>
          <p className="text-sm text-red-800 leading-relaxed">
            Užsakymą pateikite iki <strong className="text-red-900">12:00 val.</strong>. 
            Paruošimas trunka nuo <strong className="text-red-900">2,5 val.</strong> ir priklauso nuo užimtumo bei kiekio.
          </p>
        </div>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-md shadow-sm space-y-2">
          <p className="text-base font-semibold text-orange-700">🟠 Savaitgalio užsakymai</p>
          <p className="text-sm text-orange-800 leading-relaxed">
            Užsakymus pateikite iki <strong className="text-orange-900">penktadienio 10:00–11:00 val.</strong>.<br />
            Pristatymas ir atsiėmimas nuo <strong className="text-orange-900">šeštadienio 10:00 val.</strong>
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm space-y-2">
          <p className="text-base font-semibold text-yellow-700">🟡 Šimtalapių ir šakočių gamyba</p>
          <p className="text-sm text-yellow-800 leading-relaxed">
            Gamyba trunka <strong className="text-yellow-900">2–4 darbo dienas</strong>.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-md shadow-sm space-y-2">
          <p className="text-base font-semibold text-green-700">✅ Greiti užsakymai?</p>
          <p className="text-sm text-green-800 leading-relaxed">
            Rekomenduojame naudotis:{" "}
            <a
              className="text-[#D9480F] underline font-semibold"
              href="https://www.negaminsiu.lt"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.negaminsiu.lt
            </a>{" "}
            arba programėle <strong>Bolt</strong>.
          </p>
        </div>

      </div>
    </Modal>
  );
}
