import React from "react";
import Image from "@/public/about/heart.svg";

const Philanthropy = () => {
  return (
    <div className="relative grid grid-cols-4 p-6">
      <div className="col-span-2 flex items-center rounded-3xl border-8 border-csa-gray-200 p-2">
        <p className="font-lora p-4 text-left text-5xl font-bold text-csa-gray-200">
          Philanthropy
        </p>
        <div
          className="absolute left-1/2"
          style={{ transform: "translateY(5%) translateX(-50%)" }}
        >
          <img src={Image.src} alt="heart" className="h-3/4 w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Philanthropy;
