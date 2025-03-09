import { GoogleEventProps } from "@/components/events/CalendarCall";
import EventCard from "./EventCard";

interface EventCardsProps {
  events: GoogleEventProps[];
}

const EventCards = ({ events }: EventCardsProps) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const filteredEvents = events.filter((event) => {
    let eventStartDate: Date | null = null;

    if (event.start.dateTime) {
      eventStartDate = new Date(event.start.dateTime);
    } else if (event.start.date) {
      eventStartDate = new Date(event.start.date);
    }

    return eventStartDate && eventStartDate >= today;
  });

  const displayedEvents = filteredEvents?.slice(0, 3);

  return (
    <>
      {displayedEvents?.map(({ start, location, summary }, index) => {
        return (
          <EventCard
            title={summary}
            location={location}
            startDate={start}
            idx={index}
            key={index}
          />
        );
      })}
    </>
  );
};

export default EventCards;
