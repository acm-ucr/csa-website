import Image from "next/image";
import CryingPanda from "@/public/not-found/cryingPanda.webp";
import PandaWithFlower from "@/public/not-found/pandaWithFlower.webp";
import Po from "@/public/not-found/teletubby_po.webp";
import PandaWithWok from "@/public/not-found/pandaWithWok.webp";
import Lantern from "@/public/not-found/lantern404.webp";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-csa-tan-100">
      <Image
        src={Lantern}
        alt="Lantern background"
        className="absolute right-[11vw] top-0 h-screen w-[35.18vw]"
      />
      <p className="z-10 text-[12vw] font-bold text-csa-yellow-300">404</p>
      <p className="font-lora z-10 text-[2.5vw] text-csa-gray-100">
        page not found :(
      </p>

      <Image
        src={PandaWithFlower}
        alt="PandaWithFlower"
        className="absolute left-10 top-[3vh] w-56"
      />

      <Image
        src={CryingPanda}
        alt="CryingPanda"
        className="absolute left-60 top-[20vh] w-48"
      />

      <Image src={Po} alt="Po" className="absolute bottom-0 left-5 w-52" />

      <Image
        src={PandaWithWok}
        alt="APandaWithWok"
        className="absolute bottom-0 right-0 w-60"
      />
    </div>
  );
};

export default NotFound;
