export default function SkeletonGallery() {
    return (
      <section className="container mx-auto py-10 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-[200px] bg-gray-200 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>
      </section>
    );
  }
  