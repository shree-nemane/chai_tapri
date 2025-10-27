import React, { useState } from 'react';

// --- ASSETS ---
import trumpetImg from '../assets/trumpet.png';
import trophyIcon from '../assets/whyus/medal.png'; 
import ribbonIcon from '../assets/whyus/medal.png'; 
import starIcon from '../assets/whyus/star.png';
import heartIcon from '../assets/whyus/medal.png'; 
import read_more_img from '../assets/read_more.png'; 

const whyUsItems = [
  { icon: trophyIcon, text: 'Authentic Taste' },
  { icon: ribbonIcon, text: 'Affordable Luxury' },
  { icon: starIcon, text: 'Hygienic and Homely' },
  { icon: heartIcon, text: 'Made with Love' },
];

const WhyUs = () => {
  
  return (
    <section id="whyus" className="w-full bg-white font-[contentFont] pt-20 md:pt-24 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center"> 
        
        {/* Section Title */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <img
            src={trumpetImg}
            alt="Left trumpet icon"
            className="w-12 sm:w-16 md:w-20 lg:w-24 transform -scale-x-100 drop-shadow-md"
            loading="lazy"
          />
          <h2 className="font-[headerFont] text-3xl sm:text-4xl md:text-5xl text-gray-800 tracking-wide">
            WHY US
          </h2>
          <img
            src={trumpetImg}
            alt="Right trumpet icon"
            className="w-12 sm:w-16 md:w-20 lg:w-24 drop-shadow-md"
            loading="lazy"
          />
        </div>

        <div className="flex justify-center mb-12">
            <p className="max-w-4xl text-xl sm:text-2xl text-gray-700">
                Great chai is not just about taste — it’s about experience. Here’s why our customers love us:
            </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-12 mb-10">
          {whyUsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-48 h-48 sm:w-48 sm:h-48 md:w-44 md:h-44 lg:w-56 lg:h-56 p-4">
                <img
                  src={item.icon}
                  alt={item.text}
                  className="w-full h-full object-contain drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-xl sm:text-xl md:text-2xl font-semibold text-amber-800">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyUs;