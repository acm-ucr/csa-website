import React from "react";
import Image from "next/image";
import lanterns from "@/public/notfound/404lanterns.svg";

const LanternBackground = () => {
  return (
    <div className="absolute right-0 top-8 h-[840px] w-[600px] opacity-100">
      <Image
        src={lanterns}
        alt="Lanterns background"
        layout="fill"
        objectFit="contain"
        className="absolute"
      />
    </div>
  );
};

export default LanternBackground;
