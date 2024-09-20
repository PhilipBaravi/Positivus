import React, { useState } from "react";

export default function WorkingProcessItem({
  processItemNumber,
  processItemName,
  processItemDescription,
}) {
  const [processItem, setProcessItem] = useState(false);

  const toggleProcessItem = () => {
    setProcessItem(!processItem);
  };

  return (
    <div
      className={`w-[24.5rem] md:w-[70%] border border-darkGray-500 rounded-[2.8125rem] shadow-[0px_5px_0px_0px_#191A23] transition-all duration-500 ease-in-out ${
        processItem ? "bg-neonGreen" : "bg-lightGray"
      }`}
    >
      <div className="w-full p-[1.875rem] flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h3 className="text-black font-spaceGrotesk text-[1.875rem] font-medium">
            {processItemNumber}
          </h3>
          <p className="text-black font-spaceGrotesk text-[1.125rem] font-medium">
            {processItemName}
          </p>
        </div>
        <div className="flex items-center" onClick={toggleProcessItem}>
          {!processItem ? (
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <circle
                cx="15"
                cy="15"
                r="14.5"
                fill="#F3F3F3"
                stroke="#191A23"
              />
              <path
                d="M13.2429 21.2478V16.2202H8.27734V13.303H13.2429V8.27539H16.2842V13.303H21.2498V16.2202H16.2842V21.2478H13.2429Z"
                fill="#191A23"
              />
            </svg>
          ) : (
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 58 59"
              fill="none"
            >
              <circle
                cx="29"
                cy="29.5"
                r="28.5"
                fill="#F3F3F3"
                stroke="#191A23"
              />
              <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          processItem ? "max-h-[20rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transitionProperty: "max-height, opacity", // Ensures height and opacity transition together
        }}
      >
        <div className="flex flex-col w-[80%] mx-auto border-t border-black">
          <p className="py-[2rem] text-black text-spaceGrotesk text-[1.125rem] font-medium font-[500] leading-normal">
            {processItemDescription}
          </p>
        </div>
      </div>
    </div>
  );
}
