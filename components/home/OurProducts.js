import SectionTitle from "@/components/SectionTitle";
import ProductsList from "./products/productsList";
import BubbleBackground from "../decoration/bubbleBackground";

export default function OurProducts() {
    return (
        <section className="py-10 lg:py-20 relative ">
            <BubbleBackground right/>

            {/* Title */}
            <div className="container flex flex-col items-center relative z-10">
                <SectionTitle 
                    primaryColor 
                    title="Mūsų produktai" 
                    subtitle="Užsisakykite kibinų rinkinį savo renginiui. Pasirinkite iš mūsų meniu arba susikurkite savo derinį"
                />
            </div>

            {/* Product List */}
            <div className="container relative z-10">
                <ProductsList />
            </div>

            <BubbleBackground left/>
        </section>
    );
}
