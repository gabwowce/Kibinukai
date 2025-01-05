import Image from "next/image";
import groupKibinai from "@/public/assets/groupKibinai.png";
import elipse from '@/public/assets/Ellipse1.png';

export default function Home() {
  return (
    <div className="relative h-screen overflow-x-hidden"> 
      <Image 
        src={elipse} 
        width={1500} 
        height={1500} 
        alt="Elipse"
        className="absolute top-[-800px] right-[-200px] bg-cover bg-no-repeat z-[-1]" 
      />
      <main className="relative z-10 container flex p-10">
        <Image 
          src={groupKibinai} 
          alt="Group of Kibinai"
          className="absolute top-0 left-[-120px] bg-cover bg-no-repeat" 
        />
        <div className="w-1/2 pt-20">
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