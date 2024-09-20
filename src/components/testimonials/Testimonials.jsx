import React from "react";
import SectionHeading from "../services/SectionHeading";
import TestimonialsItem from "./TestimonialsItem";

export default function Testimonials() {
  return (
    <div
      id="testimonials"
      className="w-full mt-[3%] flex flex-col justify-center items-center"
    >
      <div className="w-[80%]">
        <SectionHeading
          sectionName="Testimonials"
          sectionDescription="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
      </div>
      <div className="w-[80%] flex flex-col justify-center items-center gap-[25px] md:flex md:flex-row md:flex-wrap mt-[3%] xl:w-[75%]">
        <TestimonialsItem />
      </div>
    </div>
  );
}
