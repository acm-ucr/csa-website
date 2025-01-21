import React from "react";
import Image from "next/image";
import HeartImage from "@/public/about/heart.svg";

const Philanthropy = () => {
  return (
    <div className="m-6 flex">
      <div className="relative flex h-[12vh] w-[25vw] items-center rounded-3xl border-8 border-csa-green-100">
        <p className="font-lora p-4 text-5xl font-bold text-csa-gray-200">
          Philanthropy
        </p>
        <Image src={HeartImage} alt="heartImage" className="w-7/12 absolute right-[-40%] top-[-90%]" />
      </div>
    </div>
  );
};

export default Philanthropy;
