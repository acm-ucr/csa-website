import Image from "next/image";
import React from "react";
import xinImage from "@/public/home/xinimage.svg";

const XinDescription = () => {
  return (
    <div className="grid grid-cols-1 items-center border-y-8 border-csa-tan-300 bg-csa-green-100 md:grid-cols-3">
      <p className="py-[6vh] pl-[4vw] text-left text-3xl text-white md:col-span-2 md:text-2xl">
        The Chinese character 心 ("xin") which stands for heart. The theme that
        we have been promoting is "Two Worlds, One Heart” which is a
        representation of our Chinese Heritage fused with the American Culture
        that defines the Chinese American.
      </p>
      <div className="relative flex items-center justify-center py-[6vh]">
        <div className="aspect-square w-[45vw] rounded-full border-8 border-csa-tan-200 bg-csa-tan-100 md:w-[16vw]"></div>
        <Image
          src={xinImage}
          alt="Xin_Image"
          className="absolute w-[35vw] md:w-[12vw]"
        />
      </div>
    </div>
  );
};

export default XinDescription;
