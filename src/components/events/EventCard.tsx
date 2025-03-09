interface EventCardProps {
  title: string;
  location: string;
  startDate: {
    dateTime: Date;
    date: string;
  };
  idx: number;
}

const colors = ["bg-csa-red-200", "bg-csa-green-100", "bg-csa-gray-200"];

const EventCard = ({ title, location, startDate, idx }: EventCardProps) => {
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
    <div className="my-[20vh] flex justify-center">
      <div className="relative w-[50vw] bg-white">
        <p className="pl-[35%] pt-[9%] text-[5vw] font-bold leading-none text-csa-yellow-100">
          {title}
        </p>
        <p className="pl-[35%] text-[3vw] text-csa-gray-100">{location}</p>
        <div
          className={`absolute left-[-10%] top-0 h-[18vw] w-[18vw] rotate-45 ${colors[idx % colors.length]} text-center`}
        >
          <p className="-rotate-45 pr-[27%] pt-[10%] text-[4.5vw] font-bold leading-none text-csa-yellow-100">
            {eventStartDate.toLocaleString("default", {
              month: "short",
            })}
            <br /> {eventStartDate.getDate()}
          </p>
          {hasTime && (
            <p
              className={`-rotate-45 whitespace-nowrap pl-[43%] pt-[12%] text-[2.3vw] font-bold text-white ${hasTime ? "" : "collapse"}`}
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
