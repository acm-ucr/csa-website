import Image from "next/image";
import CarouselCSA from "@/components/home/CarouselCSA";
import { carouselData } from "@/data/carouselDataGallery";
import rabbit from "@/public/gallery/ChineseRabbit.webp";
import bamboo from "@/public/gallery/Bamboo.webp";

const CarouselGallery = () => {
  return (
    <div className="relative mb-[5%] mt-[2%] flex flex-row">
      <Image
        src={rabbit}
        alt="rabbit"
        className="absolute bottom-[-13%] left-[2%] z-40 h-[50%] w-[30%] md:left-[12%]"
      />
      <Image
        src={bamboo}
        alt="bamboo"
        className="absolute bottom-[13%] left-[54%] z-40 h-[87%] w-[40%] md:left-[46.5%]"
      />
      <div className="top-50 absolute -left-2 z-20 hidden h-full w-[20%] bg-csa-tan-100 md:flex" />
      <CarouselCSA photos={carouselData} />
      <div className="top-50 absolute z-20 hidden h-full w-[20%] bg-csa-tan-100 md:flex" />
    </div>
  );
};

export default CarouselGallery;
