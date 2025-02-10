"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CsaLogo from "@/public/home/csalogo.svg";
import WebMarker from "@/public/home/webpageMarker.svg";
import { tags } from "@/data/navBarData";
import { AlignJustify } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();
  const [mobileScreen, setMobile] = useState(false);

  const handleMobile = () => {
    setMobile(!mobileScreen);
  };

  return (
    <div className="top-0 flex w-full items-center justify-between border-b-8 border-csa-yellow-100 bg-csa-red-200">
      <Link href="/" onClick={handleMobile}>
        <Image src={CsaLogo} alt="CSA_Logo" className="left-0 mx-5 my-3 w-20" />
      </Link>

      <div className="absolute right-0 hidden w-[45%] justify-evenly px-1 md:flex">
        {tags.map((tag, index) => (
          <Link
            href={tag.link}
            key={index}
            onClick={handleMobile}
            className={`font-lora inline-flex items-center text-xl hover:cursor-pointer ${
              tag.name === "Join"
                ? "rounded-md bg-csa-yellow-100 px-6 py-2 text-white"
                : "text-white"
            }`}
          >
            {tag.name}
            {pathname === tag.link && (
              <Image
                src={WebMarker}
                alt="WebMarker"
                className="absolute mx-5 mt-12 w-4"
              />
            )}
          </Link>
        ))}
      </div>

      <div
        className={`fixed top-24 z-10 w-full flex-col items-center justify-evenly bg-csa-red-200 md:hidden ${
          mobileScreen ? "flex" : "hidden"
        }`}
      >
        {tags.map((tag, index) => (
          <Link
            href={tag.link}
            key={index}
            onClick={handleMobile}
            className={`font-lora mb-4 inline-flex items-center text-xl text-white hover:cursor-pointer ${
              tag.name === "Join"
                ? "rounded-md bg-csa-yellow-100 px-6 py-2"
                : ""
            }`}
          >
            {tag.name}
          </Link>
        ))}
      </div>

      <div onClick={handleMobile}>
        <AlignJustify className="mr-3 flex text-3xl text-white hover:cursor-pointer md:hidden" />
      </div>
    </div>
  );
};

export default Navigation;
