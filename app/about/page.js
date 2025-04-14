export const metadata = {
  title: "Apie mus - Kibinai Vilniuje",
  description: "Jau daugiau nei 10 metų džiuginame klientus išskirtiniais kibinais. Sužinokite daugiau apie mūsų tradicijas, meistriškumą ir lankstumą.",
  openGraph: {
    title: "Apie mus - Kibinukai Vilniuje",
    description: "Sužinokite, kaip gaminame skaniausius kibinus Vilniuje ir kaip prisitaikome prie klientų poreikių.",
    url: "https://kibinukai.lt/about",
    siteName: "Kibinukai Vilniuje",
    images: [
      {
        url: "/images/about.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "lt_LT",
    type: "website",
  },
  alternates: {
    canonical: "https://kibinukai.lt/about",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

import AboutContent from './aboutContent';

export default function AboutPage() {
  return <AboutContent />;
}