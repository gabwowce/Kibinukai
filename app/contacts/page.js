
import HeroSecondary from "@/components/heroSecondary";
import ContactInfo from "@/components/contactInfo";
import BubbleBackground from "../../components/decoration/bubbleBackground";
import Button from "@/components/ui/button/button";
import WorkingHours from "@/components/contacts/workingHours";


export default function Contacts() {
  return (
    <main className="overflow-hidden relative">
      <div className="container mx-auto px-4">
        {/* <BubbleBackground left/> */}
        <HeroSecondary
          title="Kontaktai"
          breadcrumb={[
            { label: "Pagrindinis", href: "/" },
            { label: "Kontaktai", href: "/contacts" }
          ]}
        />
        <BubbleBackground left/>
        <BubbleBackground right/>
        <ContactInfo bigText bigIcons className="flex flex-row justify-center gap-20 font-semibold py-20"/>

        <section className="flex flex-col md:flex-row gap-40 items-center justify-center py-10">
          <WorkingHours/>

          {/* Kontaktų forma */}
          <div className=" w-2/3">
            <h2 className="text-2xl font-bold text-brown font-display mb-4">Susisiekite</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Vardas" className="bg-gray-200 w-full p-3 border rounded-xl" />
              <input type="email" placeholder="El. Paštas" className="bg-gray-200 w-full p-3 border rounded-xl" />
              <textarea placeholder="Jūsų žinutė" className="bg-gray-200 w-full p-3 border rounded-xl h-32"></textarea>
              <Button variant = 'smallVersion' fullWidth>SIŲSTI</Button>

            </form>
          </div>
        </section>

        {/* Google Maps */}
        <section className="w-full flex justify-center py-10 lg:py-20">
          <iframe
            className="w-full h-64 rounded-2xl shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.14841444289364!2d25.20864!3d54.6412842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd935f30a0f129%3A0x1d754f04e45d58a4!2s%C5%AAm%C4%97d%C5%BEi%C5%B3%20g.%2012A%2C%20Vilnius%2C%2002302%20Vilniaus%20m.%20sav.!5e0!3m2!1sen!2slt!4v1709000000000!5m2!1sen!2slt&z=10"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </div>
      
    </main>
  );
}
