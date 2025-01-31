import Image from "next/image";
import pinkFlower from "@/public/gallery/pinkFlower.webp";

const Gallery = () => {
  return (
    <div>
      <Image
        src={pinkFlower}
        alt="pinkFlower"
        className="absolute bottom-0 left-0 w-2/12"
      />
    </div>
  );
};

export default Gallery;
