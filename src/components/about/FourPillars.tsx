import React from "react";
import Image from "next/image";
import HeartImage from "@/public/about/heart.svg";
import Pendant from "@/public/about/pendant.webp";
import redenvelope from "@/public/about/envelope.webp";
import gradCap from "@/public/about/gradCap.webp";


const FourPillars = () => {
  return (
    <div className=" justify-items-start grid grid-cols-2 md:gap-20 gap-6">
      <div className="md:ml-20 col-span-2 relative flex h-[8vh] w-[60vw] md:h-[12vh] md:w-[25vw] items-center rounded-3xl border-8 border-csa-green-100 bg-white">
        <p className="font-lora p-4 text-3xl font-bold text-csa-gray-200">
          Philanthropy
        </p>
        <Image
          src={HeartImage}
          alt="heartImage"
          className="absolute right-[-20%] top-[-40%] md:right-[-40%] md:top-[-90%] w-[18vw] md:w-7/12"
        />
      </div>
      <div className="ml-36 md:col-start-2 row-start-2 relative flex h-[8vh] w-[60vw] md:h-[12vh] md:w-[25vw] items-center rounded-3xl border-8 border-csa-gray-100 bg-white">
        <p className="ml-6 md:ml-8 text-3xl font-bold text-csa-gray-100">Social</p>
        <Image
          src={Pendant}
          alt="Pendant"
          className="absolute right-0 w-[20vw] md:w-[10vw]"
        />
      </div>


      <div className="md:ml-20 col-span-2 relative md:h-[12vh] md:w-[25vw] flex h-[8vh] w-[60vw] items-center rounded-3xl border-8 border-csa-red-100 bg-white">
        <p className="font-lora absolute right-2 p-4 text-3xl font-bold text-csa-gray-200">
          Culture
        </p>
        <Image
          src={redenvelope}
          alt="Red Envelope"
          className="absolute ml-2 w-[30vw] md:h-[300px] md:w-[260px] translate-x-[-34%] translate-y-[5%]"
        />
      </div>
      <div className="col-start-1 ml-36 md:ml-20 md:col-start-2 relative flex h-[8vh] w-[60vw] md:h-[12vh] md:w-[28vw] items-center rounded-3xl border-8 border-csa-yellow-100 bg-white">
        <p className="ml-8 text-3xl font-bold text-csa-gray-100">Academic</p>
        <Image
          src={gradCap}
          alt="gradCap"
          className="absolute  w-[36vw] translate-x-[80%] translate-y-[-9%] md:w-[24vw] md:translate-x-[30%] md:translate-y-[-9%]"
        />
      </div>
    </div>
    
  );
};

export default FourPillars
;
