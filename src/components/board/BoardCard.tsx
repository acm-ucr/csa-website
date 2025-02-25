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
    <div className="flex flex-col text-center">
      <div className="relative flex justify-center">
        <Image src={diamondColor} alt="redDiamond" className="w-auto" />
        <Image
          src={image}
          alt="picture of person"
          className="diamond rotate-15 absolute bottom-[18%] right-[21.5%] aspect-square w-[55%] object-cover md:hidden"
        />
        <Image
          src={image}
          alt="picture of person"
          className="diamond absolute bottom-[19%] right-[18.2%] hidden w-[20vw] rotate-[.5deg] sm:w-[30vw] md:block md:w-[24vw] 2xl:bottom-[19.2%] 2xl:right-[21.5%] 2xl:w-[18vw]"
        />
      </div>
      <p className="relative bottom-7 flex justify-center text-3xl text-csa-red-100 md:text-4xl lg:text-5xl">
        {name}
      </p>
      <p className="relative bottom-4 flex justify-center text-2xl text-csa-gray-100 md:text-3xl lg:text-4xl">
        {title}
      </p>
    </div>
  );
};

export default BoardCard;
