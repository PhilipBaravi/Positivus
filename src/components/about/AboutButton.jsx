import React from "react";

export default function AboutButton({ btnText, btnFunction }) {
  return (
    <button
      onClick={btnFunction}
      className={`w-full relative px-4 py-5 md:justify-start md:items-left flex justify-center items-center font-spaceGrotesk cursor-pointer text-white bg-darkGray text-[1.25rem] font-normal leading-[1.75rem] rounded-[0.875rem] border border-[1px] border-darkGray overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:bg-neonGreen before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:text-black z-10`}
    >
      <span className="relative z-10 mx-auto">{btnText}</span>
    </button>
  );
}
