import "./globals.css";

import Header from "../components/header/header";
import Loading from "./loading";
import Footer from "@/components/footer";
import { CartProvider } from "@/context/cartContext";
import { Suspense } from "react";
import Script from 'next/script';

export const metadata = {
  title: "Kibinai Vilniuje - skaniausi kibinai ir skanėstai",
  description: "Užsisakykite kibinus internetu arba užsukite į mūsų kavinę Vilniuje. Greitas pristatymas, kokybė ir tradicijos viename!",
  openGraph: {
    title: "Kibinai Vilniuje - skaniausi kibinai ir skanėstai",
    description: "Užsisakykite kibinus internetu arba užsukite į mūsų kavinę Vilniuje. Greitas pristatymas, kokybė ir tradicijos viename!",
    url: "https://kibinukai.lt",
    siteName: "Kibinukai Vilniuje",
    images: [
      {
        url: "https://suse-prize-llp-legislation.trycloudflare.com/kibinukaiMain2.png",
        alt: "Kibinukai ir skanėstai iš Vilniaus kavinės",
        width: 1200,
        height: 630,
      },
    ],
    locale: "lt_LT",
    type: "website",
  },
  alternates: {
    canonical: "https://kibinukai.lt",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="lt">
      <head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap"
          rel="stylesheet"
        />
       
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />


        {/* Schema.org structured data */}
        <Script
          id="schema-kibinukai"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              "name": "Kibinukai Vilniuje",
              "description": "Kibinai, desertai ir užkandžiai iš anksto užsakymui arba atsiėmimui kavinėje Vilniuje. Taip pat siūlome didelius užsakymus renginiams ir greitą pristatymą.",
              "url": "https://kibinukai.lt",
              "image": "https://kibinukai.lt/images/og-image.jpg",
              "telephone": "+37065738267",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ūmedžių g. 10-2",
                "addressLocality": "Vilnius",
                "addressCountry": "LT"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "10:00",
                  "closes": "20:00"
                }
              ],
              "servesCuisine": ["Lithuanian", "Pastries", "Coffee", "Snacks"],
              "acceptsReservations": "True",
              "hasMenu": "https://kibinukai.lt/menu",
              "sameAs": [
                "https://www.facebook.com/kibinaivilniujelt"
              ],
              "priceRange": "€",
              "delivery": {
                "@type": "DeliveryMethod",
                "name": "Delivery and Pickup Available"
              }
            }),
          }}
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}