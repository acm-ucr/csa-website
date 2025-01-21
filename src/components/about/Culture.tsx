import React from "react";
import Image from "next/image";
import redenvelope from "@/public/about/envelope.webp";

const Culture = () => {
  return (
    <div className="ml-28 flex justify-start">
      <div className="relative flex h-[12vh] w-[25vw] items-center rounded-3xl border-8 border-csa-red-100 bg-white">
        <p className="absolute right-6 text-5xl font-bold text-csa-gray-200">
          Culture
        </p>
        <Image
          src={redenvelope}
          alt="Red Envelope"
          className="absolute h-[340px] w-[230px] translate-x-[-40%] translate-y-[5%]"
        />
      </div>
    </div>
  );
};

export default Culture;
