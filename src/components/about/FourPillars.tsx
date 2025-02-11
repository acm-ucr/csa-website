import React from "react";
import Image from "next/image";
import HeartImage from "@/public/about/heart.svg";
import Pendant from "@/public/about/pendant.webp";
import redenvelope from "@/public/about/envelope.webp";
import gradCap from "@/public/about/gradCap.webp";

const FourPillars = () => {
  return (
    <div className="grid grid-cols-2 justify-items-start gap-7 sm:gap-6 md:gap-20">
      <div className="ml-5 relative col-span-2 flex h-[8vh] w-[64vw] sm:w-[48vw] items-center rounded-3xl border-8 border-csa-green-100 bg-white md:ml-20 md:h-[12vh] md:w-[42vw]">
        <p className="font-lora p-4 lg:text-4xl text-3xl font-bold text-csa-gray-200">
          Philanthropy
        </p>
        <Image
          src={HeartImage}
          alt="heartImage"
          className="absolute right-[-20%] top-[-100%] sm:right-[-20%] sm:top-[-130%] lg:top-[-120%] lg:w-[14vw] sm:w-[18vw] md:w-[18vw] w-[24vw] md:right-[-20%] md:top-[-60%]"
        />
      </div>
      <div className="ml-44 relative row-start-2 sm:ml-96 md:ml-2 flex sm:[60vw] h-[8vh] w-[50vw] sm:w-[42vw] md:w-[42vw] items-center rounded-3xl border-8 border-csa-gray-100 bg-white md:col-start-2 md:h-[12vh] ">
        <p className="ml-6 lg:text-4xl text-3xl font-bold text-csa-gray-100 md:ml-8">
          Social
        </p>
        <Image
          src={Pendant}
          alt="Pendant"
          className="absolute right-0 w-[20vw] md:w-[15vw] lg:w-[9vw]"
        />
      </div>

      <div className="ml-5 relative col-span-2 flex h-[8vh] w-[64vw] sm:w-[48vw] items-center rounded-3xl border-8 border-csa-red-100 bg-white md:ml-20 md:h-[12vh] md:w-[42vw]">
        <p className="font-lora lg:text-4xl absolute right-2 p-4 text-3xl font-bold text-csa-gray-200">
          Culture
        </p>
        <Image
          src={redenvelope}
          alt="Red Envelope"
          className="absolute ml-5 w-[30vw] md:w-[24vw] sm:w-[24vw] sm:translate-x-[-20%] lg:w-[14vw] translate-x-[-34%] translate-y-[5%] md:ml-3 "
        />
      </div>
      <div className="relative ml-24 col-start-1 sm:w-[48vw] sm:ml-80 md:ml-3 flex h-[8vh] w-[72vw] items-center rounded-3xl border-8 border-csa-yellow-100 bg-white md:col-start-2 md:h-[12vh] md:w-[40vw]">
        <p className="ml-6 sm:ml-8  text-3xl font-bold lg:text-4xl text-csa-gray-100">Academic</p>
        <Image
          src={gradCap}
          alt="gradCap"
          className="absolute w-[42vw] translate-y-[-12%]  translate-x-[80%] sm:translate-x-[40%] sm:translate-y-[-9%] md:w-[28vw] md:translate-x-[60%] md:translate-y-[-9%] lg:translate-x-[120%] lg:w-[18vw]"
        />
      </div>
    </div>
  );
};

export default FourPillars;
