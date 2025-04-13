"use client";

import { useRouter } from "next/navigation";
import Steps from "@/components/orders/Steps";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import RadioGroup from "@/components/ui/RadioGroup";

export default function CheckoutForm() {
  const router = useRouter();

  const [orderType, setOrderType] = useState("isankstinis");

  const [deliveryType, setDeliveryType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalShown, setModalShown] = useState(false);
  const [contactType, setContactType] = useState("");

  // Nauji state laukeliai adresui
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [apartment, setApartment] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [errors, setErrors] = useState({});
  const [isShaking, setIsShaking] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = {};
  
    if (!orderType) newErrors.orderType = "Pasirinkite užsakymo tipą";
    if (!deliveryType) newErrors.deliveryType = "Pasirinkite pristatymo būdą";
  
    const nameInput = e.target.elements.namedItem("name").value.trim();
    if (!nameInput) newErrors.name = "Įveskite vardą";
  
    const phoneInput = e.target.elements.namedItem("phone").value.trim();
    if (!phoneInput) newErrors.phone = "Įveskite telefono numerį";
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length > 0) {
      setIsShaking(true); // Triggerinam animaciją
      setTimeout(() => setIsShaking(false), 500); // Po pusės sekundės nuimam klasę
      return;
    }
  
    router.push("/orders/confirmation");
  };
  
  

  const maybeShowModal = (value) => {
    if (!modalShown && (value === "pristatymas" || value === "skubus")) {
      setIsModalOpen(true);
      setModalShown(true);
    }
  };

  return (
    <section className={`max-w-4xl mx-auto p-6 bg-[#FAF4EC] shadow-custom rounded-lg my-10 transition-transform duration-500 ${isShaking ? "animate-shake" : ""}`}>

      <Steps currentStep={2} />

      <button
        onClick={() => router.push("/orders/cart")}
        className="mb-6 text-sm text-[#D9480F] hover:underline"
      >
        ← Grįžti į krepšelį
      </button>

      <h2 className="text-2xl font-bold text-brown mb-6">Kontaktinė forma</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Vardas */}
        <div className="pb-6 border-b border-orange-200">
          <label className="block text-brown mb-1">Vardas</label>
          <input
            type="text"
            name="name"
            className={`w-full border rounded-md px-4 py-2 ${errors.name ? "border-red-500" : ""}`}
            placeholder="Įveskite vardą"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>


        {/* Telefono numeris */}
        <div className="pb-6 border-b border-orange-200">
          <label className="block text-brown mb-1">Telefono numeris</label>
          <input
            type="tel"
            name="phone"
            className={`w-full border rounded-md px-4 py-2 ${errors.phone ? "border-red-500" : ""}`}
            placeholder="+370..."
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>


        {/* El. paštas */}
        <div className="pb-6 border-b border-orange-200">
          <label className="block text-brown mb-1">El. paštas (pasirinktinai)</label>
          <input
            type="email"
            className="w-full border rounded-md px-4 py-2"
            placeholder="mail@example.com"
          />
        </div>

        {/* Kontaktavimo būdas */}
        <div className="pb-6 border-b border-orange-200">
          <RadioGroup
            name="contactType"
            label="Kaip norite, kad susisiektume?"
            value={contactType}
            onChange={(selectedValue) => setContactType(selectedValue)}
            options={[
              { value: "telefonu", label: "Telefonu" },
              { value: "elPastu", label: "El. paštu" },
              { value: "nesvarbu", label: "Nesvarbu" },
            ]}
          />
        </div>

        {/* Užsakymo tipas */}
        <div className="pb-6 border-b border-orange-200">
          <RadioGroup
            name="orderType"
            label="Užsakymo tipas"
            value={orderType}
            onChange={(selectedValue) => {
              setOrderType(selectedValue);
              maybeShowModal(selectedValue);
            }}
            extraContent={
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-[#D9480F] hover:text-[#b53c0c] text-sm"
              >
                Informacija
              </button>
            }
            options={[
              { value: "skubus", label: "Kuo greičiau" },
              { value: "isankstinis", label: "Išankstinis užsakymas" },
            ]}
          />
          {errors.orderType && <p className="text-red-500 text-sm mt-1">{errors.orderType}</p>}
        </div>


        {/* Pristatymo būdas */}
        <div className="pb-6 border-b border-orange-200">
          <RadioGroup
            name="delivery"
            label="Pristatymo būdas"
            value={deliveryType}
            onChange={(selectedValue) => {
              setDeliveryType(selectedValue);
              maybeShowModal(selectedValue);
            }}
            options={[
              { value: "atsiimti", label: "Atsiėmimas Vilniuje, Ūmedžių g. 7" },
              { value: "pristatymas", label: "Pristatymas į namus" },
            ]}
          />
          {errors.deliveryType && <p className="text-red-500 text-sm mt-1">{errors.deliveryType}</p>}
        </div>


        {/* Papildomi adresai tik jei pasirinkta "pristatymas" */}
        {deliveryType === "pristatymas" && (
          <div className="space-y-4 pb-6 border-b border-orange-200 bg-orange-50 border-l-4 border-orange-300 p-4 rounded-md">
            <p className="font-medium text-brown">Pristatymo adresas:</p>

            {/* Miestas */}
            <div>
              <label className="block text-brown mb-1">Miestas</label>
              <input
                type="text"
                required
                className="w-full border rounded-md px-4 py-2"
                placeholder="Vilnius"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            {/* Gatvė */}
            <div>
              <label className="block text-brown mb-1">Gatvė</label>
              <input
                type="text"
                required
                className="w-full border rounded-md px-4 py-2"
                placeholder="Ūmedžių g."
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            {/* Namo ir buto numeris */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-brown mb-1">Namo numeris</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-md px-4 py-2"
                  placeholder="12"
                  value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <label className="block text-brown mb-1">Buto numeris (jei yra)</label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-2"
                  placeholder="45"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                />
              </div>
            </div>

            {/* Pašto kodas */}
            <div>
              <label className="block text-brown mb-1">Pašto kodas (jei žinomas)</label>
              <input
                type="text"
                className="w-full border rounded-md px-4 py-2"
                placeholder="LT-XXXXX"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#D9480F] text-white py-3 rounded-lg font-semibold hover:bg-[#b53c0c] transition-colors duration-200"
          >
            Pateikti užsakymą
          </button>
        </div>

        </form>


      {/* Modal: svarbi info */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <div className="space-y-6">

    {/* Antraštė */}
    <h3 className="text-xl font-extrabold text-[#D9480F] uppercase text-center leading-snug">
      Svarbi informacija prieš užsakant
    </h3>

    {/* Blokai */}
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

    {/* CTA */}
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


    </section>
  );
}
