import React from "react";
import Image from "next/image";
import Tree from "@/public/about/cherryTree.webp";
import Tiger from "@/public/about/tiger.svg";

const CherryTree = () => {
  return (
    <div className="my-32 flex max-w-full flex-col">
      <div className="overflow-hidden">
        <div className="h-[1vh] w-[60vw] bg-csa-tan-300" />
        <div className="relative -left-[16vw] -top-[44vh] md:-left-[4vw] md:-top-[40vh]">
          <Image
            src={Tree}
            alt="Tree"
            className="scale-[70%] transform md:scale-[90%]"
          />
        </div>
      </div>
      <div className="absolute right-0 overflow-hidden">
        <div className="relative -bottom-[22vh] -right-[25vw] md:-bottom-[14vh] md:-right-[14vw]">
          <Image
            src={Tiger}
            alt="Tiger"
            className="scale-[50%] transform md:scale-[90%]"
          />
        </div>
        <div className="relative -right-[40vw] h-[1vh] w-[60vw] bg-csa-tan-300 md:right-0" />
      </div>
    </div>
  );
};

export default CherryTree;
