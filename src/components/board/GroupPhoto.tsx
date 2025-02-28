import Image from "next/image";
import GroupImage from "@/public/board/Group-Photo-CSA.webp";
import WhiteFlower from "@/public/board/whiteflowers.svg";
import Boar from "@/public/board/boar.svg";

const GroupPhoto = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="relative flex items-center justify-center">
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
      <div className="flex -translate-y-[6%] translate-x-[10%] items-center justify-end">
        <Image src={Boar} alt="Boar" className="w-11/12" />
      </div>
    </div>
  );
};

export default GroupPhoto;
