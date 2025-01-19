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
            draggable="false"
        />
    
    <Image
            src={imgMobile}
            alt={alt}
            className={` block md:hidden ${classNameMobile}`}
            quality={100} unoptimized 
            draggable="false"
        />
      {children}
    </section>
  );
}
