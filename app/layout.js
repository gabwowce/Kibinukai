import "./globals.css";

import Header from "../components/header/header";
import Loading from "./loading";
import Footer from "@/components/footer";
import { CartProvider } from "@/context/cartContext";
import { Suspense } from "react";

export const metadata = {
  title: "Kibinukai Vilniuje",
  description: "Skaniausi kibinai Vilniuje",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>;
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
