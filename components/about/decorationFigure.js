import Image from "next/image";

export default function DecorationFigure({ img, alt, className }) {
  return (
    <figure className={`${className} flex md:py-5`}>
      <Image
        src={img}
        alt={alt}
        width={600}
        height={400}
        className="rounded-lg w-full sm:w-full h-[50px] md:h-[100px] xl:h-auto object-cover"
      />
    </figure>
  );
}
