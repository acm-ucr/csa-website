import React from "react";
import Image from "next/image";
import redenvelope from "@/public/about/envelope.webp";

const Culture = () => {
  return (
    <div className="m-12 flex">
      <div className="relative flex h-[12vh] w-[25vw] items-center rounded-3xl border-8 border-csa-red-100 bg-white">
        <p className="font-lora absolute right-2 p-4 text-3xl font-bold text-csa-gray-200">
          Culture
        </p>
        <Image
          src={redenvelope}
          alt="Red Envelope"
          className="absolute h-[300px] w-[260px] translate-x-[-34%] translate-y-[5%]"
        />
      </div>
    </div>
  );
};

export default Culture;
