import Link from "next/link";

export default function HeroSecondary({ title, breadcrumb }) {
  return (
    <section 
      className="relative flex flex-col items-center justify-center py-12 overflow-hidden mx-auto text-center"
      aria-labelledby="hero-title"
    >
      {/* Burbulas */}
      <div className="absolute inset-0 flex justify-center items-end">
        <div className="w-full max-w-[1000px] h-[1000px] bg-orange-bubble rounded-full"></div>
      </div>

      {/* Tekstas ant burbulo */}
      <h1 id="hero-title" className="font-display font-bold text-brown relative z-10">
        {title}
      </h1>

      {/* Breadcrumb navigacija */}
      <nav aria-label="breadcrumb" className="relative z-10">
        <ol className="flex text-brown">
          {breadcrumb.map((item, index) => (
            <li key={index} className="flex items-center">
              {index !== 0 && <span className="mx-1">/</span>}
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
