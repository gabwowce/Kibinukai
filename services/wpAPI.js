import axios from "axios";

// ✅ Gauti MENIU ELEMENTUS iš WP API
export const getMenuItems = async () => {
  const WP_API_BASE_URL = process.env.NEXT_PUBLIC_WP_API_BASE_URL;
  const API_MENU_ITEMS = `${WP_API_BASE_URL}/menu_items?per_page=100`;
  console.log(`[API] GET: ${API_MENU_ITEMS}`);
  const response = await axios.get(API_MENU_ITEMS);

  const items = response.data.map((item) => ({
    id: item.id,
    pavadinimas: item.acf?.pavadinimas || "Nežinomas",
    aprasymas: item.acf?.aprasymas || "Aprašymas nepateiktas",
    kaina: item.acf?.kaina || 0,
    senaKaina: item.acf?.sena_kaina || null,
    image: item.acf?.nuotrauka?.sizes?.medium || item.acf?.nuotrauka || null,
    matavimo_vienetas: item.acf?.matavimo_vienetas || "vnt.",
    kategorija: item.acf?.kategorija || "Kita",
    kategorijaSlug:
      item.acf?.kategorija
        ?.toLowerCase()
        .replace(/\s+/g, "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") || "kita",
    subkategorija: item.acf?.subkategorija || "Bendri produktai",
  }));

  return items;
};

export const getMenuCategories = async () => {
  const WP_API_BASE_URL = process.env.NEXT_PUBLIC_WP_API_BASE_URL;
  const API_MENU_CATEGORIES = `${WP_API_BASE_URL}/menu_category?per_page=100`;
  const response = await axios.get(API_MENU_CATEGORIES);

  return response.data.map((category) => ({
    id: category.id,
    originCategory: category.acf?.origin_category || category.title.rendered, // Originalus WP pavadinimas
    name: category.acf?.name || category.title.rendered, // Jei nėra ACF lauko, naudoti WP pavadinimą
    slug: category.slug, // Naudojame tiesiai iš WP
    image: category.acf?.image || "/placeholder.jpg", // Jei nėra, naudoti placeholder
  }));
};

// ✅ Gauti GALERIJOS NUOTRAUKAS iš WP API
export async function getGalleryImages() {
  const WP_API_BASE_URL = process.env.NEXT_PUBLIC_WP_API_BASE_URL;
  const API_GALLERY = `${WP_API_BASE_URL}/gallery?per_page=100`;
  console.log(`[API] GET: ${API_GALLERY}`);
  const res = await fetch(API_GALLERY, {
    next: { revalidate: 10 }, // ISR - atnaujina duomenis kas 10s
  });

  if (!res.ok) {
    throw new Error("Nepavyko gauti galerijos duomenų");
  }

  const data = await res.json();

  return data.map((item) => ({
    id: item.id,
    image_url: item.acf?.nuotrauka || "/placeholder.jpg",
    alt_text: item.acf?.aprasymas || "Galerijos nuotrauka",
  }));
}

// ✅ Gauti BANERIUS iš WP API
export const getBanners = async () => {
  const API = `${process.env.NEXT_PUBLIC_CUSTOM_API_BASE_URL}/banners`;
  const { data } = await axios.get(API);

  const now = Date.now();

  const visible = data.filter((b) => {
    // ACF laukai jau šakniniame objekte
    const show = b.show_now === true || b.show_now === "1";
    const startRaw = b.start_date; // "2026/03/01"
    const endRaw = b.end_date;

    const start = startRaw ? Date.parse(startRaw) : null;
    const end = endRaw ? Date.parse(endRaw) : null;

    if (!show) return false;
    if (start && now < start) return false;
    if (end && now > end) return false;
    return true;
  });

  return visible.map((b) => ({
    id: b.id,
    bannerType: b.banner_type || "default",
    desktopImage: b.desktop_image || "/placeholder-desktop.jpg",
    mobileImage: b.mobile_image || "/placeholder-mobile.jpg",
    link: b.link || "#",
    altText: b.alt_text || "Banerio nuotrauka",
    title: b.title || "",
  }));
};
