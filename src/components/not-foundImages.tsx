import Image from "next/image";
import CryingPanda from "@/public/not-found/cryingPanda.webp";
import PandaWithFlower from "@/public/not-found/pandaWithFlower.webp";
import Po from "@/public/not-found/teletubby_po.webp";
import PandaWithWok from "@/public/not-found/pandaWithWok.webp";

const ErrorImages = () => {
  return (
    <div>
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
        className="absolute bottom-0 left-5 w-52"
      />

      <Image
        src={PandaWithWok}
        alt="A panda with a funny face carrying a wok over its head"
        className="absolute bottom-0 right-0 w-60"
      />
    </div>
  );
};

export default ErrorImages;