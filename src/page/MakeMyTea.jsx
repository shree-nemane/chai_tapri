import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ASSETS ---
import paintedKettleImg from '../assets/makemytea/kettle.png';
import read_more_img from '../assets/read_more.png';

const MakeMyTea = () => {
  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  const toggleFullText = (e) => {
    e.preventDefault();
    setIsFullTextVisible(!isFullTextVisible);
  };

  const introText = `We believe that making chai is an art. From our signature Masala Chai to soothing Kashmiri Kahwa or zesty Adrak Chai, every blend is handcrafted to perfection.
We don’t dip — we brew.
We don’t rush — we serve with heart.
Come, taste the tea that made Nashik fall in love again!`;

  const fullText = `Our recipes are inspired by India’s diverse chai culture — bold Assam teas, spicy Mumbai-style masala chai, and delicate herbal infusions. Each variety is brewed in small batches to preserve the natural flavor and aroma.
Try our menu favorites:
Cutting Chai — The original tapri classic.
Adrak Elaichi Chai — Comfort in a cup.
Kashmiri Kahwa — A warm hug with a hint of saffron.
Tandoori Chai — Smoky, bold, and unforgettable.
Coolers & Snacks — Bun maska, khari, sandwiches, and more!
At Chai Tapri, every pour is made with passion — and a little nostalgia.`;

  return (
    <motion.section
      className="relative font-[contentFont] w-full bg-[#4080BE] text-white py-12 sm:py-16 md:py-20 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 gap-8">

        {/* --- LEFT: TEXT CONTENT --- */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 lg:w-3/5">
          <h2 className="font-[headerFont] text-4xl md:text-5xl tracking-wider mb-6 drop-shadow">
            MAKE MY TEA
          </h2>

          <motion.div
            key={isFullTextVisible ? 'full' : 'intro'}
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 700 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-heading text-md md:text-lg lg:text-2xl tracking-wide leading-relaxed md:leading-loose max-w-3xl text-white/90 whitespace-pre-line">
              {isFullTextVisible ? fullText : introText}
            </p>
          </motion.div>

          {/* Buttons */}
          {!isFullTextVisible ? (
            <motion.button
              onClick={toggleFullText}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center mt-8 text-xl sm:text-2xl drop-shadow-md group focus:outline-none"
              aria-label="Read More"
            >
              <motion.img
              animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  }}
                src={read_more_img}
                alt="Read More icon"
                className="w-40 sm:w-48 drop-shadow-sm "
              />
            </motion.button>
          ) : (
            <motion.button
              onClick={toggleFullText}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 text-lg sm:text-xl md:text-2xl font-semibold text-white hover:text-white/90 transition-colors duration-200 focus:outline-none underline"
              aria-label="Show Less"
            >
              Show Less
            </motion.button>
          )}
        </div>

        {/* --- RIGHT: FLOATING KETTLE IMAGE --- */}
        <motion.div
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center w-full md:w-1/2 lg:w-2/5"
        >
          <img
            className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-2xl"
            src={paintedKettleImg}
            alt="A brightly painted red tea kettle"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MakeMyTea;
