"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import HeroSecondary from "@/components/heroSecondary";
import { getMenuItems, getMenuCategories } from "@/services/wpAPI";
import Loading from "@/app/loading";
import MenuItems from "@/components/menu/Menu";
import CategorySwitcher from "@/components/menu/CategorySwitcher"; // Importuojame naują komponentą

export default function CategoryPage() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const router = useRouter();

  const [categories, setCategories] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [originCategory, setOriginCategory] = useState("");

  useEffect(() => {
    getMenuCategories().then((data) => {
      setCategories(data);
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
      const filteredItems = data.filter((item) => item.kategorija === originCategory);
      setItems(filteredItems);
      setLoading(false);
    });
  }, [originCategory]);

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
        {/* Kategorijų perjungimo mygtukai atskirame komponente */}
        <CategorySwitcher categories={categories} decodedCategory={decodedCategory} router={router} />

        {isLoading ? <Loading /> : <MenuItems items={items} />}
      </div>
    </main>
  );
}
