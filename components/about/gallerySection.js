"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { getGalleryImages } from "../../services/wpAPI";
import ErrorMessage from "@/components/ui/ErrorMessage"; // ✅ Importuojame klaidų komponentą

export default function GallerySection() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const images = await getGalleryImages();
        setGalleryImages(images);
      } catch (err) {
        console.error("Error fetching gallery:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Kraunama galerija...</p>;
  }

  if (error) {
    return <ErrorMessage message="Nepavyko įkelti galerijos. Bandykite vėliau." />;
  }

  return (
    <section className="container mx-auto py-10 lg:py-20">
      <SectionTitle
        title="Galerija"
        subtitle="Mūsų galerijoje rasite akimirkas iš įvairių renginių, mūsų **rankų darbo kibinų** bei 
        kitos produkcijos, gamybos ir prekybos akimirkas. Stengiamės užtikrinti **aukščiausią kokybę**, 
        todėl dalinamės šiais vaizdais su jumis! ✨"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
        {galleryImages.map((img) => (
          <Image
            key={img.id}
            src={img.image_url}
            width={350}
            height={200}
            alt={img.alt_text}
            className="rounded-lg object-cover"
            unoptimized
          />
        ))}
      </div>
    </section>
  );
}
