import React from "react";
import { motion } from "framer-motion";

import trumpetImg from "../assets/whyus/trumpet.png";
import trophyIcon from "../assets/whyus/trophyIcon.jpg";
import ribbonIcon from "../assets/whyus/ribbonIcon.jpg";
import starIcon from "../assets/whyus/starIcon.jpg";
import heartIcon from "../assets/whyus/heartIcon.jpg";

const whyUsItems = [
  { icon: trophyIcon, text: "Authentic Taste" },
  { icon: ribbonIcon, text: "Affordable Luxury" },
  { icon: starIcon, text: "Hygienic and Homely" },
  { icon: heartIcon, text: "Made with Love" },
];

const WhyUs = () => {
  return (
    <section
      id="whyus"
      className="w-full bg-white font-[contentFont] pt-20 md:pt-24 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto text-center">
        {/* --- TITLE SECTION --- */}
        <motion.div
          className="flex justify-center items-center gap-4 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={trumpetImg}
            alt="Left trumpet icon"
            className="w-12 sm:w-16 md:w-20 lg:w-24 transform -scale-x-100 drop-shadow-md"
          />

          <h2 className="font-[headerFont] text-3xl sm:text-4xl md:text-5xl text-gray-800 tracking-wide">
            WHY US
          </h2>

          <img
            src={trumpetImg}
            alt="Right trumpet icon"
            className="w-12 sm:w-16 md:w-20 lg:w-24 drop-shadow-md"
          />
        </motion.div>

        {/* --- SUBTEXT --- */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="max-w-4xl text-xl sm:text-2xl text-gray-700">
            Great chai is not just about taste — it’s about experience. Here’s
            why our customers love us:
          </p>
        </motion.div>

        {/* --- ICONS GRID --- */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-12 mb-10"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {whyUsItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
              whileHover={{ scale: 1.08 }}
            >
              {/* ICON CONTAINER */}
              <motion.div
                className="flex items-center justify-center w-48 h-48 sm:w-48 sm:h-48 md:w-44 md:h-44 lg:w-72 lg:h-72 p-2 relative"
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.text}
                  className="w-full h-full object-contain  group-hover:scale-105 transition-transform duration-300"
                />

              </motion.div>

              <p className="text-xl sm:text-xl md:text-2xl font-semibold tracking-wide text-amber-800 mt-2">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
