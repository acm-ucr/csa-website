"use client";
import Image, { StaticImageData } from "next/image";
import { useState, RefObject, useEffect } from "react";
import { motion, AnimatePresence, Variant } from "framer-motion";

interface Photo {
  src: StaticImageData;
  alt: string;
}

interface CarouselProps {
  photos: Photo[];
}

const transition = {
  duration: 0.6,
  ease: [0.42, 0, 0.58, 1]
};

const Carousel = ({ photos }: CarouselProps) => {
  const [currInd, setCurrInd] = useState<number>(0);

  const prevRev = () => {
    setCurrInd((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextRev = () => {
    setCurrInd((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div className="relative flex w-full max-w-4xl items-center justify-center">
        {/* Left Pic */}
        <motion.div
          className="absolute left-0 z-10 hidden md:block"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={transition}
          onClick={prevRev}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={photos[(currInd - 1 + photos.length) % photos.length].src}
            alt={photos[(currInd - 1 + photos.length) % photos.length].alt}
            className="w-full max-w-2xl cursor-pointer rounded-xl"
          />
        </motion.div>

        {/* Main Pic with Animation */}
        <div className="relative z-20 w-full max-w-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currInd}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={transition}
            >
              <Image
                src={photos[currInd].src}
                alt={photos[currInd].alt}
                className="rounded-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Pic */}
        <motion.div
          className="absolute right-0 z-10 hidden w-full max-w-2xl md:block"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "100%" }}
          transition={transition}
          onClick={nextRev}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={photos[(currInd + 1) % photos.length].src}
            alt={photos[(currInd + 1) % photos.length].alt}
            className="cursor-pointer rounded-xl"
          />
        </motion.div>
      </div>

      {/* dots we might need them on mobile or something
      <div className="mt-4 flex space-x-2">
        {photos.map((_, index) => (
          <motion.div
            key={index}
            className={`h-3 w-3 cursor-pointer rounded-full ${
              currInd === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrInd(index)}
            whileHover={{ scale: 1.2 }}
            transition={transition}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
