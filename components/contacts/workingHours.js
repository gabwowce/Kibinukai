import { FaClock } from "react-icons/fa";

export default function WorkingHours() {
  return (

    <div className="bg-cream shadow-xl p-6 rounded-3xl text-center w-80">
      <div className="flex justify-center mb-3">
        <FaClock className="text-[#5A2D0C]" size={32} />
      </div>
      <h3 className="font-bold text-[#5A2D0C] text-lg">Kavinės darbo laikas</h3>
      <div className="px-16">
        <p className="mt-2 text-gray-800 leading-relaxed font-medium flex flex-col justify-center">
            <span className="block text-left">I-V <b>11:00-19:00</b></span>
            <span className="block text-left">VI <b>10:00-15:00</b></span>
            <span className="block font-semibold text-left">VII Nedirbame</span>
        </p>
      </div>
      
    </div>
  );
}
