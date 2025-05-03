"use client";
import dynamic from 'next/dynamic';
import { useRouter } from "next/navigation";
import Steps from "@/components/orders/Steps";
import RadioGroup from "@/components/ui/RadioGroup";
const CheckoutInfoModal = dynamic(() => import('@/components/orders/CheckoutInfoModal'), { ssr: false });
import { useCart } from '@/context/cartContext';
import ReCAPTCHA from "react-google-recaptcha";

const ReactDatePicker = dynamic(() => import("react-datepicker"), { ssr: false });

import "react-datepicker/dist/react-datepicker.css";
import "@/style/datepicker-custom.css";

import UniversalInput from "@/components/forms/UniversalInput";
import UniversalTextarea from "@/components/forms/UniversalTextarea";
import { useRef, useState, useEffect } from "react";


const AddressForm = dynamic(() => import('@/components/forms/AddressForm'), {
  ssr: false,
  loading: () => <p>Kraunama forma...</p>,
});




export default function CheckoutForm() {
  const router = useRouter();
  const { clearCart, cart } = useCart();

  const [orderType, setOrderType] = useState("isankstinis");

  const [deliveryType, setDeliveryType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalShown, setModalShown] = useState(false);
  const [contactType, setContactType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);
  

  // Nauji state laukeliai adresui
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [apartment, setApartment] = useState("");
  const [addressNotes, setAddressNotes] = useState("");


  const [errors, setErrors] = useState({});
  const [isShaking, setIsShaking] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dots, setDots] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const newErrors = {};
  
    // Griebiam reikalingus laukus
    const nameInput = e.target.elements.namedItem("name").value.trim();
    const surnameInput = e.target.elements.namedItem("surname").value.trim();
    const phoneInput = e.target.elements.namedItem("phone").value.trim();
    const emailInput = e.target.elements.namedItem("email")?.value.trim();
    const commentsInput = e.target.elements.namedItem("comments")?.value;
  
    // Tikrinam: baziniai laukeliai
    if (!nameInput) newErrors.name = "Įveskite vardą";
    if (!phoneInput) newErrors.phone = "Įveskite telefono numerį";
    if (!orderType) newErrors.orderType = "Pasirinkite užsakymo tipą";
    if (!deliveryType) newErrors.deliveryType = "Pasirinkite pristatymo būdą";
  
    // Tikrinam: adresas, jei pasirinktas pristatymas
    if (deliveryType === "pristatymas") {
      if (!city.trim()) newErrors.city = "Įveskite miestą";
      if (!street.trim()) newErrors.street = "Įveskite gatvę";
      if (!houseNumber.trim()) newErrors.houseNumber = "Įveskite namo numerį";
    }
  
    // Jei yra bent viena klaida — stabdom siuntimą
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setIsSubmitting(false); // būtinai, kad neužstrigtų submit'inimas
      return;
    }
  
    // Surink formos duomenis
    const deliveryDateInput = selectedDate ? selectedDate.toISOString().split("T")[0] : "";
    const deliveryTimeInput = selectedTime ? selectedTime.toTimeString().split(" ")[0].substring(0, 5) : "";
  
    const formData = {
      name: nameInput,
      phone: phoneInput,
      email: emailInput,
      contactType,
      orderType,
      deliveryType,
      address: deliveryType === "pristatymas"
        ? {
            city,
            street,
            houseNumber,
            apartment,
            addressNotes,
          }
        : undefined,
      deliveryDate: orderType === "isankstinis" && (deliveryDateInput || deliveryTimeInput)
        ? `${deliveryDateInput} ${deliveryTimeInput}`
        : undefined,
      comments: commentsInput,
      cartItems: cart,
      surname: surnameInput
    };
  
    try {
      if (!recaptchaToken) {
        alert("Patvirtinkite, kad nesate robotas");
        setIsSubmitting(false);
        return;
      }
    
      const response = await fetch(`/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...formData, recaptchaToken })
      });
    
      const result = await response.json();
  
    
      if (result.success) {
        e.target.reset();
        clearCart();
        localStorage.removeItem("cart");
        router.push("/orders/confirmation");
      } else {
        alert("Nepavyko išsiųsti užsakymo. Klaida: " + result.error);
      }
    } catch (error) {
      console.error("❌ Error sending email:", error);
      alert("Įvyko klaida siunčiant užsakymą: " + error.message);
    }
     finally {
      setIsSubmitting(false); // visada pabaigoje
    }
  };
  
  
  useEffect(() => {
    if (isSubmitting) {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
      }, 500); // Kas 0.5 sekundės pridės tašką
  
      return () => clearInterval(interval); // Išvalom intervalą kai baigiam siuntimą
    } else {
      setDots('');
    }
  }, [isSubmitting]);
  
  

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

      <h2 className=" font-bold text-brown mb-6 text-l md:text-xl">Kontaktinė forma</h2>

      <form onSubmit={handleSubmit} className="space-y-6">


        {/* Vardas */}
        <UniversalInput
          label="Vardas"
          name="name"
          value={name}
          onChange={(value) => {
            setName(value);
            if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
          }}
          placeholder="Įveskite vardą"
          error={errors.name}
        />

        <UniversalInput
          name="surname"
          value={surname}
          onChange={() => {}}
          h
        />


        {/* Telefono numeris */}
        <UniversalInput
          label="Telefono numeris"
          name="phone"
          value={phone}
          onChange={(value) => {
            setPhone(value);
            if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
          }}
          placeholder="+370..."
          error={errors.phone}
          type="tel"
        />



        {/* El. paštas */}
        <UniversalInput
          label="El. paštas (pasirinktinai)"
          name="email"
          value={email}
          onChange={(value) => setEmail(value)}
          placeholder="mail@example.com"
          type="email"
        />


        {/* Komentarai (neprivaloma) */}
        <UniversalTextarea
          label="Pastabos"
          name="comments"
          value={comments}
          onChange={(value) => setComments(value)}
          placeholder="Jūsų pastabos..."
        />



        {/* Kontaktavimo būdas */}
        <div className="pb-6 border-b border-orange-200 text-sm md:text-base">
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
        <div className="pb-6 border-b border-orange-200 text-sm md:text-base">
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

        {/* Pageidaujama pristatymo data — rodoma tik jei išankstinis užsakymas */}
        {orderType === "isankstinis" && (
          <div className="pb-6 border-b border-orange-200 text-sm md:text-base">
            <label className="block text-brown mb-1">Pageidaujama pristatymo data ir laikas</label>
            <div className="flex space-x-4">
              {/* Datos pasirinkimas */}
              <ReactDatePicker 
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="Pasirinkite datą"
                className="w-full border rounded-md px-4 py-2 myDatePicker" 
                // myDatePicker yra custom klasių pavadinimas,
                // kurį aprašysite .css faile
                minDate={new Date()}
              />
              {/* Laiko pasirinkimas (tik 24 val. formatas) */}
              <ReactDatePicker 
                selected={selectedTime}
                onChange={(time) => setSelectedTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Laikas"
                dateFormat="HH:mm"
                timeFormat="HH:mm"
                placeholderText="Pasirinkite laiką"
                className="w-full border rounded-md px-4 py-2 myDatePicker"
              />
            </div>
          </div>
        )}





        {/* Pristatymo būdas */}
        <div className="pb-6 border-b border-orange-200 text-sm md:text-base">
          <RadioGroup
            name="delivery"
            label="Pristatymo būdas"
            value={deliveryType}
            onChange={(selectedValue) => {
              setDeliveryType(selectedValue);
              maybeShowModal(selectedValue);
            }}
            options={[
              { value: "atsiimti", label: "Atsiėmimas Vilniuje, Ūmedžių g. 10-2" },
              { value: "pristatymas", label: "Pristatymas į namus" },
            ]}
          />
          {errors.deliveryType && <p className="text-red-500 text-sm mt-1">{errors.deliveryType}</p>}
        </div>


        {/* Papildomi adresai tik jei pasirinkta "pristatymas" */}
        {deliveryType === "pristatymas" && (
          <AddressForm
            city={city}
            setCity={(value) => {
              setCity(value);
              if (errors.city) setErrors(prev => ({ ...prev, city: undefined }));
            }}
            street={street}
            setStreet={(value) => {
              setStreet(value);
              if (errors.street) setErrors(prev => ({ ...prev, street: undefined }));
            }}
            houseNumber={houseNumber}
            setHouseNumber={(value) => {
              setHouseNumber(value);
              if (errors.houseNumber) setErrors(prev => ({ ...prev, houseNumber: undefined }));
            }}
            apartment={apartment}
            setApartment={setApartment}
            addressNotes={addressNotes}
            setAddressNotes={setAddressNotes}
            errors={errors}
          />
        )}


        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
          onChange={(token) => setRecaptchaToken(token)}
        />


        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#D9480F] text-white py-3 rounded-lg font-semibold transition-colors duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-[#b53c0c]"
            }`}
          >
            {isSubmitting ? `Siunčiama${dots}` : "Pateikti užsakymą"}
          </button>


        </div>

        </form>


      {/* Modal: svarbi info */}
      <CheckoutInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />


    </section>
  );
}
