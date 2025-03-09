import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";

interface CalendarEventPopoverProps {
  startDate: {
    dateTime: Date;
    date: string;
  };
  endDate: {
    dateTime: Date;
    date: string;
  };
  title: string;
  date: Date;
  location: string;
  description: string;
  index: number;
}

const CalendarEventPopover = ({ startDate, endDate, title, date, location, description, index }: CalendarEventPopoverProps) => {
  let eventStartDate = new Date();
          let eventEndDate = new Date();
          let hasStartTime = false;
          let hasEndTime = false;

          if (startDate.dateTime) {
            eventStartDate = new Date(startDate.dateTime);
            hasStartTime = true;
          } else {
            eventStartDate = new Date(startDate.date);
          }

          if (endDate.dateTime) {
            eventEndDate = new Date(endDate.dateTime);
            hasEndTime = true;
          } else {
            eventEndDate = new Date(endDate.date);
          }

          const startHour = eventStartDate.getHours();
          const endHour = eventEndDate.getHours();
          const startMinutes = eventStartDate.getMinutes();
          const endMinutes = eventStartDate.getMinutes();
          const formattedStartHour = startHour % 12 || 12;
          const formattedEndHour = endHour % 12 || 12;
          const formattedStartMinutes =
            startMinutes < 10 ? `0${startMinutes}` : startMinutes;
          const formattedEndMinutes =
            endMinutes < 10 ? `0${endMinutes}` : endMinutes;
          const startHourSuffix = startHour < 12 ? "AM" : "PM";
          const endHourSuffix = endHour < 12 ? "AM" : "PM";  
  return (
        
          
            <Popover key={index}>
              <PopoverTrigger className="w-full cursor-pointer bg-csa-yellow-400 text-center text-[8px] text-csa-gray-200 hover:opacity-75 sm:text-xs 2xl:text-lg">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap px-1">
                  {title}
                </p>
              </PopoverTrigger>
              <PopoverContent className="w-[30vw] 2xl:w-[20vw]">
                <p className="bg-csa-green-100 px-[1vw] py-[1vh] text-[10px] text-csa-yellow-100 sm:text-xs md:text-lg 2xl:text-xl">
                  {date.toLocaleString("default", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  - {title}
                </p>
                {(location || hasStartTime || description) && (
                  <div className="flex flex-col gap-y-[1vh] bg-csa-tan-500 py-[1vh] pl-[2vw] text-[10px] text-csa-gray-100 sm:text-xs md:text-lg 2xl:text-xl">
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
};

export default CalendarEventPopover;