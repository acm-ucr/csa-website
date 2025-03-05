import Image from "next/image";
import Ram from "@/public/home/ram.webp";

const MemberTitle = () => {
  return (
    <div className="relative py-[15vh] md:pt-[20vh]">
      <div className="absolute left-[4vw] top-[-12vh] my-[6vh] md:top-[-15vh]">
        <Image src={Ram} alt="Chinese Ram" className="w-1/2 md:w-1/4" />
      </div>
      <p className="absolute left-[28vw] text-5xl font-semibold text-csa-red-100 md:left-auto md:right-8 md:top-[8vh]">
        Member Experiences
      </p>
    </div>
  );
};
export default MemberTitle;
