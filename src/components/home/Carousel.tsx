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

const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

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
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="relative flex w-full max-w-4xl items-center justify-center">
        {/* left pic */}
        <motion.div
          className="absolute left-0 z-10 hidden md:block"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={transition}
          onClick={prevRev}
        >
          <Image
            src={photos[getAdjacentIndex(-1)]?.src}
            alt={photos[getAdjacentIndex(-1)]?.alt}
            className="w-full max-w-2xl cursor-pointer rounded-xl"
          />
        </motion.div>

        {/* main pic */}
        <motion.div
          className="relative z-20 w-full max-w-2xl"
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={transition}
        >
          <Image
            src={photos[currInd]?.src}
            alt={photos[currInd]?.alt}
            className="rounded-xl"
          />
        </motion.div>

        {/* right pic */}
        <motion.div
          className="absolute right-0 z-10 hidden w-full max-w-2xl md:block"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={transition}
          onClick={nextRev}
        >
          <Image
            src={photos[getAdjacentIndex(1)]?.src}
            alt={photos[getAdjacentIndex(1)]?.alt}
            className="cursor-pointer rounded-xl"
          />
        </motion.div>
      </div>

      {/* dots */}
      <div className="mt-4 flex space-x-2">
        {photos.map((_, index: number) => (
          <motion.div
            key={index}
            className={`h-3 w-3 cursor-pointer rounded-full ${
              currInd === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToRev(index)}
            whileHover={{ scale: 1.2 }}
            transition={transition}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
