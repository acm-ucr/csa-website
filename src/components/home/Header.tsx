import React from "react";
import Image from "next/image";
import clouds_image from "public/home/clouds_home";

const Header = () => {
  return (
    <div className="relative mr-[10vw] border-r-8 border-csa-red-100 pr-[2vw] text-right">
      <Image
        src={clouds_image}
        alt="clouds on home page"
        className="absolute left-0 top-7 h-[263px] w-[900px]"
      />
      <div className="font-lora mb-8 flex flex-col border-csa-red-100 text-6xl font-bold text-csa-red-100">
        <p className="font-bold">Chinese Student</p>
        <p>Association</p>
      </div>
      <div className="font-lora flex flex-col text-xl font-semibold leading-relaxed">
        <p>Social, cultural, and service oriented </p>
        <p>organization that strives to promote the Chinese</p>
        <p>American Culture throughout the UCR and</p>
        <p>Riverside communities</p>
      </div>
    </div>
  );
};

export default Header;
