import Image from "next/image";
import lantern from "@/public/about/lantern.svg";

const RightLantern = () => {
  return (
    <Image
      src={lantern}
      alt="Chinese Latnern"
      className="absolute right-0 -z-10 -translate-y-64 translate-x-6 scale-90"
    />
  );
};

export default RightLantern;
