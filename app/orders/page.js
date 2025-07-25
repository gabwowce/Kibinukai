import OrdersClient from "./OrdersClient";

export const metadata = {
  metadataBase: new URL("https://kibinaivilnius.lt"),
  title: "Jūsų užsakymas - Kibinukai Vilniuje",
  description:
    "Peržiūrėkite savo krepšelį ir pateikite užsakymą. Skaniausi kibinai ir kiti gardėsiai jau netrukus bus jūsų namuose!",
  openGraph: {
    title: "Jūsų užsakymas - Kibinukai Vilniuje",
    description:
      "Patogiai užsisakykite kibinus ir kitus mūsų produktus internetu. Greitas pristatymas ir aukšta kokybė garantuota!",
    url: "https://kibinaivilnius.lt/orders",
    siteName: "Kibinukai Vilniuje",
    images: [
      {
        url: "/images/orders.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "lt_LT",
    type: "website",
  },
  alternates: {
    canonical: "https://kibinaivilnius.lt/orders",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function OrdersPage() {
  return <OrdersClient />;
}
