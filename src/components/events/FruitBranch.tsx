import React from "react";
import Image from "next/image";
import fruitBranch from "@/public/events/fruitBranch.svg";
const FruitBranch = () => {
  return (
    <Image
      src={fruitBranch}
      alt="Fruit Branch"
      className="absolute right-0 -z-10 w-1/4"
    />
  );
};

export default FruitBranch;
