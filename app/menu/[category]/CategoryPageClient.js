"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import HeroSecondary from "@/components/heroSecondary";
import { getMenuItems, getMenuCategories } from "@/services/wpAPI";
import Loading from "@/app/loading";
import MenuItems from "@/components/menu/Menu";
import ErrorMessage from "@/components/ui/ErrorMessage"; // ✅ Importuojame klaidų komponentą

import CategorySwitcher from "@/components/menu/CategorySwitcher"; // Importuojame naują komponentą
import Banner from "@/components/home/reusableBanner";
import { getBanners } from "@/services/wpAPI";


export default function CategoryPageClient() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const router = useRouter();

  const [categories, setCategories] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [originCategory, setOriginCategory] = useState("");
  const [displayCategoryName, setDisplayCategoryName] = useState(decodeURIComponent(category));
  const [menuBanner, setMenuBanner] = useState(null);

  useEffect(() => {
    async function fetchMenuBanner() {
      try {
        const banners = await getBanners();
        const menuBanner = banners.find((banner) => banner.bannerType === "menu");
        if (menuBanner) {
          setMenuBanner(menuBanner);
        }
      } catch (error) {
        console.error("❌ Nepavyko užkrauti meniu banerio:", error);
      }
    }
  
    fetchMenuBanner();
  }, []);

  
  const desiredOrder = [
    "kibinai",
    "mini-kibinukai",
    "saldyti",
    "saldumynai",
    "simtalapiai",
    "sakociai",
    "uzkandziai",
    "gerimai"

    
  ];
  
  useEffect(() => {
    async function fetchCategories() {
      try {
        setError(false);
        const data = await getMenuCategories();
        const filteredData = data.filter(cat => desiredOrder.includes(cat.slug));

        const sortedData = filteredData.sort(
          (a, b) => desiredOrder.indexOf(a.slug) - desiredOrder.indexOf(b.slug)
        );
  
        setCategories(sortedData);

        const matchedCategory = data.find((cat) => cat.slug === decodedCategory);
        if (matchedCategory) {
          setOriginCategory(matchedCategory.originCategory);
          setDisplayCategoryName(matchedCategory.name);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Kategorijų gavimo klaida:", error);
        setError(true);
      }
    }

    fetchCategories();
  }, [decodedCategory]);

  useEffect(() => {
    if (!originCategory) return;
  
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
  }, [originCategory]);
  
  if (isError) {
    return (
      <main className="min-h-screen relative">
        <HeroSecondary
          title="Meniu"
          breadcrumb={[
            { label: "Pagrindinis", href: "/" },
            { label: "Meniu", href: "/menu" },
            { label: displayCategoryName, href: `/menu/${category}` },
          ]}
        />
        <div className="container mx-auto pt-40 flex-grow flex items-center justify-center">
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
          { label: displayCategoryName, href: `/menu/${category}` },
        ]}
      />

      <div className="container mx-auto pb-6 flex flex-col items-center justify-center">
        <div className="flex flex-row-reverse justify-center items-center flex-wrap w-full relative mb-5">
          {categories.length > 0 ? (
            categories.map(({ name, slug, image }, index) => {
              const paddingTopValues = ["10px", "5px", "2px", "0px", "0px", "2px", "5px", "10px"];

              return (
                <div
                  key={slug}
                  className="flex flex-col items-center"
                  style={{
                    paddingTop: paddingTopValues[index % paddingTopValues.length], 
                  }}
                >
                  
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">Kategorijų nerasta.</p>
          )}
        </div>

        {/* Kategorijų perjungimo mygtukai atskirame komponente */}
        <CategorySwitcher categories={categories} decodedCategory={decodedCategory} router={router} />


        {isLoading ? <Loading /> : <MenuItems items={items} />}
      </div>
      {menuBanner && (
        <section className="container w-full h-auto overflow-hidden mt-10">
          <Banner
            img={menuBanner.desktopImage}
            imgMobile={menuBanner.mobileImage}
            alt={menuBanner.altText}
          >
            {/* Galima pridėti ir papildomą turinį, jei reikia */}
          </Banner>
        </section>
      )}

    </main>
  );
}
