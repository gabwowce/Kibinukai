export const metadata = {
  title: "Kontaktai - Kibinai Vilniuje",
  description: "Susisiekite su mumis dėl užsakymų ar bendradarbiavimo. Greitas atsakymas, patogus atsiėmimas ir pristatymas visoje Lietuvoje.",
  openGraph: {
    title: "Kontaktai - Kibinukai Vilniuje",
    description: "Sužinokite, kaip su mumis susisiekti dėl užsakymų ir skanios produkcijos įsigijimo. Laukiame jūsų žinučių ir skambučių!",
    url: "https://kibinukai.lt/contacts",
    siteName: "Kibinukai Vilniuje",
    images: [
      {
        url: "/images/contacts.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "lt_LT",
    type: "website",
  },
  alternates: {
    canonical: "https://kibinukai.lt/contacts",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};


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
        <ContactInfo bigText bigIcons className="hidden lg:flex flex-row justify-center gap-20 font-semibold py-20"/>
        
        <div className="flex lg:hidden flex-col md:flex-row justify-between items-center">
          <ContactInfo bigText bigIcons className="flex flex-col lg:flex-row gap-20 font-semibold py-10 md:py-20"/>
          <WorkingHours className="flex flex-col lg:hidden"/>
        </div>
        

        <section className="flex flex-col lg:flex-row gap-20 xl:gap-40 items-center justify-center py-10">
          <WorkingHours className="hidden lg:flex flex-col py-6 px-0"/>

          {/* Kontaktų forma */}
          <div className="w-full lg:w-2/3">
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
