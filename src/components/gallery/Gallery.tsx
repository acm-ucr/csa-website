import Image from "next/image";
import pinkFlower from "@/public/gallery/pinkFlower.webp";
import blueFlower from "@/public/gallery/blueFlower.webp";

const Gallery = () => {
  return (
    <div>
      <Image
        src={pinkFlower}
        alt="pinkFlower"
        className="absolute bottom-0 left-0 w-2/12"
      />

      <Image
        src={blueFlower}
        alt="blueFlower"
        className="absolute bottom-0 right-0 w-48"
      />
    </div>
  );
};

export default Gallery;
