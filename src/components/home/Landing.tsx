import Dragon from "@/public/home/Dragon.webp";
import RightCloud from "@/public/home/RightCloud.svg";
import Image from "next/image";
const Landing = () => {
  return (
    <div>
      <div className="relative mr-[10vw] border-r-8 border-csa-red-100 pr-10 text-right">
        <div className="font-lora mb-8 border-csa-red-100 text-right sm:text-5xl text-4xl font-semibold text-csa-red-100">
          <p className="font-bold">Chinese Student</p>
          <p className="font-bold">Association</p>
        </div>
        <div className="font-lora text-wrap pl-[30vw] sm:text-3xl text:2xl font-semibold leading-relaxed text-csa-gray-100">
          <p>
            Social, cultural, and service oriented organization that strives to
            promote the Chinese American Culture throughout the UCR and
            Riverside communities
          </p>
        </div>
      </div>
      <div className="relative my-10 ml-[10vw] border-l-8 border-csa-tan-300 px-8 pl-10 sm:my-12 sm:ml-[35vw]">
        <Image
          src={RightCloud}
          alt="right cloud"
          className="absolute right-0 sm:bottom-[30%] bottom-10"
        />
        <p className="text-left sm:text-3xl text-3xl font-bold text-csa-red-100 sm:text-left">
          Mission statement
        </p>
        <p className="font-lora mt-4 pr-[17vw] text-left sm:text-2xl text:2xl font-semibold leading-relaxed text-csa-gray-100">
          Social, cultural, and service orientated organization that strives to
          promote the Chinese American culture throughout the UCR and Riverside
          communities.
        </p>
      </div>
      <div>
        <Image
          src={Dragon}
          alt="dragon"
          className="absolute left-0 top-16 w-[20%] pt-12 sm:top-10%"
        />
      </div>
    </div>
  );
};

export default Landing;
