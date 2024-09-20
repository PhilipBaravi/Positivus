import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  isBefore,
} from "date-fns";

export default function CalendarItem({ selectedDate, setSelectedDate }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();

  const selectDate = (date, e) => {
    e.preventDefault();
    if (selectedDate && isSameDay(date, selectedDate)) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-darkGray rounded-xl shadow-md text-white border border-white">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
          aria-label="Previous month"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-semibold">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
          aria-label="Next month"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-400"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {monthDays.map((day) => (
          <button
            key={day.toString()}
            onClick={(e) => {
              if (isSameMonth(day, currentMonth) && !isBefore(day, today)) {
                selectDate(day, e); // Prevent form submission
              }
            }}
            className={`h-10 w-10 flex items-center justify-center rounded-full
              transition-colors duration-200
              ${
                !isSameMonth(day, currentMonth)
                  ? "text-gray-600 cursor-default"
                  : isBefore(day, today)
                  ? "text-gray-600 cursor-not-allowed"
                  : "hover:bg-gray-800"
              }
              ${
                selectedDate && isSameDay(day, selectedDate)
                  ? "bg-neonGreen text-black hover:bg-[#32CD32]"
                  : ""
              }
              ${
                isToday(day) && (!selectedDate || !isSameDay(day, selectedDate))
                  ? "border border-neonGreen"
                  : ""
              }`}
            disabled={!isSameMonth(day, currentMonth) || isBefore(day, today)}
            aria-label={`${format(day, "MMMM d, yyyy")}${
              selectedDate && isSameDay(day, selectedDate) ? " (Selected)" : ""
            }`}
            aria-pressed={
              selectedDate ? isSameDay(day, selectedDate) : undefined
            }
          >
            {format(day, "d")}
          </button>
        ))}
      </div>
      {selectedDate && (
        <div className="mt-4 text-center">
          <p>Selected date: {format(selectedDate, "MMMM d, yyyy")}</p>
        </div>
      )}
    </div>
  );
}
