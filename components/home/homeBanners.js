"use client";

import { useEffect, useState } from "react";
import { getBanners } from "@/services/wpAPI";
import Banner from "./reusableBanner";
import {BannerStaticSkeleton}  from "@/components/BannerSkeleton";

export default function Banners() {
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await getBanners();
        const homeBanners = data.filter(
          (banner) => banner.bannerType === "home"
        );
        setBanners(homeBanners);
      } catch (error) {
        console.error("❌ Nepavyko užkrauti home banerių:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (isLoading) {
    return (
      <section className="container flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
        {[1, 2].map((index) => (
          <BannerStaticSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (banners.length === 0) {
    console.warn("⚠️ Home banerių nėra!");
    return null;
  }

  return (
    <section className="container flex flex-col items-center gap-10 lg:gap-20 py-10 lg:py-20">
      {banners.map((banner) => (
        <Banner
          key={banner.id}
          img={banner.desktopImage}
          imgMobile={banner.mobileImage}
          alt={banner.altText}
          className="hadow-custom md:shadow-none xl:shadow-custom"
        />
      ))}
    </section>
  );
}
