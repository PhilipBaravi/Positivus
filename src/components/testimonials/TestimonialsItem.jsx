import React, { useState } from "react";

export default function TestimonialsItem() {
  const testimonialsObj = [
    {
      id: 1,
      testimonialDescription:
        '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      testimonialName: "John Smith",
      testimonialProfession: "Marketing Director at XYZ Corp",
      rating: 5,
    },
    {
      id: 2,
      testimonialDescription:
        '"Positivus has been instrumental in helping us revamp our digital strategy. Their insights and expertise led to a 40% increase in conversions within the first six months. The team is dedicated and results-driven. We are incredibly grateful for their support!"',
      testimonialName: "Emily Roberts",
      testimonialProfession: "CEO at Alpha Solutions",
      rating: 4,
    },
    {
      id: 3,
      testimonialDescription:
        '"The Positivus team exceeded our expectations. They developed a tailored marketing plan that perfectly matched our needs and helped us reach new customers. Their attention to detail and commitment to our success is unparalleled."',
      testimonialName: "Michael Lee",
      testimonialProfession: "Founder at Creative Ventures",
      rating: 3,
    },
    {
      id: 4,
      testimonialDescription:
        '"Working with Positivus has been an absolute game-changer for our business. Their strategies helped us improve brand visibility and customer engagement across all platforms. They truly understand the digital landscape."',
      testimonialName: "Sara Nguyen",
      testimonialProfession: "COO at Bright Horizons",
      rating: 4,
    },
    {
      id: 5,
      testimonialDescription:
        '"We were struggling to find a digital marketing agency that aligned with our goals until we met Positivus. Their team took the time to understand our vision and delivered outstanding results. Highly recommended!"',
      testimonialName: "David Johnson",
      testimonialProfession: "VP of Marketing at GreenTech",
      rating: 2,
    },
    {
      id: 6,
      testimonialDescription:
        '"From day one, Positivus impressed us with their knowledge and professionalism. Their work has been crucial in expanding our reach and improving our online sales. We look forward to continuing this partnership."',
      testimonialName: "Jessica Adams",
      testimonialProfession: "E-Commerce Manager at Trendy Threads",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsObj.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsObj.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return (
      <svg
        className="xl:scale-[1.3]"
        xmlns="http://www.w3.org/2000/svg"
        width="146"
        height="14"
        viewBox="0 0 146 14"
        fill="none"
      >
        {/* First star */}
        <path
          d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
          fill={currentIndex === 1 ? "#B9FF66" : "white"}
        />
        {/* Second star */}
        <path
          d="M40.0099 2.05941L47 0L44.9604 7.0099L47 14L40.0099 11.9604L33 14L35.0594 7.0099L33 0L40.0099 2.05941Z"
          fill={currentIndex === 2 ? "#B9FF66" : "white"}
        />
        {/* Third star */}
        <path
          d="M73.0099 2.05941L80 0L77.9604 7.0099L80 14L73.0099 11.9604L66 14L68.0594 7.0099L66 0L73.0099 2.05941Z"
          fill={currentIndex === 3 ? "#B9FF66" : "white"}
        />
        {/* Fourth star */}
        <path
          d="M106.01 2.05941L113 0L110.96 7.0099L113 14L106.01 11.9604L99 14L101.059 7.0099L99 0L106.01 2.05941Z"
          fill={currentIndex === 4 ? "#B9FF66" : "white"}
        />
        {/* Fifth star */}
        <path
          d="M139.01 2.05941L146 0L143.96 7.0099L146 14L139.01 11.9604L132 14L134.059 7.0099L132 0L139.01 2.05941Z"
          fill={currentIndex === 5 ? "#B9FF66" : "white"}
        />
      </svg>
    );
  };

  return (
    <div className="xl:px-[12rem]">
      <div className="bg-darkGray p-[1.875rem] pb-[3.75rem] flex flex-col items-start gap-[1rem] rounded-[2.8125rem]">
        <div className="border border-neonGreen rounded-[2.8125rem]">
          <p className="p-[1.87rem] text-white font-spaceGrotesk text-[1rem] font-medium font-[400] leading-[1.5rem]">
            {testimonialsObj[currentIndex].testimonialDescription}
          </p>
        </div>
        <div className="pt-[1rem] flex flex-col ml-[7%]">
          <h2 className="text-neonGreen font-spaceGrotesk text-[1.25rem] font-medium font-[600] leading-normal">
            {testimonialsObj[currentIndex].testimonialName}
          </h2>
          <p className="text-white font-spaceGrotesk text-[1.125rem] font-medium font-[400] leading-normal">
            {testimonialsObj[currentIndex].testimonialProfession}
          </p>
        </div>
        <div className="flex w-full justify-between pt-[2.5rem]">
          {/* Left Arrow */}
          <svg
            onClick={currentIndex === 0 ? null : handlePrev}
            className="cursor-pointer xl:scale-[1.3]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g opacity={currentIndex === 0 ? 0.3 : 1}>
              <path
                d="M22 13.5C22.8284 13.5 23.5 12.8284 23.5 12C23.5 11.1716 22.8284 10.5 22 10.5L22 13.5ZM0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5L2 13.5L22 13.5L22 10.5Z"
                fill="white"
              />
            </g>
          </svg>
          {/* Star Rating */}
          {renderStars(testimonialsObj[currentIndex].rating)}
          {/* Right Arrow */}
          <svg
            onClick={
              currentIndex === testimonialsObj.length - 1 ? null : handleNext
            }
            className="cursor-pointer xl:scale-[1.3]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g opacity={currentIndex === testimonialsObj.length - 1 ? 0.3 : 1}>
              <path
                d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM2 13.5L22 13.5L22 10.5L2 10.5L2 13.5Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
