import Image from "next/image";
import React from "react";
import xinImage from "@/public/home/xinimage.svg";

const XinDescription = () => {
  return (
    <div className="grid grid-cols-3 items-center border-y-8 border-csa-tan-300 bg-csa-green-100">
      <p className="col-span-2 py-[6vh] pl-[4vw] text-left text-2xl text-white">
        The Chinese character 心 ("xin") which stands for heart. The theme that
        we have been promoting is "Two Worlds, One Heart” which is a
        representation of our Chinese Heritage fused with the American Culture
        that defines the Chinese American.
      </p>
      <div className="flex items-center justify-center py-[6vh]">
        <div className="relative">
          <div className="h-52 w-52 rounded-full border-8 border-csa-tan-200 bg-csa-tan-100"></div>
          <Image
            src={xinImage}
            alt="Xin_Image"
            className="absolute right-6 top-4 w-40"
          />
        </div>
      </div>
    </div>
  );
};

export default XinDescription;
