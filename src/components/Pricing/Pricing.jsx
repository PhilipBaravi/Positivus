import React from "react";
import AboutButton from "../about/AboutButton";
import { optionItems } from "../../data/pricingItemData";
import { Link } from "react-router-dom";
const check = `${import.meta.env.BASE_URL}assets/check.png`;
export default function Pricing() {
  return (
    <div className="mt-[20%] sm:mt-[18%] md:mt-[16%] lg:mt-[14%] xl:mt-[10%] w-full mb-[3%] flex justify-center items-center">
      <div className="flex flex-col w-[80%] justify-center items-center">
        <div className="flex flex-col justify-center items-center w-[70%] gap-[2rem]">
          <h1 className="text-black font-spaceGrotesk text-[1.6rem] 2xl:text-[2.2rem] font-bold font-[600] leading-normal inline-block bg-neonGreen">
            Scale Your Marketing with a Fractional CMO
          </h1>
          <p className="text-black font-spaceGrotesk text-[1.1rem] 2xl:text-[1.5rem] font-light font-[400] leading-normal text-center">
            Our subscription plans offer you the same level of expertise and
            support as hiring a CMO and marketing team, without the full-time
            cost.
          </p>
        </div>

        {/* Dynamic Pricing Cards */}
        <div className="flex flex-col 2xl:flex-row justify-between gap-[2.5rem] mt-[2%] w-full">
          {optionItems.map((option, index) => (
            <div
              key={index}
              className="border border-black rounded-[2.5rem] flex flex-col gap-[2.5rem] p-[2rem] justify-between items-center w-full 2xl:w-[30%] h-full"
              style={{ height: "100%" }}
            >
              <div className="flex-grow flex flex-col items-center justify-between text-center">
                <h1 className="text-black font-spaceGrotesk font-medium font-[500] leading-normal text-[1.7rem]">
                  {option.optionName}
                </h1>
                <p className="text-black font-spaceGrotesk text-[1.2rem] font-light font-[400] leading-normal">
                  {option.optionDescription}
                </p>
                <h2 className="text-black font-spaceGrotesk font-bold text-[3rem] font-[500]">
                  {option.optionPrice}
                  {option.optionPrice !== "Custom" && (
                    <span className="text-black font-spaceGrotesk font-light text-[1rem] font-[400] ml-[8px]">
                      /Month
                    </span>
                  )}
                </h2>
                <ul className="flex flex-start flex-col mb-auto">
                  {option.optionFeatures.map((feature, idx) => (
                    <li key={idx}>
                      <img
                        src={check}
                        className="w-[13px]  mr-[10px] inline-block"
                        alt="check"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/consultation" className="w-[100%]">
                <AboutButton
                  btnText="Get started"
                  className="bg-lime-500 text-white"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
