import React from "react";
import Image from "next/image";
import Tree from "@/public/about/cherryTree.webp";

const CherryTree = () => {
  return (
    <div className="p-16">
      <Image
        src={Tree}
        alt="Tree"
        className="absolute left-0 top-56 w-[28vw]"
      />
    </div>
  );
};

export default CherryTree;
