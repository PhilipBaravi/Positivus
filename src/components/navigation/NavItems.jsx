import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import NavButton from "./NavButton";

export default function NavItems({ showBtn }) {
  const menuItems = ["Services", "Working Process", "Team", "Pricing", "Blog"];
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    const elementId = id.toLowerCase().replace(/\s+/g, "-");

    if (location.pathname !== "/") {
      // If not on the home page, navigate to the home page first
      navigate("/", { replace: true });

      // Wait for the page to load, then scroll to the element
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on the home page, just scroll
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNavigation = (e) => {
    e.preventDefault();
    const elementId = "contact-us";

    if (location.pathname !== "/") {
      // If not on the home page, navigate to the home page first
      navigate("/", { replace: true });

      // Wait for the page to load, then scroll to the element
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on the home page, just scroll
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={`${
        showBtn ? "block" : "hidden"
      } lg:block absolute lg:relative top-[56px] lg:top-auto right-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none lg:p-0 z-50`}
    >
      <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 items-center lg:items-center pb-4 2xl:py-0">
        {menuItems.map((el, i) => (
          <li
            key={i}
            className="hover:underline decoration-neonGreen cursor-pointer text-black font-spaceGrotesk text-xl font-normal leading-7"
          >
            {el === "Pricing" ? (
              <Link to="/pricing">Pricing</Link>
            ) : (
              <span onClick={() => handleScroll(el)}>{el}</span>
            )}
          </li>
        ))}
        <NavButton btnFunction={handleNavigation} />
      </ul>
    </div>
  );
}
