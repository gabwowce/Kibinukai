
import ReviewCard from "@/components/about/ReviewCard";
import HeroSecondary from "@/components/heroSecondary";
import Image from "next/image";
import { Suspense } from "react";

import DecorationFigure from "@/components/about/decorationFigure";
import AboutArticle from "@/components/about/aboutArticle";
import SectionTitle from "@/components/SectionTitle";

import kibinai1 from "@/public/assets/about/kibinai1.png";
import kibinai2 from "@/public/assets/about/kibinai2.png";
import kibinai3 from "@/public/assets/about/kibinai3.png";

import { getGalleryImages } from "../../services/wpAPI";

const reviews = [
  {
    name: "Justina Murauskiene",
    profileType: "Vienas atsiliepimas • 2 nuotraukos",
    text: `Labai skanūs kibinai, labai didelis pasirinkimas. Užsisakėm šventei mini kibinukų su vištiena, su kiauliena ir su aviena. Visi nerealiai skanūs, traškūs ir švieži. Ir pristatymas tobulas - gavom šiltus, ką tik iš krosnies kibinus! Abejingų neliko - patiko mums, patiko mūsų svečiams, patiko vaikams :) Ačiū labai, jūsų dėka mūsų šventė buvo tobula ❤️`,
    ratingFood: 5,
    ratingService: 5,
    ratingAtmosphere: 5,
   
  },
  {
    name: "Silvija Masalskienė",
    profileType: "44 atsiliepimai",
    text: `Užsisakiau įvairių rūšių kubinukų vaiko gimtadieniui. Visi labai gyrė, ypač su varške ir špinatais. Taip pat patiko, kad į mėsą nepridėta daug svogūnų, kas dažnai pasitaiko kitose kibininėse.
Tikrai kartosim. Ačiū 😆`,
    ratingFood: 5,
    
  },
  {
    name: "Artūras Spindulys",
    profileType: "Vietos gidas • 215 atsiliepimų • 9964 nuotraukos",
    date: "prieš 8 mėnesius",
    text: `Skanūs kibinai ir čeburekai.`,
    ratingFood: 5,
    ratingService: 5,
    ratingAtmosphere: 5
  }
];



async function GallerySection() {
  const galleryImages = await getGalleryImages();

  return (
    <section className="container mx-auto py-10 lg:py-20">
      <SectionTitle title="Galerija" subtitle="Mūsų galerijoje rasite akimirkas iš įvairių renginių, mūsų **rankų darbo kibinų** bei 
        kitos produkcijos, gamybos ir prekybos akimirkas. Stengiamės užtikrinti **aukščiausią kokybę**, 
        todėl dalinamės šiais vaizdais su jumis! ✨"/>
  
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">

        {galleryImages.map((img) => (
          <Image
            key={img.id}
            src={img.image_url}
            width={350}
            height={200}
            alt={img.alt_text}
            className="rounded-lg object-cover"
            unoptimized 
          />
        ))}
      </div>
    </section>
  );
}


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
        <section className="py-0 lg:py-10 gap-8 flex flex-col">
          <div className="flex flex-col xl:flex-row">
            <AboutArticle className="w-full xl:w-2/3 pr-10"
              highlightedWord="Kibinai" 
              title="– mūsų tradicija ir meistriškumas" 
              body="Jau daugiau nei 10 metų džiuginame savo klientus išskirtiniais kibinais, kuriuose tradicija dera 
              su šiuolaikiniais skoniais. Nuo pirmosios dienos siekiame aukščiausios kokybės tiek gaminiuose, 
              tiek aptarnavime. Atsižvelgdami į klientų norus, nuolat plečiame savo asortimentą – siūlome naujus įdarus, 
              bendradarbiaujame su patikimais partneriais, tokiais kaip Arti Food, bei tobuliname paslaugas."/>
            <DecorationFigure className=" xl:justify-end" img={kibinai1} alt=""/>
          </div>
          <div className="flex flex-col-reverse xl:flex-row">
            <DecorationFigure className=" xl:justify-end" img={kibinai2} alt=""/>
           <AboutArticle className="w-full xl:w-2/3 pr-10"
              highlightedWord="Lankstumas" 
              title="– mūsų stiprybė" 
              body="Galime paruošti nuo vieno kibino iki kelių tūkstančių vienam užsakymui. 
              Užtikriname patogų atsiėmimo ar pristatymo laiką – dirbame praktiškai 7/24, 
              kad jūsų užsakymai būtų paruošti laiku. Jei reikia, pasirūpiname ne tik kibinais, bet ir sultiniu, 
              desertais bei vienkartiniais indais. Ne kiekvienas gamintojas gali pagaminti 1000 ar daugiau kibinų vienu metu, 
              todėl stambesniems užsakovams galime pasiūlyti ne tik kokybę, bet ir operatyvumą."/>
          </div>
          <div className="flexflex-col xl:flex-row">
            <AboutArticle className="w-full xl:w-2/3 pr-10"
              highlightedWord="Galimybes" 
              title="– Nuolat plečiame savo galimybes " 
              body="Siūlome lanksčias pristatymo sąlygas, pristatome kibinus ne tik Lietuvoje, bet ir į užsienį. 
              Vertiname kiekvieną klientą ir prisitaikome prie jo poreikių, kad kiekvienas užsakymas būtų sklandus ir skanus!"/>
            <DecorationFigure className=" xl:justify-end" img={kibinai3} alt=""/>
          </div>
          
          
          
        </section>
      </div>
     

     {/* Atsiliepimai */}
      <section
        id="reviews"
        className="bg-orange-bubble py-0 lg:py-10 px-6 rounded-lg"
        aria-labelledby="reviews-heading"
      >
        <div className="container mx-auto text-center py-10">
          <SectionTitle title="Mūsų klientų atsiliepimai" subtitle="Mums svarbi jūsų nuomonė! Palikite atsiliepimą ir padėkite mums tobulėti."/>
          <a 
            href="https://search.google.com/local/writereview?placeid=ChIJrUlAEeGT3UYR7f4_ue7IGwg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-outrageous-orange-400 text-white font-medium py-2 px-5 rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            Palikti atsiliepimą
          </a>

          {/* Kortelės suvienodintame tinklelyje */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

       {/* ✅ Galerija su Suspense */}
       <Suspense fallback={<p className="text-center text-lg">Kraunama galerija...</p>}>
        <GallerySection />
      </Suspense>



    </main>
  );
}
