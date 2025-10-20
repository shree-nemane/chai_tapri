import React from "react";

const Hero = ({ chaiImage }) => {
  return (
    // Main content area (semantic and responsive)
    <main
      className="flex flex-grow flex-col md:flex-row items-center justify-center md:justify-evenly px-4 sm:px-8 py-10 sm:py-16 text-center md:text-left"
    >
      {/* Title Section */}
      <div
        className="flex flex-col items-center md:items-start text-white font-[titleFont] drop-shadow-lg"
      >
        <h1 
        className="font-bold tracking-wide leading-[24vw] md:leading-28 lg:leading-none text-[20vw] md:text-[14vw] lg:text-[12vw] "
        >
          <span className="block">Chai से</span>
          <span className="block mt-0 md:mt-4 lg:mt-6">SHuRuVaat</span>
        </h1>
      </div>

      {/* Image Section */}
      <div className="mt-6 md:mt-0 flex justify-center md:justify-end">
        <img
          src={chaiImage}
          alt="A warm cup of chai tea"
          loading="lazy"
          className="w-40 sm:w-56 md:w-72 lg:w-96 drop-shadow-2xl "
        />
      </div>
    </main>
  );
};

export default Hero;
