import Image from "next/image";
import Link from "next/link";

export default function Banner({ img, imgMobile, alt, className, classNameMobile, children, link }) {
  const content = (
    <>
      <Image
        src={img}
        alt={alt}
        className={`hidden md:block xl:rounded-3xl ${className}`}
        width={1440}
        height={333}
        quality={75}
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
        draggable="false"
      />
      <Image
        src={imgMobile}
        alt={alt}
        className={`block md:hidden ${classNameMobile}`}
        width={479}
        height={453}
        quality={75}
        sizes="100vw"
        priority
        draggable="false"
      />
    </>
  );

  return (
    <section className="relative">
      {link ? (
        <Link href={link} className="block w-full h-full">
          {content}
        </Link>
      ) : (
        content
      )}
      {children}
    </section>
  );
}
