import React from "react";
import SectionHeading from "../services/SectionHeading";
import CaseStudiesItem from "./CaseStudiesItem";
import { caseStudiesObj } from "../../data/caseStudiesData";

export default function CaseStudies({ text }) {
  return (
    <div
      id="case-studies"
      className="mt-[5%] w-[100%] mx-auto flex flex-col justify-between items-center"
    >
      <div className="w-[80%]">
        <SectionHeading
          sectionName="Case Studies"
          sectionDescription="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
      </div>
      <div
        className="w-[100%] 3xl:h-[340px] 3xl:max-w-[1234px] pl-[10%] xl:pl-0 3xl:pl-0 3xl:mt-[2%] scrollbar-hide overflow-x-scroll scrollbar-hide flex gap-[1.25rem] 3xl:gap-0 3xl:rounded-[2.8125rem] 3xl:bg-darkGray 3xl:w-[80%] 3xl:flex 3xl:justify-between 3xl:items-center xl:justify-center xl:items-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {caseStudiesObj.map((el, i) => {
          return (
            <CaseStudiesItem
              text={el.caseStudiesText}
              key={el.id}
              border={
                i === caseStudiesObj.length - 1
                  ? "none"
                  : "3xl:border-r 3xl:border-white-500"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
