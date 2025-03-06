"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import dateOutlineImage from "@/public/events/dateOutline.webp";
import branches from "@/public/events/pinkAndBluebranches.webp";
import lanterns from "@/public/events/lanterns.webp";
import snake from "@/public/events/snake.webp";
import cloud from "@/public/events/cloud.webp";
import string from "@/public/events/hoop.svg";
import fu from "@/public/events/fu.webp";
import spirals from "@/public/events/spirals.webp";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export type GoogleEventProps = {
  start: {
    dateTime: Date;
  };
  end: {
    dateTime: Date;
  };
  location: string;
  description: string;
  title: string;
};

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  events: GoogleEventProps[];
};

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: GoogleEventProps[];
}

const Day = ({ date, displayMonth, events }: DayProps) => {
  const currentMonth = displayMonth.getMonth() === date.getMonth();
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;

  return (
    <div
      className={`flex h-[10vh] flex-col items-center justify-start hover:bg-csa-red-200 hover:text-csa-yellow-400 ${currentMonth ? "" : "collapse"} ${isWeekend ? "text-csa-red-200" : "text-csa-gray-200"} rounded-lg md:rounded-xl`}
    >
      <p className="mt-[1vh] text-base sm:text-lg md:text-2xl 2xl:text-4xl">
        {date.getDate()}
      </p>
      {events?.map(({ title, start, end, location }, index) => {
        const startDate = new Date(start.dateTime);
        const endDate = new Date(end.dateTime);

        if (
          startDate.getDate() === date.getDate() &&
          startDate.getMonth() === date.getMonth() &&
          startDate.getFullYear() === date.getFullYear()
        ) {
          return (
            <HoverCard key={index}>
              <HoverCardTrigger className="w-full cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap bg-csa-yellow-400 text-center text-[8px] text-csa-gray-200 sm:text-xs md:text-base 2xl:text-lg">
                {title}
              </HoverCardTrigger>
              <HoverCardContent className="w-[30vw] md:w-[20vw]">
                <p className="bg-csa-green-100 py-[1vh] pl-[1vw] text-xs text-csa-yellow-100 sm:text-base md:text-lg 2xl:text-xl">
                  {startDate.getMonth() + 1}/{startDate.getDate()}/
                  {startDate.getFullYear()} - {title}
                </p>
                <div className="flex flex-col gap-y-[1vh] bg-csa-tan-500 py-[1vh] pl-[2vw] text-xs text-csa-gray-100 sm:text-base md:text-lg 2xl:text-xl">
                  <p>{location}</p>
                  <p>
                    {startDate.getHours() < 12
                      ? (startDate.getHours() % 12) + " AM"
                      : (startDate.getHours() % 12) + " PM"}{" "}
                    -{" "}
                    {endDate.getHours() < 12
                      ? (endDate.getHours() % 12) + " AM"
                      : (endDate.getHours() % 12) + " PM"}{" "}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        }
      })}
    </div>
  );
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

function captionMonth() {
  return "";
}

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  events,
  ...props
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

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
      <div className="relative flex flex-col items-center">
        <Image src={string} alt="string image" />
        <Image
          src={fu}
          alt="fu image"
          className="mx-[5%] w-[90%] bg-csa-red-200 px-[11%] py-[9vh] lg:mx-[15%] lg:w-[70%]"
        />
        <Image
          src={spirals}
          alt="spirals image"
          className="absolute -bottom-6 left-[5.5%] z-50 w-[45%] sm:-bottom-10 md:-bottom-12 lg:left-[15.5%] lg:w-[35%] 2xl:-bottom-16"
        />
        <Image
          src={spirals}
          alt="spirals image"
          className="absolute -bottom-6 left-[49.5%] z-50 w-[45%] sm:-bottom-10 md:-bottom-12 lg:w-[35%] 2xl:-bottom-16"
        />
      </div>
      <div className="relative z-40 mx-[5%] flex w-[90%] items-end bg-csa-tan-500 pt-1 sm:pt-5 lg:mx-[15%] lg:w-[70%] 2xl:-mt-4">
        <Image src={branches} alt="branches image" className="w-[14%]" />
        <div className="ml-[3%] flex w-[22%] flex-col pb-2 text-center lg:gap-y-2">
          <p className="text-lg font-bold text-csa-green-100 sm:text-2xl lg:text-4xl 2xl:text-6xl">
            {currentDate.getFullYear()}
          </p>
          <p className="border-l border-r border-csa-yellow-400 px-2 text-[6px] text-csa-green-100 sm:text-xs lg:text-sm 2xl:text-xl">
            滴水之恩定当涌泉相报: "We should return small favors with much
            larger ones"
          </p>
        </div>
        <div className="relative flex h-full w-[22%] flex-col items-center gap-y-1 text-center 2xl:gap-y-4 2xl:pb-2">
          <p className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pt-6 text-base font-bold text-csa-green-100 sm:pl-0.5 sm:pt-9 sm:text-3xl md:pt-8 2xl:pt-10 2xl:text-6xl">
            {currentDate.getDate()}
          </p>
          <Image
            src={dateOutlineImage}
            alt="date outline image"
            className="mt-4 h-11 w-12 sm:h-20 sm:w-24 2xl:h-40 2xl:w-48"
          />
          <p className="text-[8px] font-medium text-csa-green-100 sm:text-xs md:text-sm lg:text-base 2xl:text-2xl">
            {monthNames[currentDate.getMonth()]}
          </p>
        </div>
        <div className="flex w-[15%] flex-col pb-2 text-center lg:gap-y-2">
          <Image src={cloud} alt="cloud image" className="z-0 -mb-8 w-full" />
          <p className="z-10 border-l border-r border-csa-yellow-400 text-[6px] text-csa-green-100 sm:px-2 sm:text-xs lg:text-sm 2xl:text-xl">
            滴水之恩定当涌泉相报: "We should return small favors with much
            larger ones"
          </p>
        </div>
        <Image
          src={snake}
          alt="snake image"
          className="z-10 w-[11%] pl-1 md:pl-4"
        />
        <Image src={lanterns} alt="lanterns image" className="w-[13%]" />
      </div>
      <DayPicker
        showOutsideDays={showOutsideDays}
        formatters={{
          formatWeekdayName: captionWeek,
          formatCaption: captionMonth,
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
          day_disabled: "50",
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
            <Day date={date} displayMonth={displayMonth} events={events} />
          ),
        }}
        {...props}
      />{" "}
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
