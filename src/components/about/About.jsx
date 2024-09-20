import React, { useState, useEffect } from "react";
import Illustration from "./Illustration";
import AboutButton from "./AboutButton";
import ScrollingLogos from "./ScrollingLogos";
import { Link } from "react-router-dom";

export default function About() {
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="about" className="mx-auto w-full pt-16">
      <div className="md:flex md:flex-row items-center justify-between pt-[5%] md:pt-[3%] lg:pt-[1rem] w-[80%] mx-auto">
        <div className="flex flex-col justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 md:w-1/2 text-center md:text-left lg:justify-center lg:items-start md:items-start">
          <h1 className="w-full font-spaceGrotesk text-[2.6875rem] xl:text-[3.75rem] font-medium leading-normal lg:leading-[4rem]">
            Navigating the digital landscape for success
          </h1>
          {!isMdScreen && <Illustration />}{" "}
          <p className="w-full font-spaceGrotesk text-[1rem] xl:text-[1.25rem] font-[500] leading-[1.5rem] lg:leading-[2rem]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div>
            <Link to="/consultation">
              <AboutButton btnText="Book a consultation" className="lg:mt-4" />
            </Link>
          </div>
        </div>
        {isMdScreen && (
          <div className="md:w-1/2 flex justify-center items-center z-0">
            <Illustration className="w-full h-auto max-w-full" />
          </div>
        )}
      </div>
      <div className="w-full">
        <ScrollingLogos />
        {!isMdScreen && <ScrollingLogos />}
      </div>
    </div>
  );
}
