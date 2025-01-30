import imageOne from "@/public/home/carousel/carousel_one.webp";
import imageTwo from "@/public/home/carousel/carousel_two.webp";
import imageThree from "@/public/home/carousel/carousel_three.webp";
import imageFour from "@/public/home/carousel/carousel_four.webp";
import imageFive from "@/public/home/carousel/carousel_five.webp";

import { StaticImageData } from "next/image";

interface Photo {
  src: StaticImageData;
  alt: string;
}

export const photos: Photo[] = [
  {
    src: imageOne,
    alt: "Photo 1",
  },
  {
    src: imageTwo,
    alt: "Photo 2",
  },
  {
    src: imageThree,
    alt: "Photo 3",
  },
  {
    src: imageFour,
    alt: "Photo 4",
  },
  {
    src: imageFive,
    alt: "Photo 5",
  },
];
