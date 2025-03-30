import Image from "next/image";
import GroupImage from "@/public/board/Group-Photo-CSA.webp";
import WhiteFlower from "@/public/board/whiteflowers.webp";
import Ox from "@/public/board/ox.webp";

const GroupPhoto = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="relative flex items-center justify-center pb-8">
        <Image
          src={GroupImage}
          alt="Group Image"
          className="w-3/4 rounded-[2rem] border-8 border-csa-green-100"
        />
        <Image
          src={WhiteFlower}
          alt="White Flower"
          className="absolute bottom-0 left-0 w-1/5"
        />
      </div>
      <Image
        src={Ox}
        alt="Boar"
        className="absolute right-4 w-4/12 overflow-hidden md:right-0 md:-translate-y-4"
      />
    </div>
  );
};

export default GroupPhoto;
