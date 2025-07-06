import ContactsClient from "./ContactsClient";

export const metadata = {
  metadataBase: new URL("https://kibinaivilnius.lt"),
  title: "Kontaktai - Kibinai Vilniuje",
  description:
    "Susisiekite su mumis dėl užsakymų ar bendradarbiavimo. Greitas atsakymas, patogus atsiėmimas ir pristatymas visoje Lietuvoje.",
  openGraph: {
    title: "Kontaktai - Kibinukai Vilniuje",
    description:
      "Sužinokite, kaip su mumis susisiekti dėl užsakymų ir skanios produkcijos įsigijimo. Laukiame jūsų žinučių ir skambučių!",
    url: "https://kibinaivilnius.lt//contacts",
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
    canonical: "https://kibinaivilnius.lt//contacts",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Contacts() {
  return <ContactsClient />;
}
