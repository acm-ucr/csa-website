"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CsaLogo from "@/public/home/csalogo.webp";
import WebMarker from "@/public/home/webpageMarker.svg";
import { tags } from "@/data/navBar";
import { AlignJustify } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();

  const classes: { [key: string]: string } = {
    Home: "mx-5",
    About: "mx-5",
    Board: "mx-5",
    Events: "mx-6",
    Gallery: "mx-7",
  };

  return (
    <div className="top-0 z-50 flex w-full items-center justify-between border-b-8 border-csa-yellow-100 bg-csa-red-200">
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
            {pathname === link && (
              <Image
                src={WebMarker}
                alt="WebMarker"
                className={`absolute ${classes[name]} mt-12 w-4`}
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
      <div className="absolute top-24 z-50 hidden w-full flex-col items-center justify-evenly bg-csa-red-200 peer-checked:flex md:hidden">
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
