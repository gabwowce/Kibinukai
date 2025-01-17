import Image from "next/image";
import elipse from "@/public/assets/Ellipse1.png";
import fonas1 from "@/public/assets/fonai/fonas1.png"
import fonas2 from "@/public/assets/fonai/fonas2.png"

export default function Bubble() {
  return (
    <div
      className="
        absolute top-[-100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2
        md:top-[-380px] md:right-[-350px] md:left-auto md:translate-x-0 md:translate-y-0
        lg:top-[-300px] lg:right-[-200px]
        z-[-1] w-[1000px]
        scale-80 lg:scale-85 xl:scale-100 aspect-square
      "
    >
      <Image
        src={elipse}
        alt="Burbulas"
        fill
        className="object-cover"
      />
    </div>
  );
}
