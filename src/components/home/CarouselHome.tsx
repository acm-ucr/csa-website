import Image from "next/image";
import CarouselCSA from "@/components/home/CarouselCSA";
import { carouselData } from "@/data/carouselData";
import branch from "@/public/home/Cherry_blossom.webp";
import pendant from "@/public/home/Jade_pendent.webp";

const CarouselHome = () => {
  return (
    <div className="relative mb-[10%] mt-[10%] flex flex-row md:mb-0">
      <Image
        src={branch}
        alt="cherry blossom"
        className="absolute bottom-[65%] left-0 z-40 h-[60%] w-[30%] md:bottom-[62%] lg:bottom-[37%] lg:h-[95%] lg:w-[40%]"
      />
      <Image
        src={pendant}
        alt="jade pendant"
        className="absolute left-[72%] top-[40%] z-40 w-2/12 md:w-[12%]"
      />
      <div className="top-50 absolute -left-2 z-20 hidden h-full w-[20%] bg-csa-tan-400 md:flex" />
      <CarouselCSA photos={carouselData} />
      <div className="top-50 absolute -right-2 z-20 hidden h-full w-[20%] bg-csa-tan-400 md:flex" />
    </div>
  );
};

export default CarouselHome;
