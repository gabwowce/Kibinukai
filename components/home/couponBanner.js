import Image from "next/image";
import kuponas from "@/public/assets/banners/kuponas.png"

export default function CouponBanner() {
    return (
        <article className="container">
            <div className="flex w-full shadow-custom rounded-3xl bg-outrageous-orange-200">
                <div className="w-1/2 py-10 pl-40 flex flex-col justify-center">
                    <h2 className="w-1/2 xl:w-full font-display font-bold text-outrageous-orange-400">
                        “Kibinukai” kuponai
                    </h2>
                    <p className="text-justify">
                        Dovanokite skanią staigmeną – kibinų kuponas jau čia! Įsigykite mūsų kepyklėlėje adresu umedziu g. 7 arba užsisakykite telefonu. Puiki dovana kiekvienai progai!
                    </p>
                </div>
                <div className=" w-1/2 py-10 pr-40 flex justify-center">
                    <Image src={kuponas}/>
                </div>
            </div>
        </article>
    );
}
