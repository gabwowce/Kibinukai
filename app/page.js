
import OurProducts from "@/components/home/OurProducts";
import Carousel from "../components/home/carousel";
import Hero from "../components/home/hero";
import Banners from "@/components/home/homeBanners";

export default function Home() {
  return (
    <main className="w-full overflow-hidden flex flex-col">
      
      <Hero/>
      <Carousel/>
      <OurProducts/>
      <Banners/>
      
    </main>
  );
}
