import Image from "next/image";
import redDiamond from "@/public/board/redDiamond.webp";

const BoardCard = ({ image, name, title, color }) => {
  return (
    <div className="">
      <div className="mx-[10%] my-[5%] flex justify-center overflow-hidden transition duration-300 ease-in-out hover:scale-105">
        <Image src={redDiamond} alt="redDiamond" className="absolute" />
        <Image src={image} alt="picture of person" className="" />
      </div>
      <p className="flex justify-center text-center text-[90%] md:text-4xl">
        {name}
      </p>
      <p className="flex justify-center text-center text-[90%] md:text-4xl">
        {title}
      </p>
    </div>
  );
};
export default BoardCard;
