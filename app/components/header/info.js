import { FaFacebook, FaInstagram, FaFacebookMessenger, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Info() {
    return (
        <section aria-label="Contact information" className="bg-lightOrange border-b-2 border-white py-4">
            <div className="container flex justify-between items-center">
                <div className="flex items-center justify-start gap-10">
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-foregroundBrown" size={20} />
                        <p>info@kibinukai.lt</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhone className="text-foregroundBrown" size={20} />
                        <p>+37067273782</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <FaFacebook 
                        className="text-foregroundBrown hover:text-foregroundBrownHover transition-colors" 
                        size={30} 
                    />
                    <FaFacebookMessenger 
                        className="text-foregroundBrown hover:text-foregroundBrownHover transition-colors" 
                        size={30} 
                    />
                    <FaInstagram 
                        className="text-foregroundBrown hover:text-foregroundBrownHover transition-colors" 
                        size={30} 
                    />
                </div>
            </div>
        </section>
    );
}
