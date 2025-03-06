interface EventCardProps {
  name: string;
  location: string;
  month: string;
  day: number;
  time: string;
  index: number;
}
const colors = ["csa-red-200", "csa-green-100", "csa-gray-200"];

const EventCard: React.FC<EventCardProps> = ({
  name,
  location,
  month,
  day,
  time,
  index,
}) => {
  const diamondColor = colors[index % colors.length];
  return (
    <div className="flex justify-center">
      <div className="relative h-[17vw] w-[50vw] bg-white">
        <p className="pl-[35%] pt-[9%] text-[5vw] font-bold leading-none text-csa-yellow-100">
          {name}
        </p>
        <p className="pl-[35%] text-[3vw] text-csa-gray-100">{location}</p>
        <div
          className={`absolute left-[-10%] top-0 h-[18vw] w-[18vw] rotate-45 bg-${diamondColor} border text-center`}
        >
          <p className="-rotate-45 pr-[27%] pt-[10%] text-[4.5vw] font-bold leading-none text-csa-yellow-100">
            {month}
            <br /> {day}
          </p>
          <p className="-rotate-45 whitespace-nowrap pl-[43%] pt-[12%] text-[2.3vw] font-bold text-white">
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
