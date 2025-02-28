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
  return "";
}


function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}: CalendarProps) {

  const [currentDate, setCurrentDate] = useState(new Date());
  const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

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
      <div className="flex items-end w-[90%] lg:w-[70%] mx-[5%] lg:mx-[15%] z-40 bg-csa-tan-500 outline">
        {/* <div className="w-[14%]">
          <Image
            src={branches}
            alt="branches image"
          />
        </div>
        <div className="flex flex-col lg:gap-y-2 w-[22%] ml-[3%] pb-2 text-center">
          <p className="text-lg sm:text-2xl lg:text-4xl font-bold text-csa-green-100">{currentDate.getFullYear()}</p>
          <p className="text-[8px] sm:text-xs lg:text-sm px-2 text-csa-green-100 border-csa-yellow-400 border-l border-r">滴水之恩定当涌泉相报: "We should return small favors with much larger ones"</p>
        </div>
        <div className="w-[22%] text-center">
          <p className="text-xs text-csa-green-100 font-medium">{monthNames[currentDate.getMonth()]}</p>
        </div> */}
        {/* <div className="relative outline flex flex-col gap-y-1 items-center w-[22lvw] lg:w-[16lvw] pb-1 text-center">
          <p className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pl-0.5 pt-0.5 md:pt-1.5 text-csa-green-100 text-base sm:text-xl md:text-3xl font-bold">{currentDate.getDate()}</p>
          <Image
            src={dateOutlineImage}
            alt="date outline image"
            className="max-h-[10lvh] px-[4lvw] sm:px-[6lvw] lg:px-[4lvw]"
          />
          <p className="text-sm sm:text-base lg:text-lg text-csa-green-100 font-medium">{monthNames[currentDate.getMonth()]}</p>
        </div>
        <div className="w-[14lvw] lg:w-[10lvw] pb-2 text-center outline">
          <p className="text-[8px] sm:text-xs px-2 text-csa-green-100 border-csa-yellow-400 border-l border-r">滴水之恩定当涌泉相报: "We should return small favors with much larger ones"</p>
        </div>
        <div className="outline">
          <Image
            src={snake}
            alt="snake image"
            className="max-h-[20lvh] max-w-[10lvw]"
          />
        </div>
        <div className="outline">
          <Image
            src={lanterns}
            alt="lanterns image"
            className="max-h-[20lvh] max-w-[7lvw]"
          />
        </div> */}
        <div className="h-full w-full max-h-[10lvh] max-w-full">
          <Image
            src={branches}
            alt="branches image"
            className="scale-125"
          />
        </div>
        <p>2</p>
        <div className="col-span-2 text-center flex flex-col justify-center">
          <p className="text-xl lg:text-4xl text-csa-green-100">{currentDate.getFullYear()}</p>
          <p className="text-[8px] sm:text-xs lg:text-sm text-csa-green-100 border-csa-yellow-400 border-l border-r">滴水之恩定当涌泉相报: "We should return small favors with much larger ones"</p>
        </div>
        <p>5</p>
        <div className="relative flex items-center">
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pl-0.5 pt-1.5 text-csa-green-100 text-base lg:text-4xl font-bold">{currentDate.getDate()}</p>
          <Image
            src={dateOutlineImage}
            alt="date outline image"
            className="scale-[1.3]"
          />
        </div>
        <p>7</p>
        <div className="col-span-2 text-center flex flex-col justify-center">
          <p className="collapse text-xl lg:text-4xl text-csa-green-100">{currentDate.getFullYear()}</p>
          <p className="text-[8px] sm:text-xs lg:text-sm text-csa-green-100 border-csa-yellow-400 border-l border-r">滴水之恩定当涌泉相报: "We should return small favors with much larger ones"</p>
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
      className={className}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "w-full",
        caption: "flex justify-center relative items-center",
        caption_label: "",
        nav: "space-x-1 flex items-center",
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
