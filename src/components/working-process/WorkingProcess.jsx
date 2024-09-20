import React from "react";
import SectionHeading from "../services/SectionHeading";
import WorkingProcessItem from "./WorkingProcessItem";
import { processItems } from "../../data/workingProcessItemData";

export default function WorkingProcess() {
  return (
    <div
      id="working-process"
      className="w-full mt-[3%] flex flex-col justify-center items-center"
    >
      <div className="w-[80%]">
        <SectionHeading
          sectionName="Our Working Process "
          sectionDescription="Step-by-Step Guide to Achieving Your Business Goals"
        />
      </div>
      <div className="mt-[3%] flex flex-col justify-center items-center gap-[15px]">
        {processItems.map((el) => {
          return (
            <WorkingProcessItem
              processItemNumber={el.processItemNumber}
              processItemName={el.processItemName}
              processItemDescription={el.processItemDescription}
              key={el.processItemId}
            />
          );
        })}
      </div>
    </div>
  );
}
