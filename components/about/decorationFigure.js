import Image from "next/image";

export default function DecorationFigure({ img, alt, className }) {
  return (
    <figure className={`${className} flex md:py-5`}>
      <Image
        src={img}
        alt={alt}
        width={1200} // didesnis nei CSS plotis, kad būtų retina parama
        height={400} // apytikris aukštis, realiai čia svarbiau aspect ratio
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 10vw, 200vw"
        className="rounded-lg w-full sm:w-full h-[50px] md:h-[100px] xl:h-auto object-cover"
        priority
      />
    </figure>
  );
}
