"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useState } from "react";


export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function captionWeek(date: Date) {
  const week = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  return week[date.getDay()];
}

function Calendar({
  className,
  classNames,
  showOutsideDays = false,
  ...props
}: CalendarProps) {

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  const nextDate = () => {
    setCurrentMonth(currentMonth + 1);
  };


  return (
    <div>
      <div>{currentMonth}</div>
    <DayPicker
      showOutsideDays={showOutsideDays}
      formatters={{
        formatWeekdayName: captionWeek,
      }}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4 w-full",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-lg font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-csa-gray-200 text-sm rounded-xl border border-csa-gray-100 w-full font-normal text-[0.8rem]",
        row: "grid grid-cols-7",
        cell: "text-csa-gray-200 border rounded-xl border-csa-gray-100 p-0 relative focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-full h-[10lvh] text-2xl rounded-xl p-0 font-normal",
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-csa-red-200 text-csa-yellow-400 hover:bg-neutral-900 hover:text-neutral-50",
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
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight onClick={nextDate} className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
    </div>
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
