import React from "react";
import Image from "next/image";
import Lantern from "@/public/about/lantern.svg";

const Social = () => {
  return (
    <div className="relative ml-auto mr-16 flex h-[12vh] w-[25vw] items-center justify-center rounded-3xl bg-csa-gray-100">
      <div className="absolute flex h-[10.5vh] w-[24.2vw] items-center rounded-3xl bg-white">
        <p className="ml-8 text-3xl font-bold text-csa-gray-100">Social</p>
        <Image
          src={Lantern}
          alt="Lantern"
          className="absolute right-5 w-24 -rotate-12"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Social;
