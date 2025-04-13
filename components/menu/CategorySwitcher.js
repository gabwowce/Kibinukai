// components/menu/CategorySwitcher.js
import CategoryButton from "@/components/ui/button/categoryButton";
import { useTailwindBreakpoints } from "@/components/useBreakpoint";

const CategorySwitcher = ({ categories, decodedCategory, router }) => {
  const { isXlUp } = useTailwindBreakpoints();

  if (!categories || categories.length === 0) {
    return <p className="text-center text-gray-500">Kategorijų nerasta.</p>;
  }

  const paddingTopValues = ["100px", "50px", "20px", "0px", "0px", "20px", "50px", "100px"];
  const paddingTopValues2 = ["100px", "5px", "5px", "100px", "50px", "0px", "0px", "50px"];

  return (
    <div
      className={
        isXlUp
          ? "flex flex-row justify-center items-center flex-wrap w-full relative mb-5"
          : "flex flex-row justify-center items-center flex-wrap relative mb-5 w-full lg:w-2/3"
      }
    >
      {categories.map(({ name, slug, image }, index) => {
        const total = categories.length;
        const shouldHaveRight = index >= total - 4;

        const style = isXlUp
        ? { paddingTop: paddingTopValues[index % paddingTopValues.length] }
        : { };

        return (
          <div
            key={slug}
            className="flex flex-col items-center"
            style={style}
          >

            <CategoryButton
              right={!shouldHaveRight} // Pirmi 4 neturi "right", paskutiniai 4 turi
              category={name}
              imageSrc={image}
              isActive={decodedCategory === slug}
              onClick={() => router.push(`/menu/${encodeURIComponent(slug)}`)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CategorySwitcher;
