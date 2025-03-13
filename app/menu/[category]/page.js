"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import HeroSecondary from "@/components/heroSecondary";
import { getMenuItems, getMenuCategories } from "@/services/wpAPI";
import Loading from "@/app/loading";
import MenuItems from "@/components/menu/Menu";
import CategoryButton from "@/components/ui/button/categoryButton"; // Importuojame mygtuką

export default function CategoryPage() {
  const { category } = useParams(); // Slug iš URL, pvz., "simtalapiai"
  const decodedCategory = decodeURIComponent(category); // Konvertuojame į įprastą tekstą
  const router = useRouter();

  const [categories, setCategories] = useState(null); // Pradinė reikšmė `null`
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [originCategory, setOriginCategory] = useState(""); // Tikrasis kategorijos pavadinimas

  useEffect(() => {
    // Gauti kategorijų duomenis iš WordPress API
    getMenuCategories().then((data) => {
      console.log("Kategorijos iš API:", data);
      setCategories(data);

      // Surandame originCategory pagal slug
      const matchedCategory = data.find((cat) => cat.slug === decodedCategory);
      if (matchedCategory) {
        setOriginCategory(matchedCategory.originCategory);
      }
    });
  }, [decodedCategory]);

  useEffect(() => {
    if (!originCategory) return;

    setLoading(true);
    getMenuItems().then((data) => {
      console.log("Gauti produktai iš API:", data);
      console.log("Filtruojama pagal kategoriją:", originCategory);

      const filteredItems = data.filter((item) => item.kategorija === originCategory);

      console.log("✅ Produktai po filtravimo:", filteredItems);
      setItems(filteredItems);
      setLoading(false);
    });
  }, [originCategory]);

  if (!categories) {
    return <Loading />; // Parodome "kraunama" jei kategorijų nėra
  }

  return (
    <main>
      <HeroSecondary
        title="Meniu"
        breadcrumb={[
          { label: "Pagrindinis", href: "/" },
          { label: "Meniu", href: "/menu" },
          { label: originCategory || decodedCategory, href: `/menu/${category}` },
        ]}
      />

      <div className="container mx-auto p-6">

        {/* Kategorijų perjungimo mygtukai */}
        <div className="flex flex-row-reverse justify-center items-center flex-wrap w-full relative mb-5">
        {categories.length > 0 ? (
          categories.map(({ name, slug, image }, index) => {
            const total = categories.length;
            const paddingTopValues = ["100px", "50px", "20px", "0px","0px",  "20px", "50px", "100px"]; // Skirtingi padding top (pritaikoma pagal kategorijų skaičių)
            // const marginLeftValues = ["0px", "20px", "30px", "40px", "30px", "20px", "0px"]; // Kad pasislinktų lanku

            return (
              <div
                key={slug}
                className="flex flex-col items-center"
                style={{
                  paddingTop: paddingTopValues[index % paddingTopValues.length], // Pasirenkame iš sąrašo
                
                }}
              >
                <CategoryButton
                  category={name}
                  imageSrc={image}
                  isActive={decodedCategory === slug}
                  onClick={() => router.push(`/menu/${encodeURIComponent(slug)}`)}
                />
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">Kategorijų nerasta.</p>
        )}
      </div>

        {isLoading ? <Loading /> : <MenuItems items={items} />}
      </div>
    </main>
  );
}
