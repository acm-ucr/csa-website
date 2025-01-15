"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CsaLogo from "@/public/home/csalogo.svg";
import WebMarker from "@/public/home/webpageMarker.svg";
import { tags } from "@/data/navBarData";
import { AlignJustify } from 'lucide-react';

const Navigation = () => {
  const [clicked, setClicked] = useState("Home");
  const [mobileScreen, setMobile] = useState(false);
 
  const handleMobile = () => {
    setMobile(!mobileScreen)
  }

  return (
    <div className="fixed top-0 flex w-full items-center justify-between border-b-8 border-csa-yellow-100 bg-csa-red-200">
      <Link
        onClick={() => {
          setClicked("");
        }}
        href="/"
      >
        <Image src={CsaLogo} alt="Logo" className="left-0 mx-5 my-3 w-20" />
      </Link>

      <div className="absolute right-0 hidden md:flex w-[80%] justify-evenly">
        {tags.map((tag, index) => (
          <Link
            href={tag.link}
            key={index}
            onClick={() => {
              setClicked(tag.name);
            }}
            className={`hover:cursor-pointer font-lora inline-flex items-center text-xl ${tag.name == "Join" ? "rounded-md bg-csa-yellow-100 px-6 py-2 text-white" : "text-white"}`}
          >
            {tag.name}
            {clicked == tag.name && (
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
        className={
          mobileScreen
            ? "fixed top-10 -z-10 flex w-full flex-col items-center justify-evenly md:hidden bg-csa-red-200"
            : "fixed hidden"
        }
      >
        {tags.map((tag, index) => (
          <Link
            href={tag.link}
            key={index}
            onClick={() => {
              setClicked(tag.name);
              handleMobile();
            }}
            className={`hover:cursor-pointer mb-4 font-lora inline-flex items-center text-xl text-white ${tag.name == "Join" && "rounded-md bg-csa-yellow-100 px-6 py-2 text-white"}`}
          >
            {tag.name}
          </Link>
        ))}
      </div>
      <div onClick={handleMobile}>
        <AlignJustify className= "flex justify-self-end mr-3 md:hidden text-3xl text-white hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default Navigation;
