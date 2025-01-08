import {FaEnvelope, FaPhone } from "react-icons/fa";
import SocialMedia from "../ui/socialMedia";

export default function Info() {
    return (
            <section aria-label="Contact information" className="hidden md:block bg-lightYellow">
                <div className="bg-lightOrange border-b-2 border-[#FFF5F0] py-3"> 
                    <div className="container flex justify-between items-center">
                        <div className="flex items-center justify-start gap-10 font-semibold">
                            <div className="flex items-center gap-2">
                                <FaEnvelope className="text-primary" size={22} />
                                <p className="pt-1">info@kibinukai.lt</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaPhone className="text-primary" size={20} />
                                <p className="pt-1">+370 67273782</p>
                            </div>
                        </div>
                        <SocialMedia/>
                    </div>
                </div>
                
            </section>
        
    );
}
