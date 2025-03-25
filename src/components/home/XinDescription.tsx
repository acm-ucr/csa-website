import Image from "next/image";
import xinImage from "@/public/home/xinimage.webp";

const XinDescription = () => {
  return (
    <div className="my-[3vh] grid grid-cols-1 items-center border-y-8 border-csa-tan-300 bg-csa-green-100 md:my-[5vh] md:grid-cols-3">
      <p className="px-[4vh] pt-[4vh] text-left text-2xl text-white md:col-span-2 md:py-[0] md:pl-[4vw] md:text-2xl">
        The Chinese character 心 ("xin") which stands for heart. The theme that
        we have been promoting is "Two Worlds, One Heart” which is a
        representation of our Chinese Heritage fused with the American Culture
        that defines the Chinese American.
      </p>
      <div className="relative my-[6vh] flex items-center justify-center md:py-[0]">
        <div className="aspect-square w-[45vw] rounded-full border-8 border-csa-tan-200 bg-csa-tan-100 md:w-[16vw]"></div>
        <Image
          src={xinImage}
          alt="Xin_Image"
          className="absolute w-[35vw] md:w-[12vw]"
        />
      </div>
    </div>
  );
};

export default XinDescription;
