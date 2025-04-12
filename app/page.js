
import OurProducts from "@/components/home/OurProducts";
import Carousel from "../components/home/carousel";
import Hero from "../components/home/hero";
import Banners from "@/components/home/homeBanners";
import { FaExternalLinkAlt, FaBolt } from "react-icons/fa";



import { FaShippingFast, FaTruckPickup, FaMapMarkerAlt } from "react-icons/fa";


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
