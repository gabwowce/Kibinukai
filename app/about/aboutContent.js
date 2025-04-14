
  "use client";
  import HeroSecondary from "@/components/heroSecondary";
  import Script from 'next/script';
  import DecorationFigure from "@/components/about/decorationFigure";
  import AboutArticle from "@/components/about/aboutArticle";
  import dynamic from 'next/dynamic'
  const GallerySection = dynamic(() => import("@/components/about/gallerySection"), { ssr: false })
  
  import kibinai1 from "@/public/assets/about/kibinai1.png";
  import kibinai2 from "@/public/assets/about/kibinai2.png";
  import kibinai3 from "@/public/assets/about/kibinai3.png";
  
  
  export default function About() {
    return (
      <>
         <Script
          id="breadcrumb-about"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Pagrindinis",
                  "item": "https://kibinukai.lt"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Apie mus",
                  "item": "https://kibinukai.lt/about"
                }
              ]
            })
          }}
        />
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
              <AboutArticle
                className="w-full xl:w-2/3 pr-10"
                highlightedWord="Kibinai"
                title="– mūsų tradicija ir meistriškumas"
                body="Jau daugiau nei 10 metų džiuginame savo klientus išskirtiniais kibinais, kuriuose tradicija dera 
                su šiuolaikiniais skoniais. Nuo pirmosios dienos siekiame aukščiausios kokybės tiek gaminiuose, 
                tiek aptarnavime. Atsižvelgdami į klientų norus, nuolat plečiame savo asortimentą – siūlome naujus įdarus, 
                bendradarbiaujame su patikimais partneriais, tokiais kaip Arti Food, bei tobuliname paslaugas."
              />
              <DecorationFigure className="xl:justify-end" img={kibinai1} alt="" />
            </div>
  
            <div className="flex flex-col-reverse xl:flex-row">
              <DecorationFigure className="xl:justify-end" img={kibinai2} alt="" />
              <AboutArticle
                className="w-full xl:w-2/3 xl:pl-10"
                highlightedWord="Lankstumas"
                title="– mūsų stiprybė"
                body="Galime paruošti nuo vieno kibino iki kelių tūkstančių vienam užsakymui. 
                Užtikriname patogų atsiėmimo ar pristatymo laiką – dirbame praktiškai 7/24, 
                kad jūsų užsakymai būtų paruošti laiku. Jei reikia, pasirūpiname ne tik kibinais, bet ir sultiniu, 
                desertais bei vienkartiniais indais. Ne kiekvienas gamintojas gali pagaminti 1000 ar daugiau kibinų vienu metu, 
                todėl stambesniems užsakovams galime pasiūlyti ne tik kokybę, bet ir operatyvumą."
              />
            </div>
  
            <div className="flex flex-col xl:flex-row">
              <AboutArticle
                className="w-full xl:w-2/3 pr-10"
                highlightedWord="Galimybes"
                title="– Nuolat plečiame savo galimybes"
                body="Siūlome lanksčias pristatymo sąlygas, pristatome kibinus ne tik Lietuvoje, bet ir į užsienį. 
                Vertiname kiekvieną klientą ir prisitaikome prie jo poreikių, kad kiekvienas užsakymas būtų sklandus ir skanus!"
              />
              <DecorationFigure className="xl:justify-end" img={kibinai3} alt="" />
            </div>
          </section>
        </div>
  
        <GallerySection />
      </main>
      </>
     
    );
  }
  