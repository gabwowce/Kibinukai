"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { getGalleryImages } from "../../services/wpAPI";
import SkeletonGallery from "@/components/about/skeletonGallery";

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
    return <SkeletonGallery />;
  }

  if (error) {
    return (
      <div></div>
    )
  }

  return (
    <section className="container mx-auto py-10 lg:py-20">
      <SectionTitle
        title="Galerija"
        subtitle="Mūsų galerijoje rasite akimirkas iš įvairių renginių, mūsų rankų darbo kibinų bei 
        kitos produkcijos, gamybos ir prekybos akimirkas. Stengiamės užtikrinti aukščiausią kokybę, 
        todėl dalinamės šiais vaizdais su jumis!"
      />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
      {galleryImages.map((img) => (
        <div key={img.id} className="relative w-full aspect-[2/3] rounded-lg overflow-hidden">
          <Image
            src={img.image_url}
            alt={img.alt_text}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 30vw"
            loading="lazy"
          />
        </div>
      ))}
    </div>

    </section>
  );
}
