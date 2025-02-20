"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import dateOutlineImage from "@/public/events/dateOutline.webp"
import branches from "@/public/events/pinkAndBluebranches.webp"
import lanterns from "@/public/events/lanterns.webp"
import snake from "@/public/events/snake.webp"
import cloud from "@/public/events/cloud.webp"


export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function captionWeek(date: Date) {
  const week = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  return week[date.getDay()];
}

function captionMonth(date: Date) {
  const month = [
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
  return month[date.getMonth()];
}


function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}: CalendarProps) {

  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    const today = new Date();
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(today.getMonth() === newDate.getMonth() && today.getFullYear() == newDate.getFullYear() ? today.getDate() : 1);
    setCurrentDate(newDate);
  };
  const prevMonth = () => {
    const today = new Date();
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(today.getMonth() === newDate.getMonth() && today.getFullYear() == newDate.getFullYear() ? today.getDate() : 1);
    setCurrentDate(newDate);
  };

  return (
    <div>
      <div className="absolute grid grid-cols-11 justify-items-center h-[20lvh] max-h-[20lvh] mx-[15%] bg-csa-tan-500">
        <div className="h-full w-full max-h-[10lvh] max-w-full">
          <Image
            src={branches}
            alt="branches image"
            className="scale-125"
          />
        </div>
        <p>2</p>
        <div className="col-span-2 text-center flex flex-col justify-center">
          <p className="text-4xl text-csa-green-100">{currentDate.getFullYear()}</p>
          <p className="text-sm text-csa-green-100 border-csa-yellow-400 border-l border-r">滴水之恩定当涌泉相报: "We should return small favors with much larger ones"</p>
        </div>
        <p>5</p>
        <div className="relative flex items-center">
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pl-0.5 pt-1.5 text-csa-green-100 text-4xl font-bold">{currentDate.getDate()}</p>
          <Image
            src={dateOutlineImage}
            alt="date outline image"
          />
        </div>
        <p>7</p>
        <div className="col-span-2 text-center flex flex-col justify-center">
          <p className="collapse text-4xl text-csa-green-100">{currentDate.getFullYear()}</p>
          <p className="text-sm text-csa-green-100 border-csa-yellow-400 border-l border-r">滴水之恩定当涌泉相报: "We should return small favors with much larger ones"</p>
        </div>
        <div className="relative max-h-[20lvh] w-full max-w-full">
          <Image
            src={snake}
            alt="snake image"
            className="absolute z-50 right-0"
          />
          <Image
            src={cloud}
            alt="cloud image"
            className="absolute right-0"
          />
        </div>
        <div className="relative max-h-[20lvh] w-full max-w-full">
          <Image
            src={lanterns}
            alt="laterns image"
            className="absolute right-0 scale-150"
          />
        </div>
      </div>
      
    <DayPicker
      showOutsideDays={showOutsideDays}
      formatters={{
        formatWeekdayName: captionWeek,
        formatCaption: captionMonth,
      }}
      className={cn("px-3 pb-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 w-full",
        caption: "flex justify-center h-[20lvh] -mx-3 -mb-4 relative items-center bg-transparent",
        caption_label: "absolute bottom-1 text-sm text-csa-green-100 font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "monthNavigation" }),
          "h-7 w-7 p-0 hover:opacity-75",
        ),
        nav_button_previous: "absolute left-[29lvw]",
        nav_button_next: "absolute right-[29lvw]",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-csa-gray-200 text-sm rounded-xl border border-csa-gray-100 w-full font-normal",
        row: "grid grid-cols-7",
        cell: "text-csa-gray-200 border rounded-xl border-csa-gray-100 p-0 relative focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-full h-[10lvh] text-2xl rounded-xl p-0 font-normal",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-csa-red-200 text-csa-yellow-400",
        day_outside:
          "",
        day_disabled: "text-neutral-500 opacity-50",
        day_range_middle:
          "",
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
