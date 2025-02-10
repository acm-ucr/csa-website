import React from "react";
import Image from "next/image";
import HeartImage from "@/public/about/heart.svg";

const Philanthropy = () => {
  return (
    <div className="m-6 flex">
      <div className="relative flex h-[12vh] w-[50vw] items-center rounded-3xl border-8 border-csa-green-100 md:w-[25vw]">
        <p className="font-lora p-4 text-2xl font-bold text-csa-gray-200 md:text-3xl">
          Philanthropy
        </p>
        <Image
          src={HeartImage}
          alt="heartImage"
          className="absolute right-[-40%] top-[-90%] w-7/12"
        />
      </div>
    </div>
  );
};

export default Philanthropy;
