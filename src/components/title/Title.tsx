import React from "react";
import Image from "next/image";
import banner from "@/public/home/banner.svg";

interface TitleNameProps {
  text: string;
}

const Title: React.FC<TitleNameProps> = ({ text }) => {
  return (
    <div className="relative mt-1 flex items-center justify-center">
      <div className="mr-4 mt-4 h-[.7vh] w-[20vw] bg-[#6F7765]" />
      <Image src={banner} alt="Banner" className="h-1/3 w-1/3 object-cover" />
      <div className="absolute mt-4 flex justify-center">
        <svg
          width="3/4vw"
          height="3/4vw"
          viewBox="0 0 400 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="curve"
            d="M50,150 Q200,30 350,150"
            fill="transparent"
            stroke="none"
          />

          <text
            fill="#7C2413"
            font-size="7vw"
            font-weight="bold"
            font-family="serif"
          >
            <textPath href="#curve" startOffset="50%" text-anchor="middle">
              {text}
            </textPath>
          </text>
        </svg>{" "}
      </div>

      <div className="ml-4 mt-4 h-[.7vh] w-[20vw] bg-[#6F7765]" />
    </div>
  );
};

export default Title;
