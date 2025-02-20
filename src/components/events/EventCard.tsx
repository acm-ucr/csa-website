import Image from "next/image";
import redDiamond from "@/public/events/redDiamond.webp";
import whiteRectangle from "@/public/events/whiteRectangle.webp";

const EventCard = () => {
  return (
    <div className="relative left-[16%] flex">
      <div className="relative left-[4%] flex">
        <div className="relative top-[11%]">
          <Image
            src={whiteRectangle}
            alt="whiteRectangle"
            className="relative left-[32%] h-auto w-auto scale-125"
          />
          <p className="absolute left-1/2 top-1/2 -translate-y-40 translate-x-10 text-8xl font-bold text-csa-yellow-100">
            Name
          </p>
          <p className="absolute left-1/2 top-1/2 -translate-y-9 translate-x-10 text-5xl text-csa-gray-100">
            location
          </p>
        </div>
      </div>

      <div className="relative right-[33%]">
        <div className="relative">
          <Image
            src={redDiamond}
            alt="redDiamond"
            className="relative scale-125"
          />
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-36 text-center text-8xl font-bold text-csa-yellow-100">
            Oct
            <br /> 17
          </p>
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-16 whitespace-nowrap text-5xl font-bold text-white">
            12:00 pm
          </p>
        </div>
      </div>
    </div>
  );
};

const EventCardsList = () => {
  const cards = [1, 2, 3];
  return (
    <div className="flex flex-col space-y-[5%]">
      {" "}
      {}
      {cards.map((_, index) => (
        <EventCard key={index} />
      ))}
    </div>
  );
};

export default EventCardsList;
