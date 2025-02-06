import React from "react";
import Image from "next/image";
import clouds_image from "@/public/home/clouds_home.webp";

const Header = () => {
  return (
    <div className="relative mr-[10vw] pt-[12.2vh] text-right md:pt-[14.4vh]">
      <Image
        src={clouds_image}
        alt="clouds on home page"
        className="absolute left-0 top-0 h-[263px] w-[900px]"
      />
      <div className="border-r-8 border-csa-red-100 pr-[2vw]">
        <div className="font-lora mb-8 flex flex-col text-6xl font-bold text-csa-red-100">
          <p className="font-bold">Chinese Student</p>
          <p>Association</p>
        </div>
        <div className="font-lora flex flex-col text-xl font-semibold leading-relaxed text-csa-gray-100">
          <p>Social, cultural, and service oriented </p>
          <p>organization that strives to promote the Chinese</p>
          <p>American Culture throughout the UCR and</p>
          <p>Riverside communities</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
