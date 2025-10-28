import React, { useState } from 'react';

// --- ASSETS ---
import paintedKettleImg from '../assets/makemytea/kettle.png';
import read_more_img from '../assets/read_more.png';

const MakeMyTea = () => {
  // 1. Initialize state to track if the content is fully visible
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  // 2. Handler function to toggle the state
  const toggleFullText = (e) => {
    e.preventDefault();
    setIsFullTextVisible(!isFullTextVisible);
  };

  // 3. Define the full text content
  const fullText = `Our recipes are inspired by India’s diverse chai culture — bold Assam teas, spicy Mumbai-style masala chai, and delicate herbal infusions. Each variety is brewed in small batches to preserve the natural flavor and aroma.
Try our menu favorites:
Cutting Chai — The original tapri classic.
Adrak Elaichi Chai — Comfort in a cup.
Kashmiri Kahwa — A warm hug with a hint of saffron.
Tandoori Chai — Smoky, bold, and unforgettable.
Coolers & Snacks — Bun maska, khari, sandwiches, and more!
At Chai Tapri, every pour is made with passion — and a little nostalgia.`;

  // 4. Determine the displayed text based on state
  const introText = isFullTextVisible
    ? fullText
    : `We believe that making chai is an art. From our signature Masala Chai to soothing Kashmiri Kahwa or zesty Adrak Chai, every blend is handcrafted to perfection.
We don’t dip — we brew.
We don’t rush — we serve with heart.
Come, taste the tea that made Nashik fall in love again!`;

  return (
    <section className="relative font-[contentFont] w-full bg-[#4080BE] text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 gap-8">

        {/* --- LEFT: TEXT CONTENT --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 lg:w-3/5">
          <h2 className="font-[headerFont] text-4xl md:text-5xl tracking-wider mb-6 drop-shadow">
            MAKE MY TEA
          </h2>

          <p className="font-heading text-md md:text-lg lg:text-2xl tracking-wide leading-relaxed md:leading-loose max-w-3xl text-white/90 whitespace-pre-line">
            {introText} {/* Display dynamic text */}
          </p>

          {/* Conditional Read More / Show Less Buttons */}

          {/* Display 'Read More' button (text and image) when collapsed */}
          {!isFullTextVisible && (
            <button
              onClick={toggleFullText}
              className="inline-flex items-center mt-8 text-xl sm:text-2xl drop-shadow-md group focus:outline-none"
              aria-label="Read More"
            >
              <img
                src={read_more_img}
                alt="Read More icon"
                className="w-40 sm:w-48 drop-shadow-sm group-hover:scale-[1.03] transition-transform duration-200"
                loading="lazy"
              />
            </button>
          )}

          {/* Display 'Show Less' button (text only) when expanded */}
          {isFullTextVisible && (
            <button
              onClick={toggleFullText}
              className="mt-8 text-lg sm:text-xl md:text-2xl font-semibold text-white hover:text-white/90 transition-colors duration-200 focus:outline-none underline"
              aria-label="Show Less"
            >
              Show Less
            </button>
          )}

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
