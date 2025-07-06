import Image from "next/image";
const priceFrame = "/assets/products/price-frame.png";

export default function Price({ price, unit = "vnt." }) {
  return (
    <div className="relative h-auto w-20 lg:w-24 xl:w-28">
      <Image
        src={priceFrame}
        alt=""
        width={112} // ~w-28 klasė (7rem = 112px)
        height={112} // Aspect ratio — jei frame yra kvadratinis
        sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
      />

      <p className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-white">
        {price ? (
          <>
            {`Nuo ${price.toFixed(2)} €`}
            {unit === "kg" && <br />}
            {unit === "kg" && <span>/ kg</span>}
          </>
        ) : (
          "Nuo 2.99 €"
        )}
      </p>
    </div>
  );
}
