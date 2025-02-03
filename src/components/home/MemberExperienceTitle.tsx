import Image from "next/image";
import Ram from "@/public/home/ram.webp";

const MemberTitle = () => {
  return (
    <div className="relative py-[11vh]">
      <p className="mr-2 pr-4 text-right text-5xl font-semibold text-csa-red-100">
        Member Experiences
      </p>

      <Image
        src={Ram}
        alt="Chinese Ram"
        className="absolute bottom-[-5vh] left-24 w-1/4"
      />
    </div>
  );
};
export default MemberTitle;
