import axios from "axios";

const API_BASE_URL = "http://kibinukai.local/wp-json/wp/v2";
const API_MENU_ITEMS = `${API_BASE_URL}/menu_items?per_page=100`;
const API_MENU_CATEGORIES = `${API_BASE_URL}/menu_category?per_page=100`;
const API_GALLERY = `${API_BASE_URL}/gallery`;

// ✅ Gauti MENIU ELEMENTUS iš WP API
export const getMenuItems = async () => {
  const response = await axios.get(API_MENU_ITEMS);

  console.log("API duomenys:", response.data); // Patikrinimui

  return response.data.map(item => ({
    id: item.id,
    pavadinimas: item.acf?.pavadinimas || "Nežinomas",
    aprasymas: item.acf?.aprasymas || "Aprašymas nepateiktas",
    kaina: item.acf?.kaina || 0,
    senaKaina: item.acf?.sena_kaina || null,
    image: item.acf?.nuotrauka?.sizes?.medium || item.acf?.nuotrauka || null,
    matavimo_vienetas: item.acf?.matavimo_vienetas || "vnt.",
    kategorija: item.acf?.kategorija || "Kita",
    subkategorija: item.acf?.subkategorija || "Bendri produktai",
  }));
};

export const getMenuCategories = async () => {
  const response = await axios.get(API_MENU_CATEGORIES);

  console.log("Gautas kategorijų sąrašas iš API:", response.data); // 👈 Patikrinimui

  return response.data.map(category => ({
    id: category.id,
    originCategory: category.acf?.origin_category || category.title.rendered, // Originalus WP pavadinimas
    name: category.acf?.name || category.title.rendered, // Jei nėra ACF lauko, naudoti WP pavadinimą
    slug: category.slug, // Naudojame tiesiai iš WP
    image: category.acf?.image || "/placeholder.jpg", // Jei nėra, naudoti placeholder
  }));
};


// ✅ Gauti GALERIJOS NUOTRAUKAS iš WP API
export async function getGalleryImages() {
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
