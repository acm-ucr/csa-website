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
          className="z-10 absolute left-0 hidden md:block"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={transition}
          onClick={prevRev}
        >
          <Image
            src={photos[getAdjacentIndex(-1)]?.src}
            alt={photos[getAdjacentIndex(-1)]?.alt}
            className="rounded-xl w-full max-w-2xl cursor-pointer"
          />
        </motion.div>

        {/* main pic */}
        <motion.div
          className="z-20 relative w-full max-w-2xl"
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
          className="z-10 absolute right-0 w-full max-w-2xl hidden md:block"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={transition}
          onClick={nextRev}
        >
          <Image
            src={photos[getAdjacentIndex(1)]?.src}
            alt={photos[getAdjacentIndex(1)]?.alt}
            className="rounded-xl cursor-pointer"
          />
        </motion.div>
      </div>

      {/* dots */}
      <div className="flex mt-4 space-x-2">
        {photos.map((_, index: number) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
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