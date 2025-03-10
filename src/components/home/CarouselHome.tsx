import Image from "next/image";
import CarouselCSA from "@/components/home/CarouselCSA";
import { carouselData } from "@/data/carouselData";
import branch from "@/public/home/Cherry_blossom.svg";
import pendant from "@/public/home/Jade_pendent.svg";

const CarouselHome = () => {
  return (
    <div className="relative my-[10%] flex flex-row">
      <Image
        src={branch}
        alt="cherry blossom"
        className="absolute bottom-[37%] right-[39.5%] z-40 h-[95%] w-[95%]"
      />
      <Image
        src={pendant}
        alt="jade pendant"
        className="absolute left-[50%] top-[40%] z-40 h-[80%] w-[80%] md:left-[40%]"
      />
      <div className="top-50 absolute -left-2 z-20 hidden h-full w-[20%] bg-csa-tan-400 md:flex" />
      <CarouselCSA photos={carouselData} />
      <div className="top-50 absolute -right-2 z-20 hidden h-full w-[20%] bg-csa-tan-400 md:flex" />
    </div>
  );
};

export default CarouselHome;
