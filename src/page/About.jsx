import React from 'react';

import chiliLemonImg from '../assets/chilli.png';
import busImg from '../assets/bus.png';
import read_more from '../assets/read_more.png';

const About = () => {
  return (
    <section id="about" className="relative w-full font-[contentFont] bg-[#FFE208] py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-y-visible">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Image */}
        <div className="md:col-span-4 flex justify-center">
          <img
            src={chiliLemonImg}
            alt="Illustration of chilies and a lemon"
            className="w-36 sm:w-44 md:w-72 rotate-[-5deg] drop-shadow-md transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Center Content */}
        <div className="md:col-span-6 text-center md:text-left">
          <h2 className="font-[headerFont] text-3xl sm:text-4xl md:text-5xl text-gray-800 tracking-wide">
            ABOUT US
          </h2>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <a
            href="#"
            className="inline-flex items-center mt-6"
          >
            <img
              src={read_more}
              alt="Read more icon"
              className="w-36 sm:w-44 md:w-48 mr-2 drop-shadow-sm"
            />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="absolute right-4 md:right-12 bottom-0 transform translate-y-1/2 z-30">
        <img
          src={busImg}
          alt="Illustration of a red bus"
          className="w-40 sm:w-56 md:w-72 lg:w-80 xl:w-[22rem] max-w-md drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
