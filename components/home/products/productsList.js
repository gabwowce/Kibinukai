"use client";

import Product from "./product";
import { useTailwindBreakpoints } from "@/components/useBreakpoint";

/* ---------- PASTABA ----------
 * Visi paveikslėliai yra STRINGAI, be „import“.
 * Keliai prasideda „/assets/...“, nes /public turinys
 * klientui pasiekiamas nuo šaknies.
 * ----------------------------------------------- */

const products = [
  {
    img: "/assets/products/kibinai-product.png",
    title: "Kibinai",
    slug: "DIDELI KIBINAI",
    slug2: "kibinai",
    desc: "Tradiciniai, rankų darbo kibinai su sultingais įdarais – tobulas pasirinkimas kiekvienai progai.",
    mode: 0,
  },
  {
    img: "/assets/products/mini-kibinai-product.png",
    title: "Mini kibinai",
    slug: "MAŽI KIBINUKAI",
    slug2: "mini-kibinukai",
    desc: "Mažieji kibinukai – puikus pasirinkimas užkandžiams ar šventiniam stalui.",
    mode: 1,
  },
  {
    img: "/assets/products/saldyti-product.png",
    title: "Šaldyti produktai",
    slug: "ŠALDYTI PRODUKTAI",
    slug2: "saldyti",
    desc: "Greitas ir patogus sprendimas – šaldyti produktai tiesiai į Jūsų šaldytuvą.",
    mode: 2,
  },
  {
    img: "/assets/products/skanestai-product.png",
    title: "Saldumynai",
    slug: "SALDUMYNAI",
    slug2: "saldumynai",
    desc: "Saldaus ir šilto skonio desertai bei kepiniai, pagaminti su meile Jūsų saldžioms akimirkoms.",
    mode: 0,
  },
  {
    img: "/assets/products/simtalapis-product.png",
    title: "Šimtalapiai",
    slug: "ŠIMTALAPIAI",
    slug2: "simtalapiai",
    desc: "Tradicinis lietuviškas desertas, sluoksniuotas ir gardus – ypatingam pasimėgavimui.",
    mode: 1,
  },
  {
    img: "/assets/products/sakociai-product.png",
    title: "Šakočiai",
    slug: "ŠAKOČIAI",
    slug2: "sakociai",
    desc: "Šventinis, išskirtinio skonio pyragas – tikram vaišių stalui.",
    mode: 2,
  },
  {
    img: "/assets/products/kiti-product.png",
    title: "Užkandžiai",
    slug: "UŽKANDŽIAI",
    slug2: "uzkandziai",
    desc: "Įvairūs užkandžiai kiekvienam skoniui.",
    mode: 2,
  },
  {
    img: "/assets/products/gerimai-product.png",
    title: "Gėrimai",
    slug: "GĖRIMAI",
    slug2: "gerimai",
    desc: "Karštas sultinys, gaivūs gėrimai ir dar daugiau skonių, kad kibinai būtų dar gardesni.",
    mode: 1,
  },
];

export default function ProductsList({ priceMap = {} }) {
  const { isMdUp } = useTailwindBreakpoints();

  return (
    <>
      {/* pirmi 6 */}
      <div className="grid gap-10 lg:gap-20 py-10 lg:py-20 grid-cols-2 md:grid-cols-3">
        {products.slice(0, 6).map((p, i) => (
          <Product
            key={p.title}
            img={p.img}
            title={p.title}
            desc={p.desc}
            mode={p.mode}
            index={i}
            isMdUp={isMdUp}
            price={priceMap[p.slug]?.price}
            unit={priceMap[p.slug]?.unit}
            slug={p.slug2}
          />
        ))}
      </div>

      {/* likę 2 – išdėstom 2 kolonomis */}
      <div className="grid grid-cols-2 gap-10 lg:gap-20">
        {products.slice(6).map((p, i) => (
          <Product
            key={p.title}
            img={p.img}
            title={p.title}
            desc={p.desc}
            mode={p.mode}
            index={i + 6}
            isMdUp={isMdUp}
            price={priceMap[p.slug]?.price}
            unit={priceMap[p.slug]?.unit}
            slug={p.slug2}
          />
        ))}
      </div>
    </>
  );
}
