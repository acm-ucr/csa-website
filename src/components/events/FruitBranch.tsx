import React from "react";
import Image from "next/image";
import fruitBranch from "@/public/home/fruitBranch.svg";
const FruitBranch = () => {
  return (
    <Image
      src={fruitBranch}
      alt="Fruit Branch"
      className="positioning absolute right-0 -z-10"
    />
  );
};

export default FruitBranch;
