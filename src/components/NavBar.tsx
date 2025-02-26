"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CsaLogo from "@/public/home/csalogo.svg";
import WebMarker from "@/public/home/webpageMarker.svg";
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
        <Image
          src={CsaLogo}
          alt="CSA_Logo"
          className="left-0 mx-5 my-3 w-20 hover:opacity-70"
        />
      </Link>

      <div className="absolute right-0 hidden w-[45%] justify-evenly px-1 md:flex">
        <Link
          href="/"
          onClick={handleMobile}
          className="font-lora inline-flex items-center text-xl text-white hover:cursor-pointer hover:text-csa-yellow-300"
        >
          Home
          {pathname === "/" && (
            <Image
              src={WebMarker}
              alt="WebMarker"
              className="absolute mx-5 mt-12 w-4"
            />
          )}
        </Link>

        <Link
          href="/about"
          onClick={handleMobile}
          className="font-lora inline-flex items-center text-xl text-white hover:cursor-pointer hover:text-csa-yellow-300"
        >
          About
          {pathname === "/about" && (
            <Image
              src={WebMarker}
              alt="WebMarker"
              className="absolute mx-5 mt-12 w-4"
            />
          )}
        </Link>

        <Link
          href="/board"
          onClick={handleMobile}
          className="font-lora inline-flex items-center text-xl text-white hover:cursor-pointer hover:text-csa-yellow-300"
        >
          Board
          {pathname === "/board" && (
            <Image
              src={WebMarker}
              alt="WebMarker"
              className="absolute mx-5 mt-12 w-4"
            />
          )}
        </Link>

        <Link
          href="/events"
          onClick={handleMobile}
          className="font-lora inline-flex items-center text-xl text-white hover:cursor-pointer hover:text-csa-yellow-300"
        >
          Events
          {pathname === "/events" && (
            <Image
              src={WebMarker}
              alt="WebMarker"
              className="absolute mx-5 mt-12 w-4"
            />
          )}
        </Link>

        <Link
          href="/gallery"
          onClick={handleMobile}
          className="font-lora inline-flex items-center text-xl text-white hover:cursor-pointer hover:text-csa-yellow-300"
        >
          Gallery
          {pathname === "/gallery" && (
            <Image
              src={WebMarker}
              alt="WebMarker"
              className="absolute mx-5 mt-12 w-4"
            />
          )}
        </Link>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSc1Pg6_e3kE0Z6R51IhcxjtpPt-KWFnyKupL6Rsbr5oV56mxQ/viewform?fbclid=IwY2xjawHziIVleHRuA2FlbQIxMAABHdhqO6Ha7G-89kHFZcMLQhj6lfUZpnaG9T7KXk9S2JyAbfVVOTArq1nFBw_aem_FBe8BJ3j--WGCERMAWHsHQ"
          onClick={handleMobile}
          className="font-lora inline-flex items-center rounded-md bg-csa-yellow-100 px-6 py-2 text-xl text-white hover:cursor-pointer hover:text-csa-yellow-300 hover:text-white hover:opacity-70"
        >
          Join
        </Link>
      </div>

      <div
        className={`absolute top-24 z-10 w-full flex-col items-center justify-evenly bg-csa-red-200 md:hidden ${
          mobileScreen ? "flex" : "hidden"
        }`}
      >
        <Link
          href="/"
          onClick={handleMobile}
          className="font-lora mb-4 inline-flex items-center text-xl text-white hover:cursor-pointer"
        >
          Home
        </Link>

        <Link
          href="/about"
          onClick={handleMobile}
          className="font-lora mb-4 inline-flex items-center text-xl text-white hover:cursor-pointer"
        >
          About
        </Link>

        <Link
          href="/board"
          onClick={handleMobile}
          className="font-lora mb-4 inline-flex items-center text-xl text-white hover:cursor-pointer"
        >
          Board
        </Link>

        <Link
          href="/events"
          onClick={handleMobile}
          className="font-lora mb-4 inline-flex items-center text-xl text-white hover:cursor-pointer"
        >
          Events
        </Link>

        <Link
          href="/gallery"
          onClick={handleMobile}
          className="font-lora mb-4 inline-flex items-center text-xl text-white hover:cursor-pointer"
        >
          Gallery
        </Link>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSc1Pg6_e3kE0Z6R51IhcxjtpPt-KWFnyKupL6Rsbr5oV56mxQ/viewform?fbclid=IwY2xjawHziIVleHRuA2FlbQIxMAABHdhqO6Ha7G-89kHFZcMLQhj6lfUZpnaG9T7KXk9S2JyAbfVVOTArq1nFBw_aem_FBe8BJ3j--WGCERMAWHsHQ"
          onClick={handleMobile}
          className="font-lora mb-4 inline-flex items-center rounded-md bg-csa-yellow-100 px-6 py-2 text-xl text-white hover:cursor-pointer"
        >
          Join
        </Link>
      </div>

      <div onClick={handleMobile}>
        <AlignJustify className="mr-3 flex text-3xl text-white hover:cursor-pointer md:hidden" />
      </div>
    </div>
  );
};

export default Navigation;
