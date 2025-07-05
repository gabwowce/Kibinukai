"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import HeroSecondary from "@/components/heroSecondary";
import MenuItems from "@/components/menu/Menu";
import Loading from "@/app/loading";
import ErrorMessage from "@/components/ui/ErrorMessage";
import CategorySwitcher from "@/components/menu/CategorySwitcher";
import Banner from "@/components/home/reusableBanner";
import { getMenuItems, getMenuCategories, getBanners } from "@/services/wpAPI";
import { useCachedData } from "@/utils/useCachedData";

export default function CategoryPageClient() {
  // --- hydration guard (mounted) ---
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const router = useRouter();

  // --- constante ---
  const desiredOrder = [
    "kibinai",
    "mini-kibinukai",
    "saldyti",
    "saldumynai",
    "simtalapiai",
    "sakociai",
    "uzkandziai",
    "gerimai",
  ];

  // hooks MUST be called unconditionally –
  // we place them before any early return.

  const { data: banners } = useCachedData("banners", getBanners);
  const menuBanner = banners?.find((b) => b.bannerType === "menu") || null;

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCachedData(
    "categories",
    async () => {
      const data = await getMenuCategories();
      return data
        .filter((c) => desiredOrder.includes(c.slug))
        .sort(
          (a, b) => desiredOrder.indexOf(a.slug) - desiredOrder.indexOf(b.slug)
        );
    },
    [decodedCategory]
  );

  const matched = categories?.find((c) => c.slug === decodedCategory);
  const originCategory = matched?.originCategory || "";
  const displayCategoryName = matched?.name || decodedCategory;

  const {
    data: items,
    loading: itemsLoading,
    error: itemsError,
  } = useCachedData(
    `menuItems-${originCategory}`,
    async () => {
      if (!originCategory) return [];
      const all = await getMenuItems();
      return all.filter((i) => i.kategorija === originCategory);
    },
    [originCategory]
  );

  const isError = categoriesError || itemsError;

  // --- early exit only after all hooks ---
  if (!mounted) return null; // prevents hydration mismatch

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

  if (categoriesLoading || !categories) return <Loading />;

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
        <CategorySwitcher
          categories={categories}
          decodedCategory={decodedCategory}
          router={router}
        />
        {itemsLoading ? <Loading /> : <MenuItems items={items || []} />}
      </div>

      {menuBanner && (
        <section className="container w-full h-auto overflow-hidden mt-10">
          <Banner
            img={menuBanner.desktopImage}
            imgMobile={menuBanner.mobileImage}
            alt={menuBanner.altText}
          />
        </section>
      )}
    </main>
  );
}
