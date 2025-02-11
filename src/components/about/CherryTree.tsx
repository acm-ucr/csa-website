import React from "react";
import Image from "next/image";
import Tree from "@/public/about/cherryTree.webp";
import Tiger from "@/public/about/tiger.svg";

const CherryTree = () => {
  return (
    <div className="my-[30vh] flex flex-col">
      <div className="h-[1vh] w-[60vw] bg-csa-tan-300" />
      <div className="relative left-[0vw] top-[0vh]">
        <Image src={Tree} alt="Tree" className="scale-[100%] transform" />
      </div>
      <div className="absolute right-0 overflow-hidden">
        <div className="relative -bottom-[14vh] -right-[14vw]">
          <Image src={Tiger} alt="Tiger" className="scale-[90%] transform" />
        </div>
        <div className="h-[1vh] w-[60vw] bg-csa-tan-300" />
      </div>
    </div>
  );
};

export default CherryTree;
