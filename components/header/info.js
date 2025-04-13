
import ContactInfo from "../contactInfo";
import SocialMedia from "../ui/socialMedia";

export default function Info() {
    return (
        <section aria-label="Contact information" className="hidden md:block bg-cream z-50 relative">
            <div className="bg-orange-lighter border-b-2 border-[#FFF5F0] py-3"> 
                <div className="container flex justify-between items-center">
                    <div className="flex items-center justify-start gap-10 font-semibold">
                        <ContactInfo className="flex flex-row gap-4 xl:gap-5"/>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-5">
                        <p className=" hidden xl:block pt-1 text-sm">Sekite naujienas</p>
                        <SocialMedia/>
                    </div>
                </div>
            </div>
        </section>
    );
}
