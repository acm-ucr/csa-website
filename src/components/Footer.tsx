"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import CsaLogo from "@/public/home/csalogo.svg";
import { icons } from "@/data/footerData";

const Footer = () => {
  const [, setClicked] = useState("Home");
  return (
    <div className="relative bottom-0 flex h-24 w-full items-center justify-between border-t-8 border-csa-yellow-100 bg-csa-red-200 align-bottom">
      <Link
        onClick={() => {
          setClicked("Home");
        }}
        href="/"
      >
        <Image src={CsaLogo} alt="CSA_Logo" className="left-0 mx-5 w-20" />
      </Link>

      <div className="absolute right-0 flex w-[30%] justify-evenly md:w-[20%]">
        {icons.map((icon, index) => (
          <Link
            href={icon.link}
            key={index}
            className="inline-flex items-center text-xl text-white hover:scale-150 hover:transform hover:cursor-pointer hover:text-csa-yellow-300"
          >
            {icon.image}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
