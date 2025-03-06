import { GoogleEventProps } from "@/components/ui/calendar";

const colors = ["csa-red-200", "csa-green-100", "csa-gray-200"];

interface EventCardProps {
  events: GoogleEventProps[];
}

const EventCard = ({ events }: EventCardProps) => {
  const filteredEvents = events?.filter(({ start }) => {
    const startDate = new Date(start.dateTime);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return startDate >= today;
  });

  const displayedEvents = filteredEvents?.slice(0, 3);

  return (
    <>
      {displayedEvents?.map(({ start, location, title }, index) => {
        const startDate = new Date(start.dateTime);

        return (
          <div className="flex justify-center">
            <div className="relative w-[50vw] bg-white outline">
              <p className="pl-[35%] pt-[9%] text-[5vw] font-bold leading-none text-csa-yellow-100">
                {title}
              </p>
              <p className="pl-[35%] text-[3vw] text-csa-gray-100">
                {location}
              </p>
              <div
                className={`absolute left-[-10%] top-0 h-[18vw] w-[18vw] rotate-45 bg-${colors[index % colors.length]} border text-center`}
              >
                <p className="-rotate-45 pr-[27%] pt-[10%] text-[4.5vw] font-bold leading-none text-csa-yellow-100">
                  {startDate.toLocaleString("default", { month: "short" })}
                  <br /> {startDate.getDate()}
                </p>
                <p className="-rotate-45 whitespace-nowrap pl-[43%] pt-[12%] text-[2.3vw] font-bold text-white">
                  {startDate.getHours() < 12
                    ? (startDate.getHours() % 12) + " AM"
                    : (startDate.getHours() % 12) + " PM"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventCard;
