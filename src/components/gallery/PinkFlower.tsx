import React from "react";
import Image from "next/image";
import pinkFlower from "@/public/gallery/pinkFlower.webp";

const PinkFlower = () => {
  return (
    <div>
      <Image
        src={pinkFlower}
        alt="pinkFlower"
        className="absolute bottom-0 left-0 translate-x-[-12.5%] translate-y-[12.5%] scale-75"
      />
    </div>
  );
};

export default PinkFlower;
