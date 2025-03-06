"use client";
import React from "react";
import { Calendar, GoogleEventProps } from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import Title from "@/components/Title";
import EventCard from "@/components/events/EventCard";

const CalendarCall = () => {
  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response =
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${new Date(
            new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
          ).toISOString()}&timeMax=${new Date(
            new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
          ).toISOString()}`).then((res) => res.json());

      const events = response.items.map(
        ({ start, end, location, description, title }: GoogleEventProps) => ({
          start: start.dateTime,
          end: end.dateTime,
          location,
          description,
          title,
        }),
      );

      return events;
    },
  });

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <>
      <EventCard events={data} />
      <Title>calendar</Title>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="mx-[5%] bg-white lg:mx-[15%]"
        events={data}
      />
    </>
  );
};

export default CalendarCall;
