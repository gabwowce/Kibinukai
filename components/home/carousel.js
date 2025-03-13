"use client";

import { useEffect, useState, useRef } from "react";
import banner1 from "@/public/assets/banners/naujiena-saldyti-banner.png";
import bannerMobile1 from "@/public/assets/banners/naujiena-saldyti-banner-mobile.png";

import banner2 from "@/public/assets/banners/velykos-banner.png";
import bannerMobile2 from "@/public/assets/banners/velykos-banner-mobile.png";
import Banner from "./reusableBanner";

import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/navigation";

const banners = [
  { img: banner1, imgMobile: bannerMobile1, alt: "Baneris 1", link: "/menu/saldyti" },
  { img: banner2, imgMobile: bannerMobile2, alt: "Baneris 2", link: "/contacts" },
];

export default function Carousel() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 5000; // Autoscroll interval in ms

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Handle swipe actions
  const handleSwipe = (delta) => {
    setCurrentIndex((prevIndex) => {
      if (delta < 0) {
        return prevIndex === banners.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? banners.length - 1 : prevIndex - 1;
      }
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
    onTap: (event) => {
      // Prevent navigation on right-click (or other non-left-click events)
      if (event.event.button === 0) { // `button === 0` ensures it's a left-click
        router.push(banners[currentIndex].link);
      }
    },
    trackMouse: true,
  });
  
  // Autoscroll effect
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
    <section
      
      className="w-full h-auto overflow-hidden sm:pb-10 md:pb-0 2xl:pb-20 z-19"
    >
      {/* Banner container */}
      <div
        {...handlers}
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
            >

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${
                      index === currentIndex
                        ? "bg-outrageous-orange-400"
                        : "bg-outrageous-orange-200"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  ></button>
                ))}
          </div>
            </Banner>
          </div>
            ))}
          </div>

      
    </section>
  );
}
