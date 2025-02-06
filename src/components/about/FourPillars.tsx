import React from "react";
import Image from "next/image";
import HeartImage from "@/public/about/heart.svg";
import Pendant from "@/public/about/pendant.webp";
import redenvelope from "@/public/about/envelope.webp";
import gradCap from "@/public/about/gradCap.webp";

const FourPillars = () => {
  return (
    <div className="grid grid-cols-2 justify-items-start gap-6 md:gap-20">
      <div className="relative col-span-2 flex h-[8vh] w-[60vw] items-center rounded-3xl border-8 border-csa-green-100 bg-white md:ml-20 md:h-[12vh] md:w-[25vw]">
        <p className="font-lora p-4 text-3xl font-bold text-csa-gray-200">
          Philanthropy
        </p>
        <Image
          src={HeartImage}
          alt="heartImage"
          className="absolute right-[-20%] top-[-40%] w-[18vw] md:right-[-40%] md:top-[-90%] md:w-7/12"
        />
      </div>
      <div className="relative row-start-2 ml-36 flex h-[8vh] w-[60vw] items-center rounded-3xl border-8 border-csa-gray-100 bg-white md:col-start-2 md:h-[12vh] md:w-[25vw]">
        <p className="ml-6 text-3xl font-bold text-csa-gray-100 md:ml-8">
          Social
        </p>
        <Image
          src={Pendant}
          alt="Pendant"
          className="absolute right-0 w-[20vw] md:w-[10vw]"
        />
      </div>

      <div className="relative col-span-2 flex h-[8vh] w-[60vw] items-center rounded-3xl border-8 border-csa-red-100 bg-white md:ml-20 md:h-[12vh] md:w-[25vw]">
        <p className="font-lora absolute right-2 p-4 text-3xl font-bold text-csa-gray-200">
          Culture
        </p>
        <Image
          src={redenvelope}
          alt="Red Envelope"
          className="absolute ml-2 w-[30vw] translate-x-[-34%] translate-y-[5%] md:h-[300px] md:w-[260px]"
        />
      </div>
      <div className="relative col-start-1 ml-36 flex h-[8vh] w-[60vw] items-center rounded-3xl border-8 border-csa-yellow-100 bg-white md:col-start-2 md:ml-20 md:h-[12vh] md:w-[28vw]">
        <p className="ml-8 text-3xl font-bold text-csa-gray-100">Academic</p>
        <Image
          src={gradCap}
          alt="gradCap"
          className="absolute w-[36vw] translate-x-[80%] translate-y-[-9%] md:w-[24vw] md:translate-x-[30%] md:translate-y-[-9%]"
        />
      </div>
    </div>
  );
};

export default FourPillars;
