import Image from "next/image";
import clubbing from "@/public/gallery/Clubbing.webp";
import CHF from "@/public/gallery/CHF.webp";
import WinterRetreat from "@/public/gallery/WinterRetreat.webp";
import Banquet from "@/public/gallery/Banquet.webp";

export const events = [
  {
    name: "Clubbing",
    info: <Image src={clubbing} alt="Clubbing" />,
    border: "border-csa-green-100",
    text: "text-csa-green-100",
  },
  {
    name: "CHF",
    info: <Image src={CHF} alt="CHF" />,
    border: "border-csa-yellow-100",
    text: "text-csa-yellow-100",
  },
  {
    name: "Winter Retreat",
    info: <Image src={WinterRetreat} alt="Winter Retreat" />,
    border: "border-csa-gray-100",
    text: "text-csa-gray-100",
  },
  {
    name: "Banquet",
    info: <Image src={Banquet} alt="Banquet" />,
    border: "border-csa-red-100",
    text: "text-csa-red-100",
  },
];
