import React from "react";
const companyLogos = [
  "/assets/amazon.png",
  "/assets/dribble.png",
  "/assets/hubspot.png",
  "/assets/netflix.png",
  "/assets/notion.png",
  "/assets/zoom.png",
];

const ScrollingLogos = () => {
  // Shuffle Array function to randomize logos
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="flex items-center justify-center w-full overflow-hidden pt-8">
      <div className="slider w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[200px] h-full bg-gradient-to-r from-white to-transparent z-2"></div>
        <div className="absolute top-0 right-0 w-[200px] h-full bg-gradient-to-r from-white to-transparent rotate-180 z-2"></div>

        {/* Scrolling logos */}
        <div className="slide-track flex animate-scroll w-[calc(250px*24)]">
          {/* Duplicate logos enough times to prevent gaps */}
          {shuffleArray(companyLogos)
            .concat(companyLogos)
            .concat(companyLogos)
            .map((logo, index) => (
              <div
                key={index}
                className="slide flex items-center justify-center w-[250px]"
              >
                <img
                  src={logo}
                  alt={`Logo of ${logo.split("/")[2].split(".")[0]}`}
                  className="object-contain h-12"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingLogos;
