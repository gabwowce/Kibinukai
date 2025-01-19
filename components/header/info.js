
import ContactInfo from "../contactInfo";
import SocialMedia from "../ui/socialMedia";

export default function Info() {
    return (
            <section aria-label="Contact information" className="hidden md:block bg-cream">
                <div className="bg-orange-lighter border-b-2 border-[#FFF5F0] py-3"> 
                    <div className="container flex justify-between items-center">
                        <div className="flex items-center justify-start gap-10 font-semibold">
                            <ContactInfo/>
                        </div>
                        <SocialMedia/>
                    </div>
                </div>
                
            </section>
        
    );
}
