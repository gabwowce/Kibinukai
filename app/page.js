import Image from "next/image";
import groupKibinai from "@/public/assets/groupKibinai2.png";
import Bubble from "./components/decoration/bubble";


export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="fixed top-0 right-0 z-[-1]">
        <Bubble />
      </div>
      <main className="relative z-10 flex container mx-auto">
      <Image
          src={groupKibinai}
          alt="Group of Kibinai"
          className="absolute top-[-55px] left-[-140px] md:left-[-180px] lg:left-[-220px] w-[200px] md:w-[200px] lg:w-[250px] xl:w-[300px]"
        />
        <div className="w-1/2 pt-40">
          <h1>
            Taste The&nbsp;
            <span className="font-display text-primary">Difference</span>
          </h1>
          <p className="text-2xl">
            Polimori kolima aparastas hfkrok musu kurlsmifhshankfl ask akd hahanastytus
          </p>
        </div>
      </main>
    </div>
  );
}
