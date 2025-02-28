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
import spirals from "@/public/events/spirals.png";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

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
    <div>
      <div className="flex justify-center">
        <div className="relative w-[70%]">
          <div className="flex justify-center bg-csa-red-200 py-[10vh]">
            <Image src={fu} alt="fu" />
          </div>
          <Image
            src={string}
            alt="string"
            className="absolute left-[50%] top-[-9.3%]"
          />
          <Image
            src={spirals}
            alt="spirals"
            className="absolute top-[65%] w-full"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-[70%] flex-row border-4 border-orange-300 bg-csa-tan-500 pt-[10vh]">
          <Image src={branches} alt="branches image" />
        </div>
      </div>
      <div className="z-40 mx-[5%] flex w-[90%] items-end bg-csa-tan-500 outline lg:mx-[15%] lg:w-[70%]">
        <div className="h-full max-h-[10lvh] w-full max-w-full">
          <Image src={branches} alt="branches image" className="scale-125" />
        </div>
        <p>2</p>
        <div className="col-span-2 flex flex-col justify-center text-center">
          <p className="text-xl text-csa-green-100 lg:text-4xl">
            {currentDate.getFullYear()}
          </p>
          <p className="border-l border-r border-csa-yellow-400 px-2 text-[8px] text-csa-green-100 sm:text-xs lg:text-sm">
            滴水之恩定当涌泉相报: "We should return small favors with much
            larger ones"
          </p>
        </div>
        <div className="relative flex h-full w-[22%] flex-col items-center gap-y-1 text-center">
          <p className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pt-1 text-base font-bold text-csa-green-100 sm:pl-0.5 sm:pt-4 sm:text-3xl md:pt-1.5">
            {currentDate.getDate()}
          </p>
          <Image
            src={dateOutlineImage}
            alt="date outline image"
            className="h-12 w-14 sm:h-20 sm:w-24"
          />
          <p className="text-xs font-medium text-csa-green-100 md:text-lg">
            {monthNames[currentDate.getMonth()]}
          </p>
        </div>
        <div className="flex w-[15%] flex-col pb-2 text-center lg:gap-y-2">
          <p className="z-10 border-l border-r border-csa-yellow-400 px-2 text-[8px] text-csa-green-100 sm:text-xs lg:text-sm">
            滴水之恩定当涌泉相报: "We should return small favors with much
            larger ones"
          </p>
        </div>
        <div className="z-10 w-[13%]">
          <Image src={snake} alt="snake image" />
        </div>
        <div className="w-[11%]">
          <Image src={lanterns} alt="lanterns image" />
        </div>
        <Image
          src={cloud}
          alt="cloud image"
          className="absolute top-0 z-0 ml-[61%]"
        />
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
          nav: "space-x-1 flex items-center z-50",
          nav_button: cn(
            buttonVariants({ variant: "monthNavigation" }),
            "h-7 w-7 p-0 hover:opacity-75",
          ),
          nav_button_previous: "absolute left-[37lvw] z-50 lg:left-[28lvw]",
          nav_button_next: "absolute right-[37lvw] z-50 lg:right-[28lvw]",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-csa-gray-200 text-[8px] md:text-xs lg:text-sm rounded-xl border border-csa-gray-100 w-full font-normal",
          row: "grid grid-cols-7",
          cell: "text-csa-gray-200 border rounded-xl border-csa-gray-100 p-0 relative focus-within:relative focus-within:z-20",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "w-full h-[10lvh] text-2xl rounded-xl p-0 font-normal",
          ),
          day_range_end: "day-range-end",
          day_selected: "bg-csa-red-200 text-csa-yellow-400",
          day_outside: "",
          day_disabled: "text-neutral-500 opacity-50",
          day_range_middle: "",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <div className="p-2" onClick={prevMonth}>
              <ChevronLeft className={cn("", className)} {...props} />
            </div>
          ),
          IconRight: ({ className, ...props }) => (
            <div className="p-2" onClick={nextMonth}>
              <ChevronRight className={cn("", className)} {...props} />
            </div>
          ),
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
