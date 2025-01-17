import Image from "next/image";
import kibinukaiSeparator from "@/public/assets/home/kibinai-seperator.png"
import kibinukaiSeparatorMobile from "@/public/assets/home/kibinai-seperator-mobile.png"

export default function Separator() {
  return (
    <>
    <Image
        src={kibinukaiSeparator}
        alt="Kibinai separator picture"
        className=" hidden lg:block self-center object-none w-auto min-w-[300px] min-h-[100px] overflow-visible"
    />

    <Image
        src={kibinukaiSeparatorMobile}
        alt="Kibinai separator picture"
        className="block lg:hidden self-center object-none w-auto min-w-[300px] min-h-[100px] overflow-visible"
    />
    </>
  );
}
