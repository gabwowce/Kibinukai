import Image from "next/image";
import arrowSm from "@/public/assets/products/arrow-sm.png";
import { useTailwindBreakpoints } from "@/components/useBreakpoint";

const CategoryButton = ({ category, imageSrc, isActive, onClick, right }) => {
  const { isXlUp } = useTailwindBreakpoints();

  return (
    <button
      onClick={onClick}
      className={`relative flex items-center p-3 transition-all duration-300 ${
        isActive ? "scale-110 font-bold flex-col" : "opacity-50 hover:opacity-100 flex-col"
      }`}
    >
      {/* Kategorijos pavadinimas */}

      
      

      <div className={`flex ${right ? "flex-row" : "flex-row-reverse"} items-end gap-5 ${isActive ? (right ? "xl:absolute top-[-20px] left-[-50px]" : "xl:absolute top-[-20px] right-[-50px]")  : ""}`}>
        <span className={` text-sm md:text-base font-display ${isActive ? "text-black" : "text-gray-500"}`}>
          {category}
        </span>

        {
          isXlUp && isActive && (
            <Image
              src={arrowSm || "/placeholder.jpg"}
              alt={category}
              width={10}
              height={10}
              objectFit="cover"
              sizes="10px"
              className={`${right ? "rotate-[100deg]" : "rotate-[250deg] scale-x-[-1]"}`}
            />
          )
        }


        
        
      </div>
      

      <div
        className={` w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ${
          isActive ? "border-black shadow-custom" : "border-gray-300"
        }`}
      >
        <Image
          src={imageSrc || "/placeholder.jpg"} // Jei nėra, rodo placeholder
          alt={category}
          width={96}
          height={96}
          sizes="(max-width: 768px) 64px, (max-width: 1024px) 96px, 96px"
          objectFit="cover"
        />
      </div>

      
    </button>
  );
};

export default CategoryButton;
