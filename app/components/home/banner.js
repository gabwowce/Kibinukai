import Separator from "../decoration/separator";
import Image from "next/image";

import banner from "@/public/assets/banners/naujiena-saldyti-banner.png"
import bannerMobile from "@/public/assets/banners/naujiena-saldyti-banner-mobile.png"

export default function Banner({img, imgMobile, alt, className, classNameMobile}) {
  return (
    <>
    <Image
          src={img}
          alt={alt}
          className={`hidden md:block rounded-3xl ${className}`}
          quality={100} unoptimized 
      />
  
      <Image
          src={imgMobile}
          alt={alt}
          className={`block md:hidden md:rounded-3xl ${classNameMobile}`}
          quality={100} unoptimized 
      />
    </>
  );
}
