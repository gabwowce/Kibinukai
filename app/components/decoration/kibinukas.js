"use client";

import React from "react";
import Image from "next/image";
import Eyes from "./eyes";
import KibinukasNoEyes from '@/public/assets/Kibinukas-noEyes.png';

const Kibinukai = ({ className }) => {
  return (
    <div className={`relative flex justify-end ${className} min-w-[490px] scale-65 lg:scale-100`}>
      
      {/* Pirmasis kibinukas (priekyje) */}
      <div className="relative z-10 inline-block top-[-80px] md:top-0">
        <Image
          src={KibinukasNoEyes}
          alt="Kibinukas"
          className="object-contain drop-shadow-custom"
        />
        <div
          className="absolute top-[68px] left-[106px]"
          style={{ transform: "rotate(15deg)" }}
        >
          <Eyes />
        </div>
      </div>

      {/* Antrasis kibinukas (fonėje) */}
      <div className="absolute top-[-10px] md:top-[50px] right-[150px] z-10">
        <Image
          src={KibinukasNoEyes}
          alt="Kibinukas"
          className="object-contain drop-shadow-custom"
        />
        <div
          className="absolute top-[68px] left-[106px]"
          style={{ transform: "rotate(15deg)" }}
        >
          <Eyes />
        </div>
      </div>
    </div>
  );
};

export default Kibinukai;
