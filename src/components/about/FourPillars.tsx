import Image from "next/image";
import HeartImage from "@/public/about/heart.svg";
import Pendant from "@/public/about/pendant.webp";
import redenvelope from "@/public/about/envelope.webp";
import gradCap from "@/public/about/gradCap.webp";

const FourPillars = () => {
  return (
    <div>
      <div className="mt-10 flex flex-col">
        <p className="ml-[7%] mr-[6%] text-right text-5xl font-semibold text-csa-red-100">
          Four Pillars
        </p>
        <div className="ml-auto mr-[6%] h-2 w-[9%] bg-csa-tan-300"></div>
      </div>

      <div className="mt-12 grid grid-cols-2 justify-items-start gap-7 overflow-x-clip pb-10 sm:gap-6 md:gap-20 lg:overflow-visible">
        <div className="relative col-span-2 ml-5 flex h-[8vh] w-[64vw] items-center rounded-3xl border-8 border-csa-green-100 bg-white sm:w-[48vw] md:ml-20 md:h-[12vh] md:w-[42vw]">
          <p className="font-lora p-4 text-3xl font-bold text-csa-gray-200 lg:text-4xl">
            Philanthropy
          </p>
          <Image
            src={HeartImage}
            alt="heartImage"
            className="absolute right-[-10%] top-[-80%] w-[18vw] sm:right-[-20%] sm:top-[-130%] sm:w-[18vw] md:right-[-20%] md:top-[-60%] md:w-[18vw] lg:top-[-120%] lg:w-[14vw]"
          />
        </div>
        <div className="relative row-start-2 ml-40 flex h-[8vh] w-[53vw] items-center rounded-3xl border-8 border-csa-gray-100 bg-white sm:ml-80 sm:w-[42vw] md:col-start-2 md:ml-2 md:h-[12vh] md:w-[42vw]">
          <p className="ml-4 text-3xl font-bold text-csa-gray-200 md:ml-8 lg:text-4xl">
            Social
          </p>
          <Image
            src={Pendant}
            alt="Pendant"
            className="absolute right-0 w-[20vw] md:w-[15vw] lg:w-[9vw]"
          />
        </div>

        <div className="relative col-span-2 ml-5 flex h-[8vh] w-[64vw] items-center rounded-3xl border-8 border-csa-red-100 bg-white sm:w-[48vw] md:ml-20 md:h-[12vh] md:w-[42vw]">
          <p className="font-lora absolute right-2 p-4 text-3xl font-bold text-csa-gray-200 lg:text-4xl">
            Culture
          </p>
          <Image
            src={redenvelope}
            alt="Red Envelope"
            className="absolute ml-5 w-[30vw] translate-x-[-34%] translate-y-[5%] sm:w-[24vw] sm:translate-x-[-20%] md:ml-3 md:w-[24vw] lg:w-[14vw]"
          />
        </div>
        <div className="relative col-start-1 ml-44 flex h-[8vh] w-[50vw] items-center rounded-3xl border-8 border-csa-yellow-100 bg-white sm:ml-80 sm:w-[42vw] md:col-start-2 md:ml-3 md:h-[12vh] md:w-[42vw]">
          <p className="ml-6 text-3xl font-bold text-csa-gray-200 md:ml-8 lg:text-4xl">
            Academic
          </p>
          <Image
            src={gradCap}
            alt="gradCap"
            className="absolute w-[42vw] translate-x-[40%] translate-y-[-12%] sm:translate-x-[40%] sm:translate-y-[-9%] md:w-[28vw] md:translate-x-[60%] md:translate-y-[-9%] lg:w-[18vw] lg:translate-x-[120%]"
          />
        </div>
      </div>
    </div>
  );
};

export default FourPillars;
