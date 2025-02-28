"use client";

import { Calendar } from "@/components/ui/calendar";
import React from "react";

const CalendarCall = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="mx-[5%] bg-white lg:mx-[15%]"
      />
    </div>
  );
};

export default CalendarCall;
