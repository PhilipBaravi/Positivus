import React from "react";

export default function ServicesItem({
  textTop,
  textUnder,
  textBackground,
  background,
  btn,
  serviceImg,
  moreColor,
  decorationColor,
}) {
  return (
    <div
      className={`flex flex-row w-full max-w-[400px] max-h-[500px] xl:w-[500px] xl:max-w-[500px] xl:h-[310px] 2xl:min-w-[600px] 3xl:min-w-[700px] rounded-[2.8125rem] border border-[#191A23] bg-${background} shadow-[0_5px_0_0_#191A23]`}
    >
      <div className="flex flex-col p-[3.125rem]">
        <div>
          <div>
            <h2
              className={`rounded-[0.4375rem] bg-${textBackground} inline-block text-black font-spaceGrotesk text-[1.625rem] font-medium font-[500] leading-normal p-[1px]`}
            >
              {textTop}
            </h2>
          </div>
          <div className="w-full max-w-[300px] flex flex-wrap">
            <p
              className={`rounded-[0.4375rem] bg-${textBackground} text-black font-spaceGrotesk text-[1rem] font-medium leading-normal p-[1px] mt-[5px] inline-block w-full break-words clear-both`}
            >
              {textUnder.length > 100
                ? textUnder.slice(0, 160) + "..."
                : textUnder}
            </p>
          </div>
        </div>
        <div className="flex flex-start items-center w-[200px] pt-[15px]">
          <div className="">{btn}</div>
          <p
            className={`ml-[10px] font-spaceGrotesk text-[1.25rem] font-normal font-[500] leading-[1.75rem] cursor-pointer text-${moreColor} hover:underline decoration-${decorationColor}`}
            href="#"
          >
            Learn more
          </p>
        </div>
      </div>
      <div className="w-[300px] hidden 2xl:block 2xl:flex 2xl:justify-center 2xl:items-center">
        <img src={serviceImg} alt="Service Image" />
      </div>
    </div>
  );
}
