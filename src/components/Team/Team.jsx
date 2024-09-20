import React from "react";
import SectionHeading from "../services/SectionHeading";
import TeamItem from "./TeamItem";
import { useState } from "react";
import { useEffect } from "react";
import AboutButton from "../about/AboutButton";
import { personsObj } from "../../data/teamItemData";

export default function Team() {
  const [isTwoXlScreen, setIsTwoXlScreen] = useState(window.innerWidth >= 1536);
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);
  const [team, setTeam] = useState(false);

  const toggleTeam = () => {
    setTeam(!team);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsTwoXlScreen(window.innerWidth >= 1560);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsToRender = team
    ? personsObj
    : isTwoXlScreen
    ? personsObj.slice(0, 6)
    : isMdScreen
    ? personsObj.slice(0, 4)
    : personsObj.slice(0, 3);

  return (
    <div
      id="team"
      className="w-full mt-[3%] flex flex-col justify-center items-center"
    >
      <div className="w-[80%]">
        <SectionHeading
          sectionName="Team"
          sectionDescription="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />
      </div>
      <div className="w-[80%] flex flex-col justify-center items-center gap-[25px] md:flex md:flex-row md:flex-wrap mt-[3%] xl:w-[75%]">
        {itemsToRender.map((el) => (
          <TeamItem
            personImg={el.personImg}
            personName={el.personName}
            personProfession={el.personProfession}
            personDescription={el.personDescription}
            key={el.id}
          />
        ))}
      </div>
      <div className="w-[70%] py-[2rem] flex justify-center">
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] 2xl:w-[35%] flex justify-end">
          <AboutButton
            btnText={team ? "Show less" : "See all team"}
            btnFunction={toggleTeam}
          />
        </div>
      </div>
    </div>
  );
}
