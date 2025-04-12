import CategoryPageClient from './CategoryPageClient';
import Script from 'next/script';
import { getMenuItems } from "@/services/wpAPI";

export async function generateMetadata({ params }) {
  const category = params.category;

  const categoryData = {
    "kibinai": {
      title: "Kibinai - skaniausi kibinai Vilniuje",
      description: "Ragaukite tradicinius ir sultingus kibinus, gaminamus pagal autentiškus receptus mūsų kepyklėlėje Vilniuje.",
      image: "/images/kibinai.jpg",
    },
    "mini-kibinukai": {
      title: "Mini kibinukai - mažos, bet skanios užkandėlės",
      description: "Puikus pasirinkimas vakarėliams ar kasdieniam užkandžiui – mažieji kibinukai nustebins savo skoniu.",
      image: "/images/mini-kibinukai.jpg",
    },
    "saldyti": {
      title: "Šaldyti produktai - patogumas Jūsų virtuvėje",
      description: "Šaldyti kibinai ir kiti produktai – greitam ir patogiam pasiruošimui namuose.",
      image: "/images/saldyti.jpg",
    },
    "saldumynai": {
      title: "Saldumynai - saldūs skanėstai kiekvienai progai",
      description: "Pasimėgaukite mūsų desertais ir saldžiais kepiniais, pagamintais su meile.",
      image: "/images/saldumynai.jpg",
    },
    "simtalapiai": {
      title: "Šimtalapiai - tradicinis lietuviškas desertas",
      description: "Skanausite tikro lietuviško šimtalapio – ypatingo deserto ypatingoms progoms.",
      image: "/images/simtalapiai.jpg",
    },
    "sakociai": {
      title: "Šakočiai - šventiniai pyragai Jūsų stalui",
      description: "Tradiciniai lietuviški šakočiai – puošnus desertas šventėms ir vaišėms.",
      image: "/images/sakociai.jpg",
    },
    "gerimai": {
      title: "Gėrimai - gaivūs ir gardūs pasirinkimai",
      description: "Pasirinkite gaivinančius gėrimus prie mūsų gardžių kepinių.",
      image: "/images/gerimai.jpg",
    },
    "uzkandziai": {
      title: "Užkandžiai - skanūs pasirinkimai bet kokiai progai",
      description: "Atraskite mūsų užkandžių asortimentą – nuo klasikinių iki gurmaniškų.",
      image: "/images/uzkandziai.jpg",
    },
  };
  
  

  const categoryInfo = categoryData[category] || {
    title: "Meniu - Kibinai Vilniuje",
    description: "Pažiūrėkite mūsų meniu ir atraskite mėgstamus skanėstus!",
    image: "/images/default.jpg",
  };

  return {
    title: categoryInfo.title,
    description: categoryInfo.description,
    openGraph: {
      title: categoryInfo.title,
      description: categoryInfo.description,
      images: [
        {
          url: categoryInfo.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function CategoryPage() {
  const menuItems = await getMenuItems();

  return (
    <>
      {/* Product Schema */}
      <Script
        id="product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Produktai - Kibinukai Vilniuje",
            "itemListElement": menuItems.map((item, index) => ({
              "@type": "Product",
              "name": item.pavadinimas,
              "description": item.aprasymas || "Skanus rankų darbo kibinas.",
              "image": item.nuotrauka || "https://kibinukai.lt/images/default-product.jpg",
              "url": `https://kibinukai.lt/menu/${item.kategorijaSlug || ''}`,
              "offers": {
                "@type": "Offer",
                "priceCurrency": "EUR",
                "price": item.kaina,
                "availability": "https://schema.org/InStock",
              },
              "position": index + 1,
            })),
          }),
        }}
      />

      {/* Puslapio klientinė dalis */}
      <CategoryPageClient />
    </>
  );
}
