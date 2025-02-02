import Image from "next/image";
import CryingPanda from "@/public/not-found/cryingPanda.webp";
import PandaWithFlower from "@/public/not-found/pandaWithFlower.webp";
import Po from "@/public/not-found/teletubby_po.webp";
import PandaWithWok from "@/public/not-found/pandaWithWok.webp";
import Lantern from "@/public/not-found/lantern404.svg";

const NotFound = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-csa-tan-100">
      <Image
        src={Lantern}
        alt="Lantern background"
        className="absolute right-0 top-0 w-auto object-cover md:h-[128%]"
      />
      <p className="z-10 text-[25vw] font-bold text-csa-yellow-300 md:text-[12vw]">
        404
      </p>
      <p className="font-lora z-10 text-[5vw] text-csa-gray-100 md:text-[2.5vw]">
        page not found :(
      </p>

      <Image
        src={PandaWithFlower}
        alt="PandaWithFlower"
        className="absolute left-5 top-[3vh] w-[40%] md:left-10 md:w-[15vw]"
      />

      <Image
        src={CryingPanda}
        alt="CryingPanda"
        className="absolute left-[35vw] top-[12vh] w-[30%] md:left-[16vw] md:top-[16vh] md:w-[13vw]"
      />

      <Image
        src={Po}
        alt="Po"
        className="absolute bottom-0 left-5 w-[40%] md:w-52"
      />

      <Image
        src={PandaWithWok}
        alt="APandaWithWok"
        className="absolute bottom-0 right-0 w-[40%] md:w-60"
      />
    </div>
  );
};

export default NotFound;
