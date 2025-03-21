import Image from "next/image";
import priceFrame from "@/public/assets/products/price-frame.png";

export default function Price() {
  return (
    <div className="relative h-auto w-20 lg:w-24 xl:w-28">
      <Image src={priceFrame} alt="Price Frame" />
      <p className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-white">
        Nuo 2.99 $
      </p>
    </div>
  );
}
