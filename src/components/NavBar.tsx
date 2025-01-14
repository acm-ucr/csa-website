"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CsaLogo from "@/public/home/csalogo.svg";
import WebMarker from "@/public/home/webpageMarker.svg";
import {tags} from "@/data/navBarData";


const Navigation = () => {
  const [clicked, setClicked] = useState("Home")
  return (
      <div className = "fixed top-0 w-full flex items-center justify-between border-b-8 border-csa-yellow-100 bg-csa-red-200 text-lg">
        <Link onClick= {() => {setClicked("")}} href= "/">
            <Image src= {CsaLogo} alt="Logo" className="left-0 md:w-[6%]"/>
        </Link>
        
        <div className = "absolute right-0 w-[80%] flex justify-evenly text-white text-xl">
          {tags.map((tag, index) => (
            <Link
              href={tag.link}
              key={index}
              onClick={() => {
                setClicked(tag.name);
              }}
              className= {`${tag.name == "Join" ? "inline-flex items-center px-6 py-2 bg-csa-yellow-100 rounded-md text-white" : "inline-flex items-center text-white"}`}
            >
              {tag.name}
              {clicked == tag.name && <Image src= {WebMarker} alt= "WebMarker" className= "absolute w-4 mx-5 mt-10"/>}
            </Link>
          ))}
        </div>
      </div>
  );
}

export default Navigation;