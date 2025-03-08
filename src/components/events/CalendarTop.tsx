import Image from "next/image";
import dateOutlineImage from "@/public/events/dateOutline.webp";
import branches from "@/public/events/pinkAndBluebranches.webp";
import lanterns from "@/public/events/lanterns.webp";
import snake from "@/public/events/snake.webp";
import cloud from "@/public/events/cloud.webp";
import string from "@/public/events/hoop.svg";
import fu from "@/public/events/fu.webp";
import spirals from "@/public/events/spirals.webp";

interface CalendarTopProps {
  currentDate: Date;
}

const CalendarTop = ({ currentDate }: CalendarTopProps) => {
  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  return (
    <>
      <div className="relative flex flex-col items-center">
        <Image src={string} alt="string image" />
        <Image
          src={fu}
          alt="fu image"
          className="mx-[5%] w-[90%] bg-csa-red-200 px-[11%] py-[9vh] lg:mx-[15%] lg:w-[70%]"
        />
        <Image
          src={spirals}
          alt="spirals image"
          className="absolute -bottom-6 left-[5.5%] z-50 w-[45%] sm:-bottom-10 md:-bottom-12 lg:left-[15.5%] lg:w-[35%] 2xl:-bottom-16"
        />
        <Image
          src={spirals}
          alt="spirals image"
          className="absolute -bottom-6 left-[49.5%] z-50 w-[45%] sm:-bottom-10 md:-bottom-12 lg:w-[35%] 2xl:-bottom-16"
        />
      </div>
      <div className="relative z-40 mx-[5%] flex w-[90%] items-end bg-csa-tan-500 pt-1 sm:pt-5 lg:mx-[15%] lg:w-[70%] 2xl:-mt-4">
        <Image src={branches} alt="branches image" className="w-[14%]" />
        <div className="ml-[3%] flex w-[22%] flex-col pb-2 text-center lg:gap-y-2">
          <p className="text-lg font-bold text-csa-green-100 sm:text-2xl lg:text-4xl 2xl:text-6xl">
            {currentDate.getFullYear()}
          </p>
          <p className="border-l border-r border-csa-yellow-400 px-2 text-[6px] text-csa-green-100 sm:text-xs lg:text-sm 2xl:text-xl">
            滴水之恩定当涌泉相报: "We should return small favors with much
            larger ones"
          </p>
        </div>
        <div className="relative flex h-full w-[22%] flex-col items-center gap-y-1 text-center 2xl:gap-y-4 2xl:pb-2">
          <p className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pt-6 text-base font-bold text-csa-green-100 sm:pl-0.5 sm:pt-9 sm:text-3xl md:pt-8 2xl:pt-10 2xl:text-6xl">
            {currentDate.getDate()}
          </p>
          <Image
            src={dateOutlineImage}
            alt="date outline image"
            className="mt-4 h-11 w-12 sm:h-20 sm:w-24 2xl:h-40 2xl:w-48"
          />
          <p className="text-[8px] font-medium text-csa-green-100 sm:text-xs md:text-sm lg:text-base 2xl:text-2xl">
            {monthNames[currentDate.getMonth()]}
          </p>
        </div>
        <div className="flex w-[15%] flex-col pb-2 text-center lg:gap-y-2">
          <Image src={cloud} alt="cloud image" className="z-0 -mb-8 w-full" />
          <p className="z-10 border-l border-r border-csa-yellow-400 text-[6px] text-csa-green-100 sm:px-2 sm:text-xs lg:text-sm 2xl:text-xl">
            滴水之恩定当涌泉相报: "We should return small favors with much
            larger ones"
          </p>
        </div>
        <Image
          src={snake}
          alt="snake image"
          className="z-10 w-[11%] pl-1 md:pl-4"
        />
        <Image src={lanterns} alt="lanterns image" className="w-[13%]" />
      </div>
    </>
  );
};

export default CalendarTop;
