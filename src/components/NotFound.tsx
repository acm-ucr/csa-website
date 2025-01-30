import Image from "next/image";
import CryingPanda from "@/public/not-found/cryingPanda.webp";
import PandaWithFlower from "@/public/not-found/pandaWithFlower.webp";
import Po from "@/public/not-found/teletubby_po.webp";
import PandaWithWok from "@/public/not-found/pandaWithWok.webp";
import Lantern from "@/public/not-found/lantern404.webp";

const NotFound = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-csa-tan-100">
      <Image
        src={Lantern}
        alt="Lantern background"
        className="absolute right-[11vw] top-0 z-0 h-screen w-[35.18vw] opacity-100"
      />
      <p className="z-10 text-[12vw] font-bold text-csa-yellow-300">404</p>
      <p className="font-lora z-10 text-[2.5vw] text-csa-gray-100">
        page not found :(
      </p>

      <Image
        src={PandaWithFlower}
        alt="A nice panda carrying a red flower"
        className="absolute left-10 top-40 w-56"
      />

      <Image
        src={CryingPanda}
        alt="A panda with a funny crying face"
        className="absolute left-60 top-64 w-48"
      />

      <Image
        src={Po}
        alt="Po from the Teletubbies pointing"
        className="absolute -bottom-28 left-5 w-52"
      />

      <Image
        src={PandaWithWok}
        alt="A panda with a funny face carrying a wok over its head"
        className="absolute -bottom-28 right-0 w-60"
      />
    </div>
  );
};

export default NotFound;
