import Dragon from "@/public/home/Dragon.webp";
import RightCloud from "@/public/home/RightCloud.svg";
import Image from "next/image";
const Landing = () => {
  return (
    <div>
      <div className="relative mr-[10vw] border-r-8 border-csa-red-100 pr-[2vw] text-right">
        <div className="font-lora mb-8 flex flex-col border-csa-red-100 text-4xl font-semibold text-csa-red-100 sm:text-6xl">
          <p className="font-bold">Chinese Student</p>
          <p>Association</p>
        </div>
        <div className="font-lora flex flex-col text-2xl font-semibold leading-relaxed text-csa-gray-100">
          <p>Social, cultural, and service oriented </p>
          <p>organization that strives to promote the Chinese</p>
          <p>American Culture throughout the UCR and</p>
          <p>Riverside communities</p>
        </div>
      </div>
        <div className="relative my-4 sm:py-10 px-8 ml-[25vw] border-l-8 border-csa-tan-300 pl-6">
          <p className="text-left text-4xl font-bold text-csa-red-100 sm:text-6xl">
            Mission statement
          </p>
          <Image
            src={RightCloud}
            alt="right cloud"
            className="absolute right-0 bottom-20"
          />
          <p className="mt-4 text-left text-2xl font-semibold leading-9 text-csa-gray-100">
            Social, cultural, and service orientated
            <br />
            organization that strives to promote the Chinese
            <br />
            American culture throughout the UCR and
            <br />
            Riverside communities.
          </p>
        </div>
      <div>
        <Image
          src={Dragon}
          alt="dragon"
          className="absolute left-0 top-12 w-1/4 pt-12 sm:py-11"
        />
      </div>
    </div>
  );
};

export default Landing;
