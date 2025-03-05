"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CsaLogo from "@/public/home/csalogo.webp";
import WebMarker from "@/public/home/webpageMarker.svg";
import { tags } from "@/data/navBarData";
import { AlignJustify } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="top-0 flex w-full items-center justify-between border-b-8 border-csa-yellow-100 bg-csa-red-200">
      <Link href="/">
        <Image
          src={CsaLogo}
          alt="CSA_Logo"
          className="left-0 mx-5 my-3 w-20 hover:opacity-70"
        />
      </Link>

      <div className="absolute right-0 hidden w-[45%] justify-evenly px-1 md:flex">
        {tags.map(({ link, name }, index) => (
          <Link
            href={link}
            key={index}
            className={`font-lora inline-flex items-center text-xl text-white hover:cursor-pointer hover:text-csa-yellow-300 ${
              name === "Join"
                ? "rounded-md bg-csa-yellow-100 px-6 py-2 hover:text-white hover:opacity-70"
                : ""
            }`}
          >
            {name}
            {pathname === link &&
              name !== "Gallery" &&
              name !== "Join" &&
              name !== "Events" && (
                <Image
                  src={WebMarker}
                  alt="WebMarker"
                  className="absolute mx-5 mt-12 w-4"
                />
              )}
            {pathname === link && name === "Gallery" && (
              <Image
                src={WebMarker}
                alt="WebMarker"
                className="absolute mx-7 mt-12 w-4"
              />
            )}
            {pathname === link && name === "Events" && (
              <Image
                src={WebMarker}
                alt="WebMarker"
                className="absolute mx-6 mt-12 w-4"
              />
            )}
          </Link>
        ))}
      </div>
      <input type="checkbox" id="mobile-menu" className="peer hidden" />
      <label
        htmlFor="mobile-menu"
        className="mr-3 text-3xl text-white hover:cursor-pointer md:hidden"
      >
        <AlignJustify />
      </label>
      <div className="absolute top-24 z-10 hidden w-full flex-col items-center justify-evenly bg-csa-red-200 peer-checked:flex md:hidden">
        {tags.map(({ link, name }, index) => (
          <Link
            href={link}
            key={index}
            className={`font-lora mb-4 inline-flex items-center text-xl text-white hover:cursor-pointer ${
              name === "Join" ? "rounded-md bg-csa-yellow-100 px-6 py-2" : ""
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
