"use client";

import { useEffect, useState, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/navigation";
import Banner from "./reusableBanner";
import { getBanners } from "@/services/wpAPI";
import BannerSkeleton from "@/components/BannerSkeleton";
export default function Carousel() {
  const router = useRouter();
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const delay = 5000; // Autoscroll interval in ms

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // ✅ Pagrindinis useEffect su logais
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await getBanners();

        const carouselBanners = data.filter(
          (banner) => banner.bannerType === "carousel"
        );


        setBanners(carouselBanners);
      } catch (error) {
        console.error("❌ Nepavyko užkrauti banerių:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBanners();
  }, []);

  const handleSwipe = (delta) => {
    setCurrentIndex((prevIndex) => {
      const nextIndex =
        delta < 0
          ? prevIndex === banners.length - 1
            ? 0
            : prevIndex + 1
          : prevIndex === 0
          ? banners.length - 1
          : prevIndex - 1;

      return nextIndex;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1),
    onSwipedRight: () => handleSwipe(1),
    onTap: (event) => {
      if (event.event.button === 0 && banners[currentIndex]?.link) {
        router.push(banners[currentIndex].link);
      }
    },
    trackMouse: true,
  });

  useEffect(() => {
    if (banners.length === 0) return;
  
    resetTimeout();
  
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);
  
    return () => resetTimeout();
  }, [currentIndex, banners.length]); 
  

  if (isLoading) {
    return <BannerSkeleton />; 
  }

  if (banners.length === 0) {
    console.warn("⚠️ Banerių nėra!");
    return null;
  }

  return (
    <section className="w-full h-auto overflow-hidden sm:pb-10 md:pb-0 2xl:pb-20 z-20">
      <div
        {...handlers}
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className="min-w-full h-full flex items-center justify-center"
          >
            <Banner
              img={banner.desktopImage}
              imgMobile={banner.mobileImage}
              alt={banner.altText}
            >
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {banners.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${
                      dotIndex === currentIndex
                        ? "bg-outrageous-orange-400"
                        : "bg-outrageous-orange-200"
                    }`}
                    onClick={() => setCurrentIndex(dotIndex)}
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
