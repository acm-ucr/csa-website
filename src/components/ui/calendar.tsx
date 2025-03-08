"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import { GoogleEventProps } from "@/components/events/CalendarCall";
import CalendarTop from "@/components/events/CalendarTop";
import CalendarDay from "@/components/events/CalendarDay";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

function captionWeek(date: Date) {
  const week = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  return week[date.getDay()];
}

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  events,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    const today = new Date();
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() == newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  const prevMonth = () => {
    const today = new Date();
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(
      today.getMonth() === newDate.getMonth() &&
        today.getFullYear() == newDate.getFullYear()
        ? today.getDate()
        : 1,
    );
    setCurrentDate(newDate);
  };

  return (
    <div className="pt-[5vh] md:pt-[10vh]">
      <CalendarTop currentDate={currentDate} />
      <DayPicker
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: captionWeek,
          formatCaption: () => "",
        }}
        className={className}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "w-full",
          caption: "relative",
          caption_label: "",
          nav: "z-50",
          nav_button: cn(
            buttonVariants({ variant: "monthNavigation" }),
            "h-2 w-2 sm:h-4 sm:w-4 2xl:h-7 2xl:w-7 p-0 hover:opacity-75",
          ),
          nav_button_previous:
            "absolute left-[39.5%] sm:left-[40%] bottom-0.5 md:bottom-1 lg:bottom-1.5 2xl:bottom-3 z-50",
          nav_button_next:
            "absolute right-[39.5%] sm:right-[40%] bottom-0.5 md:bottom-1 lg:bottom-1.5 2xl:bottom-3 z-50",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-csa-gray-200 text-[8px] md:text-xs lg:text-sm 2xl:text-xl rounded-lg md:rounded-xl border border-csa-gray-100 w-full font-normal",
          row: "grid grid-cols-7",
          cell: "border rounded-lg md:rounded-xl border-csa-gray-100 p-0",
          day: "rounded-lg md:rounded-xl p-0",
          day_range_end: "",
          day_selected: "",
          day_outside: "",
          day_disabled: "",
          day_range_middle: "",
          day_hidden: "",
          ...classNames,
        }}
        components={{
          IconLeft: () => (
            <div className="p-0 sm:p-2" onClick={prevMonth}>
              <ChevronLeft className="p-1 sm:p-0" />
            </div>
          ),
          IconRight: () => (
            <div className="p-0 sm:p-2" onClick={nextMonth}>
              <ChevronRight className="ml-[1px] p-1 sm:p-0" />
            </div>
          ),
          Day: ({ displayMonth, date }) => (
            <CalendarDay
              date={date}
              displayMonth={displayMonth}
              events={events}
            />
          ),
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
