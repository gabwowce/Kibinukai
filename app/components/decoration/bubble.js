import Image from "next/image";
import elipse from '@/public/assets/roseElipse.png';

export default function Bubble(){
    return (
      <div className="absolute top-[-300px] right-[-200px] z-[-1] 
              w-[1000px] scale-60 lg:scale-85 xl:scale-100
              aspect-square">
            <Image
            src={elipse}
            alt="Burbulas"
            fill
            className="object-cover"
            />
      </div>
        
      );
    };
    