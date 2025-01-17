
import OurProducts from "@/components/home/OurProducts";
import Carousel from "../components/home/carousel";
import Hero from "../components/home/hero";


export default function Home() {
  return (
    <main className="w-full overflow-hidden flex flex-col">
      
      <Hero/>
      <Carousel/>
      <OurProducts/>

    </main>
  );
}
