import Image from "next/image";
import Pendant from "@/public/about/pendant.webp";

const Social = () => {
  return (
    <div className="flex justify-end">
      <div className="relative mr-[8vw] flex h-[12vh] w-[25vw] items-center rounded-3xl border-8 border-csa-gray-100">
        <p className="ml-8 text-3xl font-bold text-csa-gray-100">Social</p>
        <Image
          src={Pendant}
          alt="Pendant"
          className="absolute right-0 w-[9vw]"
        />
      </div>
    </div>
  );
};

export default Social;
