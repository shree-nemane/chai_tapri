import React, { useState } from 'react';

import chiliLemonImg from '../assets/about/chilli.png';
import busImg from '../assets/about/bus.png';
import read_more_img from '../assets/read_more.png';

const About = () => {

  const [isExpanded, setIsExpanded] = useState(false);
 
  const toggleContent = (e) => {
    e.preventDefault(); 
    setIsExpanded(!isExpanded);
  };


  return (
    <section id="about" className="relative w-full font-[contentFont] bg-[#FFE208] pt-6 pb-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-y-visible">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Image */}
        <div className="md:col-span-4 flex justify-center">
          <img
            src={chiliLemonImg}
            alt="Illustration of chilies and a lemon"
            className="w-[30vw] md:w-60 lg:w-80 drop-shadow-md transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Center Content */}
        <div className="md:col-span-6 text-center md:text-left">
          <h2 className="font-[headerFont] text-3xl sm:text-4xl md:text-5xl text-gray-800 tracking-wide">
            ABOUT US
          </h2>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
            India runs on chai — and we’re here to keep it brewing!
            At Chai Tapri, we’ve recreated the true charm of India’s favorite roadside tea stall — with a twist of comfort, hygiene, and style.
            <br />
            We serve freshly brewed tea made the traditional way — no tea bags, no shortcuts. Just rich aroma, authentic taste, and warm smiles.
            <br />
            Born in Nashik, Chai Tapri blends the raw essence of a street tapri with the vibe of a modern café. Because the best chai deserves the best company!
          </p>

          {/* 4. Conditionally rendered content */}
          {isExpanded && (
            <div className="mt-4 pt-4 border-t border-gray-600/30">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                India is one of the largest tea-drinking nations in the world, and for us, chai is more than a beverage — it’s an emotion. From a morning cutting chai to late-night tapri talks, tea binds our hearts and stories together.
                Chai Tapri was created to capture that very emotion — a place where people from every walk of life can come together over a cup of freshly brewed tea.
                We’re a café-style quick service restaurant, serving different types of teas and tea-time snacks in a cozy yet desi setting. Our mission is simple — bring back the soul of Indian tapris, but with hygiene, quality, and comfort.
                At Chai Tapri, you’ll find no ready mixes or instant brews — only handcrafted tea prepared by trained tea-makers, served with warmth and care.
              </p>
            </div>
          )}

          {/* Display 'Read More' button (image only) when collapsed */}
          {!isExpanded && (
            <button
              onClick={toggleContent} // Attach the click handler to the button
              className="inline-flex items-center mt-6 focus:outline-none"
              aria-label="Read More"
            >
              <img
                src={read_more_img}
                alt="Read More icon"
                className="w-36 sm:w-44 md:w-48 drop-shadow-sm transition-transform duration-300 hover:scale-105"
              />
            </button>
          )}
          
          {/* Display 'Show Less' button (text only) when expanded */}
          {isExpanded && (
            <button
              onClick={toggleContent}
              className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 hover:text-gray-900 transition-colors duration-200 focus:outline-none underline"
              aria-label="Show Less"
            >
              Show Less
            </button>
          )}
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
