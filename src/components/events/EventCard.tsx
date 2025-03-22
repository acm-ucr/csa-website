interface EventCardProps {
  title: string;
  location: string;
  description: string;
  startDate: {
    dateTime: Date;
    date: string;
  };
  idx: number;
}

const colors = ["bg-csa-red-200", "bg-csa-green-100", "bg-csa-gray-200"];

const EventCard = ({
  title,
  location,
  startDate,
  idx,
  description,
}: EventCardProps) => {
  let eventStartDate: Date = new Date();
  let hasTime = false;

  if (startDate.dateTime) {
    eventStartDate = new Date(startDate.dateTime);
    hasTime = true;
  } else {
    eventStartDate = new Date(startDate.date);
  }

  const hour = eventStartDate.getHours();
  const formattedHour = hour % 12 || 12;
  const suffix = hour < 12 ? "AM" : "PM";
  return (
    <div className="mb-[13vw] flex justify-center md:mb-[18vh]">
      <div className="relative h-[22vw] w-[65vw] bg-white pt-[2vh] md:h-[18vw] md:w-[50vw] md:pt-[8vh]">
        <p className="pl-[35%] text-lg font-bold leading-none text-csa-yellow-100 md:text-[3.25vw]">
          {title}
        </p>
        <p className="text-md pl-[36%] pt-1 leading-none text-csa-gray-100 md:text-xl">
          {location ? location : "No location"}
        </p>
        <p className="z-50 hidden pl-[36%] pt-2 text-xs leading-none text-csa-gray-100 md:flex md:text-[1vw]">
          {description ? description : "No description"}
        </p>
        <div
          className={`absolute left-[-10%] top-0 h-[22vw] w-[22vw] rotate-45 md:h-[18vw] md:w-[18vw] ${colors[idx % colors.length]} text-center`}
        >
          <p className="-rotate-45 pr-[30%] pt-[10%] text-[4.5vw] font-bold leading-none text-csa-yellow-100 md:pr-[27%]">
            {eventStartDate.toLocaleString("default", {
              month: "short",
            })}
            <br /> {eventStartDate.getDate()}
          </p>
          {hasTime && (
            <p
              className={`-rotate-45 whitespace-nowrap pl-[30%] pt-[20%] text-sm font-bold text-white md:pl-[36%] md:text-[2.3vw] ${hasTime ? "" : "collapse"}`}
            >
              {formattedHour} {suffix}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
