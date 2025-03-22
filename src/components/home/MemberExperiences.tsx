import Image from "next/image";
import Ram from "@/public/home/ram.webp";

const MemberExperiences = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="font-lora mb-4 w-3/4 rounded-2xl bg-white shadow-quote md:w-3/5">
          <p className="pl-4 pt-4 text-8xl font-bold leading-none text-csa-yellow-100">
            “
          </p>
          <div className="text-md flex -translate-y-10 flex-col justify-end px-[6%]">
            <p className="text-right font-semibold text-csa-gray-100">
              CSA has truly been a life changing experience for me. Coming from
              a city where my culture was neither celebrated or acknowledged,
              CSA really helped me reconnect with my culture and make friends
              that I will never forget. I’ve been given opportunities and
              memories I’ll cherish for the rest of life when looking back at my
              college years.
            </p>
            <p className="font-semibold text-csa-gray-100">- Ryan Lew</p>
          </div>
        </div>
      </div>
      <Image
        src={Ram}
        alt="Chinese Ram"
        className="absolute left-[3vw] w-6/12 translate-y-[-8vh] md:w-4/12 md:translate-y-[-16vh] lg:w-1/4 lg:translate-y-[-10vh] xl:w-1/4 xl:translate-y-[-2vh] 2xl:translate-y-[-4vh]"
      />
      <p className="flex justify-end pb-[4vh] pr-4 pt-[12vh] text-4xl font-semibold text-csa-red-100 md:text-5xl xl:py-[15vh]">
        Member Experiences
      </p>
    </div>
  );
};

export default MemberExperiences;
