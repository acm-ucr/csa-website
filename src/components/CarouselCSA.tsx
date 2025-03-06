"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Photo {
  src: StaticImageData;
  alt: string;
}

interface CarouselProps {
  photos: Photo[];
}

const CarouselCSA = ({ photos }: CarouselProps) => {
  const [currIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);

  // the carousel should depend on the embla api
  useEffect(() => {
    if (!api) {
      console.log("API is not initialized yet.");
      return;
    }

    const initialIndex = api.selectedScrollSnap();
    setCurrentIndex(initialIndex);
    console.log(`Initial index set: ${initialIndex}`);

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      console.log(`Carousel index changed: ${newIndex}`);
      setCurrentIndex(newIndex);
    };

    console.log("Adding event listener for 'select' event.");
    api.on("select", onSelect);

    return () => {
      console.log("Removing event listener for 'select' event.");
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden pb-[5%]">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          watchDrag: false,
        }}
        className="w-[125%] md:w-[150%]"
        setApi={setApi}
      >
        <CarouselContent>
          {photos.map(({ src, alt }, index) => (
            <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
              <div>
                <Image
                  src={src}
                  alt={alt}
                  className={cn(
                    "rounded-lg",
                    index === (currIndex - 1 + photos.length) % photos.length
                      ? "clip-left"
                      : "",
                    index === (currIndex + 1) % photos.length
                      ? "clip-right"
                      : "",
                  )}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselCSA;
