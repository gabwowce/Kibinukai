import {FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactInfo(){
    return(
        <>
         <div className="flex items-center gap-2">
            <FaEnvelope className="text-brown" size={22} />
            <p className="pt-1">info@kibinukai.lt</p>
        </div>
        <div className="flex items-center gap-2">
            <FaPhone className="text-brown" size={20} />
            <p className="pt-1">+370 67273782</p>
        </div>
        </>
    );
}