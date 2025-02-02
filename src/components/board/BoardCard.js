import Image from "next/image";
import redDiamond from "@/public/board/redDiamond.webp";

const BoardCard = ({ image, name, title, color }) => {
  return (
    <div className="">
      <div className="= flex justify-center">
        <Image
          src={redDiamond}
          alt="redDiamond"
          className=""
          width={600}
          height={600}
        />
        <Image
          src={image}
          alt="picture of person"
          className="absolute object-cover"
          width={300}
          height={300}
        />
      </div>
      <p
        className={`flex justify-center text-center text-3xl text-[90%] md:text-4xl ${color}`}
      >
        {name}
      </p>
      <p className="flex justify-center text-center text-2xl text-[90%] md:text-4xl">
        {title}
      </p>
    </div>
  );
};
export default BoardCard;
