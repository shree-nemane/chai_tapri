import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import chiliLemonImg from "../assets/about/chilli.png";
import busImg from "../assets/about/bus.png";
import read_more_img from "../assets/read_more.png";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleExpandEvent = () => setIsExpanded(true);

    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const rect = aboutSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible && !isExpanded) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("expandAboutSection", handleExpandEvent);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("expandAboutSection", handleExpandEvent);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isExpanded]);

  return (
    <section
      id="about"
      className="relative w-full font-[contentFont] bg-[#FFE208] pt-6 pb-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-y-visible"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* --- LEFT IMAGE (Floating + Scroll Reveal) --- */}
        <motion.div
          className="md:col-span-4 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={chiliLemonImg}
            alt="Illustration of chilies and a lemon"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[30vw] md:w-60 lg:w-80 drop-shadow-md"
          />
        </motion.div>

        {/* --- CENTER CONTENT (Scroll Reveal) --- */}
        <motion.div
          className="md:col-span-6 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-[headerFont] text-3xl sm:text-4xl md:text-5xl text-gray-800 tracking-wide">
            ABOUT US
          </h2>

          <p className="mt-4 text-md md:text-2xl text-gray-700 leading-relaxed tracking-wide">
            India runs on chai — and we’re here to keep it brewing!
            At Chai Tapri, we’ve recreated the true charm of India’s favorite roadside tea stall — 
            with a twist of comfort, hygiene, and style.
            <br />
            We serve freshly brewed tea made the traditional way — no tea bags, no shortcuts. 
            Just rich aroma, authentic taste, and warm smiles.
            <br />
            Born in Nashik, Chai Tapri blends the raw essence of a street tapri with the vibe 
            of a modern café. Because the best chai deserves the best company!
          </p>

          {/* --- ANIMATED DIVIDER (Reveals on Expand) --- */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="h-[2px] bg-gray-600/40 origin-center mt-6 mb-4"
              />
            )}
          </AnimatePresence>

          {/* --- EXPANDED CONTENT --- */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key="expanded-content"
                initial={{ opacity: 0, maxHeight: 0 }}
                animate={{ opacity: 1, maxHeight: 800 }}
                exit={{ opacity: 0, maxHeight: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed tracking-wide"
                >
                  India is one of the largest tea-drinking nations in the world, 
                  and for us, chai is more than a beverage — it’s an emotion. 
                  From a morning cutting chai to late-night tapri talks, tea binds our hearts 
                  and stories together. Chai Tapri was created to capture that very emotion — 
                  a place where people from every walk of life can come together over a cup of 
                  freshly brewed tea. We’re a café-style quick service restaurant, serving 
                  different types of teas and tea-time snacks in a cozy yet desi setting. 
                  Our mission is simple — bring back the soul of Indian tapris, but with hygiene, 
                  quality, and comfort. At Chai Tapri, you’ll find no ready mixes or instant brews — 
                  only handcrafted tea prepared by trained tea-makers, served with warmth and care.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- READ MORE BUTTON (Animated Pulse) --- */}
          {!isExpanded && (
            <motion.button
              onClick={toggleContent}
              className="inline-flex items-center mt-6 focus:outline-none"
              aria-label="Read More"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.img
                src={read_more_img}
                alt="Read More icon"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-36 sm:w-44 md:w-48 drop-shadow-sm"
              />
            </motion.button>
          )}

          {/* --- SHOW LESS BUTTON --- */}
          {isExpanded && (
            <motion.button
              onClick={toggleContent}
              className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 hover:text-gray-900 transition-colors duration-200 focus:outline-none underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Show Less"
            >
              Show Less
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* --- RIGHT IMAGE (Floating + Scroll Reveal) --- */}
      <motion.div
        className="absolute right-4 md:right-12 bottom-0 transform translate-y-1/2 z-30"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.img
          src={busImg}
          alt="Illustration of a red bus"
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-40 sm:w-56 md:w-72 lg:w-80 xl:w-[22rem] max-w-md drop-shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default About;
