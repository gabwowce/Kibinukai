import Image from "next/image";
import arrowSm from "@/public/assets/products/arrow-sm.png";

const CategoryButton = ({ category, imageSrc, isActive, onClick, right }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center p-3 transition-all duration-300 ${
        isActive ? "scale-110 font-bold flex-row" : "opacity-50 hover:opacity-100 flex-col"
      }`}
    >
      {/* Kategorijos pavadinimas */}

      
      

      <div className={`flex ${right ? "flex-row-reverse" : "flex-row"} items-end gap-5 ${isActive ? `absolute top-[${right ? "-30px" : "-30px"}] left-[${right ? "80px" : "-80px"}]` : ""}`}>
        <span className={` text-sm md:text-base font-display ${isActive ? "text-black" : "text-gray-500"}`}>
          {category}
        </span>

        {
          isActive &&
          <Image
            src={arrowSm || "/placeholder.jpg"} // Jei nėra, rodo placeholder
            alt={category}
            width={10}
            height={10}
            objectFit="cover"
            unoptimized
            className={`${right ? "rotate-[250deg] scale-x-[-1]" : "rotate-[100deg]"}`}
          />
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
          objectFit="cover"
          unoptimized
        />
      </div>

      
    </button>
  );
};

export default CategoryButton;
