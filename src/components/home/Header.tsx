import React from "react";
import Image from "next/image";
import cloudsImage_csa from "@/public/home/cloudsImage_csa.svg"

const Header = () => {
  return (
    <div className="relative mx-auto h-[284px] max-w-xl border-r-8 border-csa-red-100 px-4 py-6 text-right">
      <Image 
        src={cloudsImage_csa} 
        alt="front_page_clouds" 
        className="absolute left-0 top-0 w-full h-[263px] object-cover" 
      />
      <p className="mb-8 font-bodoni text-2xl font-bold border-csa-red-100 md:text-6xl">
        Chinese Student
        <br />
        Association
      </p>

      <p className="text-4.5 max-3-3xl mx-auto font-Lora font-semibold leading-relaxed border-csa-gray-100 md:text-xl">
        Social, cultural, and service oriented
        <br />
        organization that strives to promote the Chinese
        <br />
        American Culture throughout the UCR and
        <br />
        Riverside communities
      </p>
    </div>
  );
};

export default Header;
