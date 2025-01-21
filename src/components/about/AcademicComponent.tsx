import React from "react";
import Image from "next/image";
import gradCap from "@/public/about/gradCap.webp";

const Academic = () => {
  return (
    <div className="mr-28 flex justify-end">
      <div className="relative flex h-[12vh] w-[25vw] items-center rounded-3xl border-8 border-csa-yellow-100">
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
