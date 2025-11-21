import React from "react";

const Hero = ({ chaiImage }) => {
  return (
    <main
      className="flex flex-grow flex-col  md:flex-row items-center justify-center md:justify-start gap-8 px-20  py-10 sm:py-16 "
    >
      {/* Title Section */}
      <div
        className="flex flex-col items-end md:items-start text-white font-[mainFont] drop-shadow-lg "
      >
        <h1 
        className="font-bold tracking-wide leading-[21vw] mt-10 md:mt-0 md:leading-28 lg:leading-none text-[20vw] md:text-[12vw] lg:text-[11vw] opacity-80"
        >
          <span className="block">Chai से </span>
          <span className="block mt-0 md:mt-4 lg:mt-6">SHuRuaat</span>
        </h1>
      </div>

      {/* Image Section */}
      <div className=" md:mt-0 flex justify-center md:justify-end ">
        <img
          src={chaiImage}
          alt="A warm cup of chai tea"
          className="w-40 sm:w-56 md:w-72 lg:w-90 drop-shadow-2xl opacity-90"
        />
      </div>
    </main>
  );
};

export default Hero;
