import Image from "next/image";
import elipse from '@/public/assets/Ellipse1.png';

export default function Bubble(){
    return (
        <div className="overflow-hidden">
          <div className="w-[800px] h-[800px] lg:w-[1000px] lg:h-[1000px] xl:w-[1200px] xl:h-[1200px] 2xl:w-[1500px] 2xl:h-[1500px] translate-x-1/3 -translate-y-1/2 z-[-1]">
          <Image 
              src={elipse} 
              alt="Elipse"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      );
    };
    