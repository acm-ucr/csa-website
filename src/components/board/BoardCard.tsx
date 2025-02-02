import Image, { StaticImageData } from "next/image";
import redDiamond from "@/public/board/redDiamond.webp";
import brownDiamond from "@/public/board/brownDiamond.webp";
import beigeDiamond from "@/public/board/beigeDiamond.webp";
import greyDiamond from "@/public/board/greyDiamond.webp";

const diamondImages = [redDiamond, greyDiamond, beigeDiamond, brownDiamond];

interface BoardCardProps {
  image: StaticImageData;
  name: string;
  title: string;
  index: number;
}

const BoardCard: React.FC<BoardCardProps> = ({ image, name, title, index }) => {
  const diamondColor =
    diamondImages[Math.floor(index / 3) % diamondImages.length];
  return (
    <div className="">
      <div className="relative flex justify-center">
        <Image
          src={diamondColor}
          alt="redDiamond"
          className=""
          width={490}
          height={490}
        />
        <Image
          src={image}
          alt="picture of person"
          className="diamond absolute bottom-[19.4%] right-[31.7%]"
          width={300}
          height={300}
        />
      </div>
      <p
        className={
          "relative bottom-7 flex justify-center text-5xl text-csa-red-100"
        }
      >
        {name}
      </p>
      <p className="relative bottom-7 flex justify-center text-4xl text-csa-gray-100">
        {title}
      </p>
    </div>
  );
};

export default BoardCard;
