import React from "react";
import Image from "next/image";
import gradCap from "@/public/about/gradCap.webp";

const Academic = () => {
  return (
    <div className="relative ml-auto mr-28 flex h-[11.9vh] w-[25vw] items-center justify-center rounded-3xl bg-csa-yellow-200">
      <div className="absolute flex h-[10.3vh] w-[24vw] items-center rounded-3xl bg-white">
        <p className="ml-8 text-6xl font-bold text-csa-gray-100">Academic</p>
        <Image
          src={gradCap}
          alt="gradCap"
          className="absolute translate-x-[20%] translate-y-[-9%]"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Academic;
