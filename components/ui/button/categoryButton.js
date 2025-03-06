import Image from "next/image";

const CategoryButton = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={() => onClick(category)}
      className={`relative flex flex-col items-center transition-all ${
        isActive ? "scale-110 opacity-100" : "opacity-50"
      }`}
    >
      <div
        className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 ${
          isActive ? "border-orange-500" : "border-transparent"
        }`}
      >
        <Image
          src={`/assets/products/${category.toLowerCase()}.jpg`} // Keičiame pagal kategoriją
          alt={category}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>
      <span className="mt-2 text-sm md:text-base font-semibold text-center">{category}</span>

      {isActive && (
        <Image
          src="/assets/products/arrow-sm.png"
          alt="arrow"
          width={20}
          height={20}
          className="absolute -bottom-6"
        />
      )}
    </button>
  );
};

export default CategoryButton;
