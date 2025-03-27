import Image from "next/image";
import fruitBranch from "@/public/events/fruitBranch.webp";
const FruitBranch = () => {
  return (
    <Image
      src={fruitBranch}
      alt="Fruit Branch"
      className="absolute right-0 w-2/12 -translate-y-[1.5vh]"
    />
  );
};

export default FruitBranch;
