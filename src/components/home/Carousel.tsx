"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface Photo {
  src: StaticImageData;
  alt: string;
}

interface CarouselProps {
  photos: Photo[];
}

const Carousel = ({ photos }: CarouselProps) => {
  const [currInd, setCurrInd] = useState<number>(0);

  const prevRev = () => {
    setCurrInd((prev) => (prev === 0 ? photos?.length - 1 : prev - 1));
  };

  const nextRev = () => {
    setCurrInd((prev) => (prev === photos?.length - 1 ? 0 : prev + 1));
  };

  const goToRev = (index: number) => {
    setCurrInd(index);
  };

  const getAdjacentIndex = (offset: number): number => {
    return (currInd + offset + photos?.length) % photos?.length;
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className="relative flex items-center justify-center w-full max-w-4xl">
        {/* left pic */}
        <motion.div
          className="absolute left-0 hidden md:block"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.5 }}
          onClick={prevRev}
        >
          <Image
            src={photos[getAdjacentIndex(-1)]?.src}
            alt={photos[getAdjacentIndex(-1)]?.alt}
            width={200}
            height={150}
            className="rounded-xl cursor-pointer"
          />
        </motion.div>

        {/* main pic */}
        <motion.div
          className="relative w-full max-w-2xl"
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={photos[currInd]?.src}
            alt={photos[currInd]?.alt}
            width={800}
            height={600}
            className="rounded-xl"
          />
        </motion.div>

        {/* right image */}
        <motion.div
          className="absolute right-0 hidden md:block"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 0.5 }}
          onClick={nextRev}
        >
          <Image
            src={photos[getAdjacentIndex(1)]?.src}
            alt={photos[getAdjacentIndex(1)]?.alt}
            width={200}
            height={150}
            className="rounded-xl cursor-pointer"
          />
        </motion.div>
      </div>

      {/* bottom dots */}
      <div className="flex mt-4 space-x-2">
        {photos.map((_, index: number) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currInd === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToRev(index)}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;