import Dragon from "@/public/home/Dragon.webp";
import RightCloud from "@/public/home/RightCloud.svg";
import Image from "next/image";
const Landing = () => {
  return (
    <div>
      <div className="relative mr-[10vw] border-r-8 border-csa-red-100 pr-5 text-right">
        <div className="font-lora mb-8 flex flex-col border-csa-red-100 pl-[25%] text-right text-4xl font-semibold text-csa-red-100 sm:text-5xl">
          <p className="font-bold">Chinese Student</p>
          <p className="font-bold">Association</p>
        </div>
        <div className="font-lora text:2xl text-wrap pl-[30vw] font-semibold leading-relaxed text-csa-gray-100 sm:text-3xl">
          <p>
            Social, cultural, and service oriented organization that strives to
            promote the Chinese American Culture throughout the UCR and
            Riverside communities
          </p>
        </div>
      </div>
      <div className="relative ml-[15vw] border-l-8 border-csa-tan-300 px-10 pl-5 sm:my-12 sm:ml-[30vw]">
        <Image
          src={RightCloud}
          alt="right cloud"
          className="absolute bottom-10 right-0 sm:bottom-[30%]"
        />
        <p className="text-left text-3xl font-bold text-csa-red-100 sm:text-3xl">
          Mission statememt
        </p>
        <p className="font-lora text:2xl mt-4 pr-[17vw] text-left font-semibold leading-relaxed text-csa-gray-100 sm:text-2xl">
          Social, cultural, and service orientated organization that strives to
          promote the Chinese American culture throughout the UCR and Riverside
          communities.
        </p>
      </div>
      <div>
        <Image
          src={Dragon}
          alt="dragon"
          className="sm:top-15% absolute left-0 top-[12%] w-[27%] sm:w-[20%]"
        />
      </div>
    </div>
  );
};

export default Landing;
