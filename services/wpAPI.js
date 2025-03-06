import axios from "axios";

const API_URL = "http://kibinukai.local/wp-json/wp/v2/menu_items?per_page=100";

export const getMenuItems = async () => {
  const response = await axios.get(API_URL);

  console.log("API duomenys:", response.data); // Patikrinimui

  return response.data.map(item => ({
    id: item.id,
    pavadinimas: item.acf?.pavadinimas || "Nežinomas",
    aprasymas: item.acf?.aprasymas || "Aprašymas nepateiktas",
    kaina: item.acf?.kaina || 0,
    senaKaina: item.acf?.sena_kaina || null,
    image: item.acf?.nuotrauka?.sizes?.medium || item.acf?.nuotrauka || null,

    // Pataisome matavimo vieneto gavimą
    matavimo_vienetas: item.acf?.matavimo_vienetas || "vnt.",
    kategorija: item.acf?.kategorija || "Kita",
    subkategorija: item.acf?.subkategorija || "Bendri produktai",
  }));
};


export async function getGalleryImages() {
  const res = await fetch("http://kibinukai.local/wp-json/wp/v2/gallery", {
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
