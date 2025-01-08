import Image from "next/image";
import groupKibinai from "@/public/assets/groupKibinai2.png";
import Bubble from "./components/decoration/bubble";
import Kibinukai from "./components/decoration/kibinukas";


export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <div className="relative z-10 flex container mx-auto">
      <Bubble />
        <Image
          src={groupKibinai}
          alt="Group of Kibinai"
          className="absolute top-[-55px] left-[-50px] md:left-[-80px] lg:left-[-100px] w-[200px] md:w-[200px] lg:w-[250px] xl:w-[300px]"
        />
        <div className=" w-1/3 xl:w-1/2 pt-40">
          <h1>
            Patys skaniausi&nbsp;
            <span className="font-display text-primary">KIBINAI</span>
          </h1>
          <p className="text-2xl">
            Polimori kolima aparastas hfkrok musu kurlsmifhshankfl ask akd hahanastytus
          </p>
        </div>
        <div className=" w-2/3 xl:w-1/2 pt-40 flex flex-col items-end justify-between h-auto">
          <div className="w-full ">
            
          </div>
          <div className=" w-full">
            <Kibinukai/>
          </div>
            
        </div>
      </div>
    </main>
  );
}
