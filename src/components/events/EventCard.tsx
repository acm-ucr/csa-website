const EventCard = () => {
  return (
    <div className="relative left-[28%] flex">
      <div className="relative h-[17vw] w-[50vw] bg-white">
        <p className="pl-[25%] pt-[8%] text-7xl font-bold text-csa-yellow-100">
          Name
        </p>
        <p className="pl-[25%] text-5xl text-csa-gray-100">location</p>
      </div>

      <div className="relative right-[60%] h-[18vw] w-[18vw] rotate-45 bg-csa-red-200">
        <p className="-rotate-45 pr-[25%] pt-[10%] text-center text-7xl font-bold text-csa-yellow-100">
          Oct
          <br /> 17
        </p>
        <p className="-rotate-45 whitespace-nowrap pl-[39%] pt-[10%] text-4xl font-bold text-white">
          12:00 pm
        </p>
      </div>
    </div>
  );
};

export default EventCard;
