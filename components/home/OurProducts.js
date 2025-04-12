import SectionTitle from "@/components/SectionTitle";
import ProductsList from "./products/productsList";
import BubbleBackground from "../decoration/bubbleBackground";
import ProductsListWrapper from "@/components/home/products/ProductsListWrapper";
export default function OurProducts() {
    return (
        <section className="py-10 lg:py-20 relative ">
            <BubbleBackground right/>

            {/* Title */}
            <div className="container flex flex-col items-center relative z-10">
            <SectionTitle 
                primaryColor 
                title="Mūsų produktai" 
                subtitle="Skaniausi kibinai, desertai ir užkandžiai vienoje vietoje – atraskite savo mėgstamus skonius mūsų meniu."
                />

            </div>

            {/* Product List */}
            <div className="container relative z-10">
                <ProductsListWrapper />
            </div>

            <BubbleBackground left/>
        </section>
    );
}
