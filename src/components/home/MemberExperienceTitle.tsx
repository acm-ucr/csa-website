import Image from "next/image";
import Ram from "@/public/home/ram.webp";

const MemberTitle = () => {
  return (
    <div className="relative md:pt-[20vh] py-[15vh]">
      <div className="absolute my-[6vh] left-[4vw] md:top-[-15vh] top-[-12vh]">
        <Image
          src={Ram}
          alt="Chinese Ram"
          className="w-1/2 md:w-1/4"
        />
      </div>
      <p className="absolute md:right-8 md:left-auto md:top-[8vh] left-[28vw] text-5xl font-semibold text-csa-red-100">
        Member Experiences
      </p>
    </div>
  );
};
export default MemberTitle;
