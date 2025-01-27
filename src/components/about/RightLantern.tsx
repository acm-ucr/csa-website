import Image from "next/image";
import lantern from "@/public/about/lantern.svg";

const RightLantern = () => {
  return (
    <Image
      src={lantern}
      alt="Chinese Lantern"
      className="absolute right-0 top-[25vh] w-2/12"
    />
  );
};

export default RightLantern;
