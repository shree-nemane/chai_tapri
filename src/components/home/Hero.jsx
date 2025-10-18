import React from 'react';

const Hero = ({ chaiImage }) => {
  return (
    // Main content area (semantic and responsive)
    <main className="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-evenly px-4 sm:px-8 py-8 sm:py-12 text-center md:text-left">
      
      {/* Title Section */}
      <div className="font-[titleFont] text-white flex flex-col items-center md:items-start drop-shadow-lg">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wide leading-tight">
          <span className="block">Chai से</span>
          <span className="block mt-2 sm:mt-3 md:mt-4 lg:mt-6">SHuRuVaat</span>
        </h1>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
        <img
          className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-96 drop-shadow-2xl transition-transform duration-500 hover:scale-105"
          src={chaiImage}
          alt="A warm cup of chai tea"
          loading="lazy"
        />
      </div>
    </main>
  );
};

export default Hero;
