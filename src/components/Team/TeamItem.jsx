import React from "react";

export default function TeamItem({
  personImg,
  personName,
  personProfession,
  personDescription,
}) {
  return (
    <div className="w-[24.5rem] 2xl:w-[27rem] bg-lightGray flex flex-col border border-black-500 rounded-[2.8125rem] shadow-[0px_5px_0px_0px_#191A23]">
      <div className="w-full p-[2rem] flex flex-col">
        <div className="flex">
          <svg
            className="ml-auto"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <circle cx="17" cy="17" r="17" fill="black" />
            <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill="#B9FF66" />
            <path
              d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
              fill="#B9FF66"
            />
            <path
              d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
              fill="#B9FF66"
            />
          </svg>
        </div>
        <div className="flex   items-center">
          <img
            src={personImg}
            className="w-[110px] h-[110px] rounded-[50%] border border-darkGray filter hue-rotate-[350deg]"
          />
          <div className="flex flex-col gap-[2px] flex ml-[10px]">
            <h2 className="text-black font-spaceGrotesk text-[1.25rem] font-medium font-[500] leading-normal">
              {personName}
            </h2>
            <p className="text-black font-spaceGrotesk text-[1.25rem] font-medium font-[400] leading-normal">
              {personProfession}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-black p-[1.5rem] w-[80%] mx-auto">
        <p className="text-black font-spaceGrotesk text-[1rem] font-medium font-[400] leading-normal py-[1rem]">
          {personDescription}
        </p>
      </div>
    </div>
  );
}
