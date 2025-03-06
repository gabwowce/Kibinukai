import Image from "next/image";
import arrow from "@/public/assets/products/arrow.png";
import arrowSm from "@/public/assets/products/arrow-sm.png";
import Price from "./price";

export default function Product({title, desc, img, index, mode, isMdUp}) {
  const finalMode = isMdUp ? mode : (index % 2 === 0 ? 0 : 1);

  let containerClass = "";
  let arrowClass = "";
  let priceStyle = {};
  let priceStyle2 = {};
  let imgClass = "";

  switch (finalMode) {
    case 0:
      containerClass = "flex-col";
      imgClass= "flex-col"
      arrowClass = "";
      priceStyle = { transform: "rotate(-30deg)" };
      priceStyle2 = "top-0 ";
      break;
    case 1:
      containerClass = "flex-col-reverse";
      imgClass= "flex-col-reverse items-end"
      arrowClass = "rotate-180 pb-4";
      priceStyle = { transform: "rotate(30deg)" };
      priceStyle2 = "botton-0 ";
      break;
    case 2:
      containerClass = "flex-col";
      imgClass= "flex-col items-end";
      arrowClass = "scale-x-[-1]";
      priceStyle = { transform: "rotate(-30deg)" };
      priceStyle2 = "";
      break;
  }

  return (
    <div className={`flex ${containerClass} items-center text-center p-2`}>
      {/* Kibinai paveikslėlis su rodykle ir kaina */}
      <div className={` relative flex ${imgClass}`} >
        <Image
          src={img}
          alt="Kibinai"
         className="rounded-full xs:w-[100px] xs:h-[100px] sm:w-[120px] 
                    sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[200px] 
                    lg:h-[200px] xl:w-[250px] xl:h-[250px] object-cover 
                    hover:shadow-custom-deep transition-transform duration-500 
                    ease-in-out hover:translate-y-[-12px] "
        />
        <Image
          src={arrowSm}
          alt="Arrow"
          className={`block md:hidden ${arrowClass}`}
        />
         <Image
          src={arrow}
          alt="Arrow"
          className={`hidden md:block ${arrowClass}`}
        />
        <div className={`absolute -right-8  ${priceStyle2}`} style={priceStyle}>
          <Price />
        </div>
      </div>

      <div>
        <h3 className="font-bold font-display text-brown">{title}</h3>
        <p className="text-gray-700 text-sm w-40 lg:w-60 leading-4">
        {desc}
        </p>
      </div>
      
    </div>
  );
}
