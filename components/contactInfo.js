import {FaEnvelope, FaPhone, FaMapMarkerAlt   } from "react-icons/fa";


export default function ContactInfo({white, className, bigIcons, bigText}){
    return(
        <div className={className}>
            <div className="flex items-center gap-1 xl:gap-2">
                <FaEnvelope className={`${white ? "icon-white" : "icon"} pointer-events-none`} size={bigIcons ? 47 : 22} />
                <p className={`pt-1 ${bigText ? "text-h4" : "text-sm"} ${ white && "text-white-transparent70"}`}>info@kibinukai.lt</p>
            </div>
            <div className="flex items-center gap-1 xl:gap-2">
                <FaPhone className={`${white ? "icon-white" : "icon"} pointer-events-none`} size={bigIcons ? 45 : 20} />
                <p className={`pt-1 ${bigText ? "text-h4" : "text-sm"} ${white && "text-white-transparent70"}`}>+370 67273782</p>
            </div>
            <div className="flex items-center gap-1 xl:gap-2">
                <FaMapMarkerAlt  className={`${white ? "icon-white" : "icon"} pointer-events-none`} size={bigIcons ? 45 : 20} />
                <p className={`pt-1 ${bigText ? "text-h4" : "text-sm"} ${white && "text-white-transparent70"}`}>Ūmedžių g. 10-2, Vilnius</p>
            </div>
        </div>
    );
}