import Image from "next/image";
import Ram from "@/public/home/ram.webp";

const MemberTitle = () => {
  return (
    <div className="relative py-[14vh]">
      <p className="relative top-20 mr-2 flex justify-end pr-4 text-right text-5xl font-semibold text-csa-red-100 md:top-4">
        Member Experiences
      </p>
      <div className="relative top-[15vh] flex justify-center">
        <Image
          src={Ram}
          alt="Chinese Ram"
          className="absolute bottom-[8vh] left-0 w-2/3 md:bottom-[-5vh] md:left-24 md:w-1/4"
        />
      </div>
    </div>
  );
};
export default MemberTitle;
