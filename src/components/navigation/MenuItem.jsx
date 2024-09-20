import React, { useState } from "react";
import NavItems from "./NavItems";

export default function MenuItem() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center">
      <div
        className={`w-[24px] h-[16px] mr-[1.25rem] flex flex-col justify-between cursor-pointer lg:hidden`}
        onClick={toggleMenu}
      >
        <div
          className={`w-[24px] h-[2px] bg-black rounded transition-transform ${
            menuOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        ></div>
        <div
          className={`w-[24px] h-[2px] bg-black rounded transition-opacity ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-[24px] h-[2px] bg-black rounded transition-transform ${
            menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        ></div>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
        <NavItems showBtn={menuOpen} />
      </div>
    </div>
  );
}
