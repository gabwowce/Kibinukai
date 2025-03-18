// components/menu/CategorySwitcher.js
import CategoryButton from "@/components/ui/button/categoryButton";

const CategorySwitcher = ({ categories, decodedCategory, router }) => {
  if (!categories || categories.length === 0) {
    return <p className="text-center text-gray-500">Kategorijų nerasta.</p>;
  }

  const paddingTopValues = ["100px", "50px", "20px", "0px", "0px", "20px", "50px", "100px"];

  return (
    <div className="flex flex-row-reverse justify-center items-center flex-wrap w-full relative mb-5">
      {categories.map(({ name, slug, image }, index) => {
        const total = categories.length;
        const shouldHaveRight = index >= total - 4;

        return (
          <div
            key={slug}
            className="flex flex-col items-center"
            style={{ paddingTop: paddingTopValues[index % paddingTopValues.length] }}
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
