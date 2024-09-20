import React from "react";

export default function SectionHeading({ sectionName, sectionDescription }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 xl:flex-row xl:justify-start xl:items-center">
      <h1 className="bg-neonGreen text-black font-spaceGrotesk text-3xl font-medium font-[500] leading-normal px-[1%] rounded-[0.4375rem]">
        {sectionName}
      </h1>
      {/*In original design there was images for mobiles/tablets, but image resolution was terrible and not all of them sazme size so I changed it with a text.On higher screen sizes images appear */}
      <p className="text-black text-center font-spaceGrotesk text-[1rem] font-medium font-[500] leading-[1.5rem] xl:max-w-[800px] xl:text-start">
        {sectionDescription}
      </p>
    </div>
  );
}
