import React from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function Nav() {
  return (
    <div className="w-full fixed top-0 left-0 flex justify-center z-50 bg-white shadow-md">
      <div className="w-[100%] xl:w-[80%] py-4 px-6 flex justify-between items-center">
        <Logo />
        <MenuItem />
      </div>
    </div>
  );
}
