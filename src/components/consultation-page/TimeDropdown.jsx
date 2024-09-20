import { ClockIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function TimeSlotSelector({
  selectedTimeSlot,
  setSelectedTimeSlot,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown} // Toggle dropdown on click
        >
          {selectedTimeSlot ? selectedTimeSlot : "Select time"}
          <ClockIcon className="w-5 h-5 ml-2" />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                onClick={() => {
                  setSelectedTimeSlot(slot);
                  setIsOpen(false);
                }}
              >
                <ClockIcon className="w-5 h-5 mr-2" />
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
