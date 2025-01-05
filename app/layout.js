import "./globals.css";

import Header from "./components/header/header";

export const metadata = {
  title: "Kibinukai Vilniuje",
  description: "Skaniausi kibinai Vilniuje"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link
          href="https://fonts.googleapis.com/css2?family=ADLaM+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
