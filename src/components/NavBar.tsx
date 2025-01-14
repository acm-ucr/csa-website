"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CsaLogo from "@/public/home/csalogo.svg";
import WebMarker from "@/public/home/webpageMarker.svg";
import { tags } from "@/data/navBarData";

const Navigation = () => {
  const [clicked, setClicked] = useState("Home");
  return (
    <div className="fixed top-0 flex w-full items-center justify-between border-b-8 border-csa-yellow-100 bg-csa-red-200 text-lg">
      <Link
        onClick={() => {
          setClicked("");
        }}
        href="/"
      >
        <Image src={CsaLogo} alt="Logo" className="left-0 w-20 mx-5"/>
      </Link>

      <div className="absolute right-0 flex w-[80%] justify-evenly">
        {tags.map((tag, index) => (
          <Link
            href={tag.link}
            key={index}
            onClick={() => {
              setClicked(tag.name);
            }}
            className={`inline-flex items-center text-xl font-lora ${tag.name == "Join" ? "rounded-md bg-csa-yellow-100 px-6 py-2 text-white" : "text-white"}`}
          >
            {tag.name}
            {clicked == tag.name && (
              <Image
                src={WebMarker}
                alt="WebMarker"
                className="absolute mx-5 mt-10 w-4"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
