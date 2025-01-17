
import ProductsList from "./products/productsList";

export default function OurProducts(){
    return(
        <section className="container">
            <div className="flex flex-col items-center py-10 lg:py-20">
                <h2 className="font-display font-bold text-outrageous-orange-400 pb-2 md:pb-4">
                    Mūsų produktai 
                </h2>
                <p className="text-center">
                Užsisakykite kibinų rinkinį savo renginiui. Pasirinkite iš mūsų meniu arba susikurkite savo derinį
                </p>
            </div>
            <ProductsList/>
        </section>
    );
}