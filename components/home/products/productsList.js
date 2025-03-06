"use client"
import Product from "./product";
import { useState, useEffect } from "react";
import kibinai from "@/public/assets/products/kibinai-product.png"
import saldyti from "@/public/assets/products/saldyti-product.png"
import gerimai from "@/public/assets/products/gerimai-product.png"
import miniKibinai from "@/public/assets/products/mini-kibinai-product.png"
import skanestai from "@/public/assets/products/skanestai-product.png"
import rinkiniai from "@/public/assets/products/rinkiniai-product.png"

const products = [
  { img: kibinai, title: "Kibinai", desc: "Sultingas ir itin švelnaus skonio kibinas nustebins netgi gurmanus", mode: 0},
  { img: skanestai, title: "Skanėstai", desc: "Sultingas ir itin švelnaus skonio kibinas nustebins netgi gurmanus", mode: 1},
  { img: saldyti, title: "Šaldyti", desc: "Sultingas ir itin švelnaus skonio kibinas nustebins netgi gurmanus", mode: 2},
  { img: miniKibinai, title: "Mini kibinai", desc: "Sultingas ir itin švelnaus skonio kibinas nustebins netgi gurmanus", mode: 0},
  { img: gerimai, title: "Gėrimai", desc: "Sultingas ir itin švelnaus skonio kibinas nustebins netgi gurmanus", mode: 1},
  { img: rinkiniai, title: "Rinkiniai", desc: "Sultingas ir itin švelnaus skonio kibinas nustebins netgi gurmanus", mode: 2},
  { img: gerimai, title: "Gėrimai2", desc: "Sultingas ir itin švelnaus skonio kibinas nustebins netgi gurmanus", mode: 2},
  { img: rinkiniai, title: "Rinkiniai2", desc: "Sultingas ir itin švelnaus skonio kibinas nustebins netgi gurmanus", mode: 1},

];


export default function ProductsList() {
    const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMdUp(window.innerWidth >= 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);


    return (
      <>
        <div className="grid gap-10 lg:gap-20 py-10 lg:py-20 grid-cols-2 md:grid-cols-3">
            {products.slice(0, 6).map((product, index) => (
            <Product key={product.title} {...product} index={index} isMdUp={isMdUp} />
          ))}
        </div>

        <div className="grid grid-cols-2">
          {products.slice(6).map((product, index) => (
            <Product key={product.title} {...product} index={index + 6} isMdUp={isMdUp} />
          ))}
        </div>
      </>

    );
}

