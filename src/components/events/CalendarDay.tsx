import { GoogleEventProps } from "@/components/events/CalendarCall";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: GoogleEventProps[];
}

const CalendarDay = ({ date, displayMonth, events }: DayProps) => {
  const currentMonth = displayMonth.getMonth() === date.getMonth();
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;

  return (
    <div
      className={`flex h-[10vh] flex-col items-center justify-start gap-y-1 hover:bg-csa-red-200 hover:text-csa-yellow-400 ${currentMonth ? "" : "collapse"} ${isWeekend ? "text-csa-red-200" : "text-csa-gray-200"} rounded-lg md:rounded-xl`}
    >
      <p className="mt-[1vh] text-base sm:text-lg md:text-2xl 2xl:text-4xl">
        {date.getDate()}
      </p>
      {events?.map(({ summary, start, end, location, description }, index) => {
        let eventStartDate: Date | null = null;
        let eventEndDate: Date | null = null;
        let hasStartTime = false;
        let hasEndTime = false;

        if (start.dateTime) {
          eventStartDate = new Date(start.dateTime);
          hasStartTime = true;
        } else if (start.date) {
          eventStartDate = new Date(start.date);
        }

        if (end.dateTime) {
          eventEndDate = new Date(end.dateTime);
          hasEndTime = true;
        } else if (end.date) {
          eventEndDate = new Date(end.date);
        }

        if (
          eventStartDate &&
          eventEndDate &&
          eventStartDate.getDate() === date.getDate() &&
          eventStartDate.getMonth() === date.getMonth() &&
          eventStartDate.getFullYear() === date.getFullYear()
        ) {
          const startHour = eventStartDate.getHours();
          const endHour = eventEndDate.getHours();
          const startMinutes = eventStartDate.getMinutes();
          const endMinutes = eventStartDate.getMinutes();
          const formattedStartHour = startHour % 12 || 12;
          const formattedEndHour = endHour % 12 || 12;
          const formattedStartMinutes =
            startMinutes < 10 ? `0${startMinutes}` : startMinutes;
          const formattedEndMinutes =
            startMinutes < 10 ? `0${endMinutes}` : endMinutes;
          const startHourSuffix = startHour < 12 ? "AM" : "PM";
          const endHourSuffix = endHour < 12 ? "AM" : "PM";
          return (
            <Popover key={index}>
              <PopoverTrigger className="w-full cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap bg-csa-yellow-400 text-center text-[8px] text-csa-gray-200 hover:opacity-75 sm:text-xs md:text-base 2xl:text-lg">
                {summary}
              </PopoverTrigger>
              <PopoverContent className="w-[30vw] 2xl:w-[20vw]">
                <p className="bg-csa-green-100 px-[1vw] py-[1vh] text-xs text-csa-yellow-100 sm:text-base md:text-lg 2xl:text-xl">
                  {eventStartDate.toLocaleString("default", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  - {summary}
                </p>
                {(location || hasStartTime || description) && (
                  <div className="flex flex-col gap-y-[1vh] bg-csa-tan-500 py-[1vh] pl-[2vw] text-xs text-csa-gray-100 sm:text-base md:text-lg 2xl:text-xl">
                    <p>{location}</p>
                    <p>
                      {hasStartTime && (
                        <>
                          {formattedStartHour}:{formattedStartMinutes}{" "}
                          {startHourSuffix}
                          {hasEndTime && (
                            <>
                              {" "}
                              - {formattedEndHour}:{formattedEndMinutes}{" "}
                              {endHourSuffix}
                            </>
                          )}
                        </>
                      )}
                    </p>
                    <p>{description}</p>
                  </div>
                )}
              </PopoverContent>
            </Popover>
          );
        }
      })}
    </div>
  );
};

export default CalendarDay;
