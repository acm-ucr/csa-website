import Title from "@/components/Title";
import Gallery from "@/components/gallery/Gallery";
import Image from "next/image";
import pinkFlower from "@/public/gallery/pinkFlower.webp";
import blueFlower from "@/public/gallery/blueFlower.webp";
import CarouselGallery from "@/components/gallery/CaroGallery";

const Page = () => {
  return (
    <div className="relative min-h-screen bg-csa-tan-100">
      <Title>gallery</Title>
      <CarouselGallery />
      <Gallery />
      <Image
        src={pinkFlower}
        alt="pinkFlower"
        className="absolute bottom-0 left-0 w-4/12 md:w-2/12"
      />
      <Image
        src={blueFlower}
        alt="blueFlower"
        className="absolute bottom-0 right-0 w-4/12 md:w-2/12"
      />
    </div>
  );
};

export default Page;
