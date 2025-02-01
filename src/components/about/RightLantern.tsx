import Image from "next/image";
import lantern from "@/public/about/lantern.png";

const RightLantern = () => {
  return (
    <Image
      src={lantern}
      alt="Chinese Lantern"
      className="absolute right-0 top-[25vh] w-1/5 scale-x-[-1]"
    />
  );
};

export default RightLantern;
