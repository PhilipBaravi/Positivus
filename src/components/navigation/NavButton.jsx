import React from "react";

export default function NavButton({ btnFunction }) {
  return (
    <button
      onClick={btnFunction}
      className="relative px-4 py-2 flex justify-center items-center font-spaceGrotesk cursor-pointer text-black bg-white text-l font-normal leading-9 rounded-[0.875rem] border border-[1px] border-darkGray overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:bg-neonGreen before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:text-black z-10"
    >
      <span className="relative z-10">Request a quote</span>
    </button>
  );
}
