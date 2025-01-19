import CouponBanner from "./couponBanner";
import DeliveryBanner from "./deliveryBanner";

export default function Banners(){
    return(
        <section className="flex flex-col gap-10 lg:gap-20 py-10 lg:py-20">
            <CouponBanner/>
            <DeliveryBanner/>
        </section>
    );
}