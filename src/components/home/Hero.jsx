import React from 'react';

const Hero = ({ chaiImage }) => {
  return (
    // Main content area (semantic and responsive)
    <main className="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-evenly px-4 sm:px-8 py-8 sm:py-12 text-center md:text-left">
      
      {/* Title Section */}
      <div className="font-[titleFont]  text-white flex flex-col items-center md:items-start drop-shadow-lg">
        <h1 className="text-[18vw] md:text-8xl lg:text-[12vw] font-bold tracking-wide ">
          <span className="block">Chai से</span>
          <span className="block md:mt-4 lg:mt-6">SHuRuVaat</span>
        </h1>
      </div>

      {/* Image Section */}
      <div className="md:mt-0 flex justify-center md:justify-end ">
        <img
          className="w-48 md:w-72 lg:w-96 drop-shadow-2xl "
          src={chaiImage}
          alt="A warm cup of chai tea"
          loading="lazy"
        />
      </div>
    </main>
  );
};

export default Hero;
