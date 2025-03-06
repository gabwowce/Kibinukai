

import Image from "next/image";
import elipse from "@/public/assets/Ellipse1.png";


export default function BubbleBackground({ right, left, center }) {
    return (
      <>
        {left && (
          <div className="absolute -inset-[400px] flex justify-start items-center -z-10">
            <div className="w-[80%] max-w-[900px] h-[900px] lg:max-w-[1000px] lg:h-[1000px] 2xl:max-w-[1300px] 2xl:h-[1300px] bg-orange-bubble rounded-full opacity-60"></div>
        </div>
        )}
        {right && (
         <div className="absolute -inset-[400px] flex justify-end place-items-end -z-10">
            <div className="w-[80%]  lg:max-w-[1000px] lg:h-[1000px] 2xl:max-w-[1300px] 2xl:h-[1300px] bg-orange-bubble rounded-full opacity-60"></div>
        </div>
        )}
        {center && (
         <div className="absolute -inset-[400px] flex justify-end place-items-end -z-10">
            <div className="w-[80%]  lg:max-w-[1000px] lg:h-[1000px] 2xl:max-w-[1300px] 2xl:h-[1300px] bg-orange-bubble rounded-full opacity-60"></div>
        </div>
        )}
      </>
    );
}