"use client";

import { useEffect, useState } from "react";
import Product from "./product";
import kibinai from "@/public/assets/products/kibinai-product.png";
import saldyti from "@/public/assets/products/saldyti-product.png";
import gerimai from "@/public/assets/products/gerimai-product.png";
import miniKibinai from "@/public/assets/products/mini-kibinai-product.png";
import skanestai from "@/public/assets/products/skanestai-product.png";
import simtalapiai from "@/public/assets/products/simtalapis-product.png";
import sakociai from "@/public/assets/products/sakociai-product.png";
import uzkandziai from "@/public/assets/products/kiti-product.png";
import { useTailwindBreakpoints } from "@/components/useBreakpoint";


const products = [
  { img: kibinai, title: "Kibinai",slug: "DIDELI KIBINAI", slug2: "kibinai", desc: "Tradiciniai, rankų darbo kibinai su sultingais įdarais – tobulas pasirinkimas kiekvienai progai.", mode: 0},
  { img: miniKibinai, title: "Mini kibinai", slug: "MAŽI KIBINUKAI", slug2: "mini-kibinukai", desc: "Mažieji kibinukai – puikus pasirinkimas užkandžiams ar šventiniam stalui.", mode: 1},
  { img: saldyti, title: "Šaldyti produktai", slug: "ŠALDYTI PRODUKTAI", slug2: "saldyti",  desc: "Greitas ir patogus sprendimas – šaldyti produktai tiesiai į Jūsų šaldytuvą.", mode: 2},
  { img: skanestai, title: "Saldumynai",slug: "SALDUMYNAI", slug2: "saldumynai",  desc: "Saldaus ir šilto skonio desertai bei kepiniai, pagaminti su meile Jūsų saldžioms akimirkoms.", mode: 0},
  { img: simtalapiai, title: "Šimtalapiai", slug: "ŠIMTALAPIAI", slug2: "simtalapiai",  desc: "Tradicinis lietuviškas desertas, sluoksniuotas ir gardus – ypatingam pasimėgavimui.", mode: 1},
  { img: sakociai, title: "Šakočiai", slug: "ŠAKOČIAI", slug2: "sakociai",  desc: "Šventinis, išskirtinio skonio pyragas – tikram vaišių stalui.", mode: 2},
  { img: uzkandziai, title: "Užkandžiai", slug: "UŽKANDŽIAI", slug2: "uzkandziai",  desc: "Įvairūs užkandžiai kiekvienam skoniui.", mode: 2},
  { img: gerimai, title: "Gėrimai", slug: "GĖRIMAI", slug2: "gerimai",  desc: "Karštas sultinys, gaivūs gėrimai ir dar daugiau skonių, kad kibinai būtų dar gardesni.", mode: 1},
];

export default function ProductsList({ priceMap }) {
  const { isMdUp } = useTailwindBreakpoints();


  return (
    <>
      <div className="grid gap-10 lg:gap-20 py-10 lg:py-20 grid-cols-2 md:grid-cols-3">
        {products.slice(0, 6).map((product, index) => (
          <Product
            key={product.title}
            mode={product.mode}
            {...product}
            index={index}
            isMdUp={isMdUp}
            price={priceMap[product.slug]?.price}
            unit={priceMap[product.slug]?.unit}
            slug={product.slug2}
          />
        ))}
      </div>

      <div className="grid grid-cols-2">
        {products.slice(6).map((product, index) => (
          <Product
            key={product.title}
            {...product}
            index={index + 6}
            mode={product.mode}
            isMdUp={isMdUp}
            price={priceMap[product.slug]?.price}
            unit={priceMap[product.slug]?.unit}
            slug={product.slug2}
          />
        ))}
      </div>
    </>
  );
}
