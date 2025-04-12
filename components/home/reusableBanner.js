import Image from "next/image";
import Link from "next/link";

export default function Banner({img, imgMobile, alt, className, classNameMobile, children}) {
  return (
    <section className="relative">
   <Image
            src={img}
            alt={alt}
            className={` hidden md:block  xl:rounded-3xl ${className}`}
            quality={100} unoptimized 
            width={1440}
            height={333}
            draggable="false"
        />
    
    <Image
            src={imgMobile}
            alt={alt}
            className={` block md:hidden ${classNameMobile}`}
            quality={100} unoptimized 
            width={479}
            height={453}
            draggable="false"
        />
      {children}
    </section>
  );
}
