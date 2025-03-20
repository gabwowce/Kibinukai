"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import HeroSecondary from "@/components/heroSecondary";
import { getMenuItems, getMenuCategories } from "@/services/wpAPI";
import Loading from "@/app/loading";
import MenuItems from "@/components/menu/Menu";
<<<<<<< HEAD
import CategoryButton from "@/components/ui/button/categoryButton";
import ErrorMessage from "@/components/ui/ErrorMessage"; // ✅ Importuojame klaidų komponentą
=======
import CategorySwitcher from "@/components/menu/CategorySwitcher"; // Importuojame naują komponentą
>>>>>>> 320381a7dd15f79ed914927de880ab46994becec

export default function CategoryPage() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const router = useRouter();

  const [categories, setCategories] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
<<<<<<< HEAD
  const [isError, setError] = useState(false);
  const [originCategory, setOriginCategory] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      try {
        setError(false);
        const data = await getMenuCategories();
        setCategories(data);

        const matchedCategory = data.find((cat) => cat.slug === decodedCategory);
        if (matchedCategory) {
          setOriginCategory(matchedCategory.originCategory);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Kategorijų gavimo klaida:", error);
        setError(true);
=======
  const [originCategory, setOriginCategory] = useState("");

  useEffect(() => {
    getMenuCategories().then((data) => {
      setCategories(data);
      const matchedCategory = data.find((cat) => cat.slug === decodedCategory);
      if (matchedCategory) {
        setOriginCategory(matchedCategory.originCategory);
>>>>>>> 320381a7dd15f79ed914927de880ab46994becec
      }
    }

    fetchCategories();
  }, [decodedCategory]);

  useEffect(() => {
    if (!originCategory) return;

<<<<<<< HEAD
    async function fetchMenuItems() {
      try {
        setLoading(true);
        setError(false);

        const data = await getMenuItems();
        const filteredItems = data.filter((item) => item.kategorija === originCategory);
        setItems(filteredItems);
      } catch (error) {
        console.error("Produktų gavimo klaida:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMenuItems();
=======
    setLoading(true);
    getMenuItems().then((data) => {
      const filteredItems = data.filter((item) => item.kategorija === originCategory);
      setItems(filteredItems);
      setLoading(false);
    });
>>>>>>> 320381a7dd15f79ed914927de880ab46994becec
  }, [originCategory]);

  if (isError) {
    return (
      <main>
        <HeroSecondary
          title="Meniu"
          breadcrumb={[
            { label: "Pagrindinis", href: "/" },
            { label: "Meniu", href: "/menu" },
            { label: decodedCategory, href: `/menu/${category}` },
          ]}
        />
        <div className="container mx-auto p-6">
          <ErrorMessage message="Nepavyko įkelti duomenų. Bandykite vėliau." />
        </div>
      </main>
    );
  }

  if (!categories) {
    return <Loading />;
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
<<<<<<< HEAD
        <div className="flex flex-row-reverse justify-center items-center flex-wrap w-full relative mb-5">
          {categories.length > 0 ? (
            categories.map(({ name, slug, image }, index) => {
              const paddingTopValues = ["100px", "50px", "20px", "0px", "0px", "20px", "50px", "100px"];

              return (
                <div
                  key={slug}
                  className="flex flex-col items-center"
                  style={{
                    paddingTop: paddingTopValues[index % paddingTopValues.length], 
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
=======
        {/* Kategorijų perjungimo mygtukai atskirame komponente */}
        <CategorySwitcher categories={categories} decodedCategory={decodedCategory} router={router} />
>>>>>>> 320381a7dd15f79ed914927de880ab46994becec

        {isLoading ? <Loading /> : <MenuItems items={items} />}
      </div>
    </main>
  );
}
