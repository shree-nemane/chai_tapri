import React from 'react';

// --- ASSETS ---
import paintedKettleImg from '../assets/makemytea/kettle.png';
import read_more from '../assets/read_more.png';

const MakeMyTea = () => {
  return (
    <section className="relative font-[contentFont] w-full bg-[#4080BE] text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 gap-8">

        {/* --- LEFT: TEXT CONTENT --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 lg:w-3/5">
          <h2 className="font-[headerFont] text-4xl md:text-5xl tracking-wider mb-6 drop-shadow">
            MAKE MY TEA
          </h2>

          <p className="font-heading text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose max-w-3xl text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident.
          </p>

          <a
            href="#"
            className="inline-flex items-center mt-8 text-xl sm:text-2xl  drop-shadow-md"
          >
            <img src={read_more} alt="Read more icon" className="w-40 sm:w-48 mr-2" loading="lazy" />
          </a>
        </div>

        {/* --- RIGHT: IMAGE --- */}
        <div className="flex justify-center w-full md:w-1/2 lg:w-2/5">
          <img
            className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
            src={paintedKettleImg}
            alt="A brightly painted red tea kettle"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MakeMyTea;
