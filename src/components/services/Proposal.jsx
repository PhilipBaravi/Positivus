import React, { useEffect, useState } from "react";
import AboutButton from "../about/AboutButton";
import { proposalSvg } from "./ProposalSvg";

export default function Proposal() {
  const [isXlScreen, setIsXlScreen] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsXlScreen(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to scroll to the contact section
  const scrollToContactUs = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="proposal" className="flex justify-center items-center mt-16">
      <div className="w-[390px] h-[370px] xl:min-w-[77rem] bg-lightGray rounded-[2.8rem] flex justify-between items-center">
        <div className="p-[3.125rem] flex flex-col justify-between flex-start gap-[1.25rem] xl:max-w-[35rem]">
          <h1 className="font-spaceGrotesk text-[1.625rem] font-medium font-500 leading-normal">
            Let's make things right
          </h1>
          <p className="font-spaceGrotesk text-[1rem] font-medium font-400 leading-[1.5rem]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          {/* Pass the scroll function to the AboutButton */}
          <AboutButton
            btnText={
              isXlScreen ? "Get your free proposal" : "Get your proposal"
            }
            btnFunction={scrollToContactUs}
          />
        </div>
        <div className="hidden xl:block">{proposalSvg}</div>
      </div>
    </div>
  );
}
