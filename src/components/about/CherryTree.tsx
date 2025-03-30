import Image from "next/image";
import Tree from "@/public/about/cherryTree.webp";
import Tiger from "@/public/about/tiger.webp";

const CherryTree = () => {
  return (
    <div className="my-[10vh] flex flex-col">
      <div className="h-[1vh] w-[60vw] bg-csa-tan-300" />
      <div className="relative left-0 top-0">
        <Image src={Tree} alt="Tree" className="scale-[100%] transform" />
      </div>
      <div className="absolute right-0 h-full overflow-hidden">
        <div className="relative -bottom-[29vh] -right-[20vw] md:-bottom-[26vh] lg:-bottom-[6vh] lg:-right-[17vw]">
          <Image src={Tiger} alt="Tiger" className="scale-[60%] transform" />
        </div>
      </div>
      <div className="relative mt-[20vh] lg:mt-[15vh]">
        <div className="absolute right-0 h-[1vh] w-[60vw] bg-csa-tan-300" />
      </div>
    </div>
  );
};

export default CherryTree;
