import React from "react";
import SectionHeading from "./SectionHeading";
import Proposal from "./Proposal";
import ServiceItems from "./ServiceItems";

export default function Services() {
  return (
    <section
      id="services"
      className="mt-[5%] w-[80%] mx-auto flex flex-col justify-between items-center"
    >
      <SectionHeading
        sectionName="Services"
        sectionDescription="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <ServiceItems />
      <Proposal />
    </section>
  );
}
