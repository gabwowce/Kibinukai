"use client"

import { useEffect, useState, useRef } from "react";
import banner1 from "@/public/assets/banners/naujiena-saldyti-banner.png";
import bannerMobile1 from "@/public/assets/banners/naujiena-saldyti-banner-mobile.png";

import banner2 from "@/public/assets/banners/velykos-banner.png";
import bannerMobile2 from "@/public/assets/banners/velykos-banner-mobile.png";
import Banner from "./banner";

const banners = [
  { img: banner1, imgMobile: bannerMobile1, alt: "Baneris 1" },
  { img: banner2, imgMobile: bannerMobile2, alt: "Baneris 2" },
  { img: banner1, imgMobile: bannerMobile1, alt: "Baneris 1" },
  { img: banner2, imgMobile: bannerMobile2, alt: "Baneris 2" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 5000; // 5 sekundės

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => resetTimeout();
  }, [currentIndex]);

  return (
    <section className="relative w-full h-auto overflow-hidden pt-20">
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="min-w-full h-full flex items-center justify-center"
          >
            <Banner
                img={banner.img}
                imgMobile={banner.imgMobile}
                alt={banner.alt}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
