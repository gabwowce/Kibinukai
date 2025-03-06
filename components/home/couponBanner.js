import Image from "next/image";
import kuponas from "@/public/assets/banners/kuponas.png"
import couponBanner from "@/public/assets/banners/couponBanner.png"
import couponBannerMid from "@/public/assets/banners/couponBanner-mid.png"
import couponBannerMobile from "@/public/assets/banners/couponBanner-mobile.png"
import Banner from "./reusableBanner";

const banners = [
  { img: couponBannerMid, imgMobile: couponBannerMobile, alt: "Baneris 1", link: "/menu/saldyti" },
];

export default function CouponBanner() {
    return (
        <article className="container flex justify-center">
          
            <Banner
                img={couponBanner}
                imgMobile={couponBannerMobile}
                alt="Baneris 1"
            />
            
        </article>
    );
}
