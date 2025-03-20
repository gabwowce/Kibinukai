import ReviewCard from "@/components/about/ReviewCard";
import HeroSecondary from "@/components/heroSecondary";
import Image from "next/image";
import { Suspense } from "react";
import dynamic from "next/dynamic";


import DecorationFigure from "@/components/about/decorationFigure";
import AboutArticle from "@/components/about/aboutArticle";
import SectionTitle from "@/components/SectionTitle";

import kibinai1 from "@/public/assets/about/kibinai1.png";
import kibinai2 from "@/public/assets/about/kibinai2.png";
import kibinai3 from "@/public/assets/about/kibinai3.png";

// ✅ Dinaminis importavimas su Lazy Loading
const GallerySection = dynamic(() => import("@/components/about/GallerySection"), {
  loading: () => <p className="text-center text-lg">Kraunama galerija...</p>,
});

export default function About() {
  return (
    <main>
      <div className="container">
        <HeroSecondary 
          title="Apie mus" 
          breadcrumb={[
            { label: "Pagrindinis", href: "/" },
            { label: "Apie mus", href: "/about" }
          ]}
        />
        <section className="py-0 lg:py-10 grid md:grid-cols-2 gap-8">
          <AboutArticle 
            highlightedWord="Kibinai" 
            title="– mūsų tradicija ir meistriškumas" 
            body="Jau daugiau nei 10 metų džiuginame savo klientus išskirtiniais kibinais, kuriuose tradicija dera 
            su šiuolaikiniais skoniais. Nuo pirmosios dienos siekiame aukščiausios kokybės tiek gaminiuose, 
            tiek aptarnavime. Atsižvelgdami į klientų norus, nuolat plečiame savo asortimentą – siūlome naujus įdarus, 
            bendradarbiaujame su patikimais partneriais, tokiais kaip Arti Food, bei tobuliname paslaugas."
          />
          <DecorationFigure className="justify-end" img={kibinai1} alt=""/>
          <DecorationFigure className="justify-start" img={kibinai2} alt=""/>
          <AboutArticle 
            highlightedWord="Lankstumas" 
            title="– mūsų stiprybė" 
            body="Galime paruošti nuo vieno kibino iki kelių tūkstančių vienam užsakymui. 
            Užtikriname patogų atsiėmimo ar pristatymo laiką – dirbame praktiškai 7/24, 
            kad jūsų užsakymai būtų paruošti laiku. Jei reikia, pasirūpiname ne tik kibinais, bet ir sultiniu, 
            desertais bei vienkartiniais indais. Ne kiekvienas gamintojas gali pagaminti 1000 ar daugiau kibinų vienu metu, 
            todėl stambesniems užsakovams galime pasiūlyti ne tik kokybę, bet ir operatyvumą."
          />
          <DecorationFigure className="justify-end" img={kibinai3} alt=""/>
        </section>
      </div>

      <GallerySection />
    </main>
  );
}
