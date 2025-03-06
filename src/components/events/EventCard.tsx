const EventCard = () => {
  return (
    <div className="flex justify-center">
      <div className="relative h-[17vw] w-[50vw] bg-white">
        <p className="pl-[35%] pt-[9%] text-[5vw] font-bold leading-none text-csa-yellow-100">
          Name
        </p>
        <p className="pl-[35%] text-[3vw] text-csa-gray-100">location</p>
        <div className="absolute left-[-10%] top-0 h-[18vw] w-[18vw] rotate-45 bg-csa-red-200 text-center">
          <p className="-rotate-45 pr-[27%] pt-[10%] text-[4.5vw] font-bold leading-none text-csa-yellow-100">
            Oct
            <br /> 17
          </p>
          <p className="-rotate-45 whitespace-nowrap pl-[43%] pt-[12%] text-[2.3vw] font-bold text-white">
            12:00 pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
