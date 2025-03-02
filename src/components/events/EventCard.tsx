const EventCard = () => {
  return (
    <div className="relative left-[28%] flex">
      <div className="relative h-[17vw] w-[50vw] bg-white">
        <p className="pl-[30%] pt-[7%] text-[4vw] font-bold text-csa-yellow-100 md:text-[4vw] 2xl:text-7xl">
          Name
        </p>
        <p className="pl-[30%] text-[3vw] text-csa-gray-100 md:text-[3vw] 2xl:text-5xl">
          location
        </p>
      </div>

      <div className="relative right-[60%] h-[18vw] w-[18vw] rotate-45 bg-csa-red-200">
        <p className="-rotate-45 pr-[30%] pt-[10%] text-center text-[4vw] font-bold leading-[110%] text-csa-yellow-100 md:text-[3.5vw] 2xl:text-7xl">
          Oct
          <br /> 17
        </p>
        <p className="-rotate-45 whitespace-nowrap pl-[39%] pt-[12%] text-center text-[2vw] font-bold text-white 2xl:text-4xl">
          12:00 pm
        </p>
      </div>
    </div>
  );
};

export default EventCard;
