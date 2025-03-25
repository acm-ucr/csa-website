import { StaticImageData } from "next/image";
import One from "@/public/home/carousel_one.webp";
import Two from "@/public/home/carousel_two.webp";
import Three from "@/public/home/carousel_three.webp";
import Four from "@/public/home/carousel_four.webp";
import Five from "@/public/home/carousel_five.webp";

interface Photo {
  src: StaticImageData;
  alt: string;
}

export const carouselData: Photo[] = [
  {
    src: One,
    alt: "photo 1",
  },
  {
    src: Two,
    alt: "photo 2",
  },
  {
    src: Three,
    alt: "photo 3",
  },
  {
    src: Four,
    alt: "photo 4",
  },
  {
    src: Five,
    alt: "photo 5",
  },
];
