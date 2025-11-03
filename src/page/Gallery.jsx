import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ASSETS ---
import horseImg from '../assets/gallery/horse.png';
import img1 from '../assets/gallery/img_1.jpg';
import img2 from '../assets/gallery/img_2.jpg';
import img3 from '../assets/gallery/img_3.jpg';
import img4 from '../assets/gallery/img_4.jpg';
import img5 from '../assets/gallery/img_5.jpg';
import img6 from '../assets/gallery/img_6.jpg';
import img7 from '../assets/gallery/img_7.jpg';
import img8 from '../assets/gallery/img_8.jpg';
import read_more_img from '../assets/read_more.png';

const galleryImages = [
  { id: 1, src: img1, alt: 'A modern tea shop interior' },
  { id: 2, src: img2, alt: 'Steaming tea being prepared in a pan' },
  { id: 3, src: img3, alt: 'Close-up of traditional tea glasses' },
  { id: 4, src: img4, alt: 'A street-side tea stall with a vendor' },
  { id: 5, src: img5, alt: 'Classic metal teapots on a shelf' },
  { id: 6, src: img6, alt: 'Old-fashioned kettles for brewing tea' },
  { id: 7, src: img7, alt: 'A metal rack holding multiple tea glasses' },
  { id: 8, src: img8, alt: 'Pouring tea through a strainer into a cup' },
];

const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleExpandEvent = () => setIsExpanded(true);

    const handleScroll = () => {
      const gallerySection = document.getElementById('gallery');
      if (!gallerySection) return;

      const rect = gallerySection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (isVisible && !isExpanded) setIsExpanded(false);
    };

    window.addEventListener('expandGallerySection', handleExpandEvent);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('expandGallerySection', handleExpandEvent);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isExpanded]);

  const expandedTextContent = (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="mt-8 text-white text-center text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed"
    >
      This gallery is a visual journey showcasing the essence of Chai Tapri, from the raw, authentic street-side inspiration to the cozy, hygienic setting of our cafes.
      We capture the rich, aromatic process of tea brewing, the vibrant colors of our spaces, and the genuine smiles of our staff and customers.
      It’s a testament to our mission: serving tradition with a touch of modern comfort.
    </motion.p>
  );

  return (
    <section
      id="gallery"
      className="relative w-full font-[contentFont] bg-[#16B89F] pt-8 md:pt-4 pb-16 md:pb-20 px-4 sm:px-6 md:px-8 overflow-visible"
    >
      {/* --- HEADER --- */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex w-full justify-center items-center gap-2 mb-8 md:mb-10 text-4xl md:text-5xl drop-shadow-md"
      >
        <img
          className="w-20 md:w-24 lg:w-32 rotate-6"
          src={horseImg}
          alt="Decorative horse illustration"
          loading="lazy"
          decoding="async"
        />
        <h2 className="font-[headerFont] text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          GALLERY
        </h2>
        <img
          className="w-20 md:w-24 lg:w-32 -rotate-6 scale-x-[-1]"
          src={horseImg}
          alt="Decorative horse illustration (mirrored)"
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      {/* --- GALLERY GRID --- */}
      <motion.div
        className="container mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            className="group overflow-hidden aspect-square shadow-xl cursor-pointer"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              fetchpriority="low"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* --- EXPANDED TEXT (READ MORE) --- */}
      <AnimatePresence>{isExpanded && expandedTextContent}</AnimatePresence>

      {/* --- READ MORE / SHOW LESS BUTTONS --- */}
      <div className="flex justify-center md:justify-end">
        {!isExpanded && (
          <motion.button
            onClick={toggleContent}
            aria-label="Read More gallery description"
            className="inline-flex items-center mt-8 md:mt-10 drop-shadow-md pr-4 group focus:outline-none"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={read_more_img}
              alt="Read More icon"
              className="w-36 sm:w-48 drop-shadow-sm"
              loading="lazy"
              decoding="async"
            />
          </motion.button>
        )}

        {isExpanded && (
          <motion.button
            onClick={toggleContent}
            className="mt-8 md:mt-10 text-lg sm:text-xl md:text-2xl font-semibold text-white hover:text-white/90 transition-colors duration-200 focus:outline-none underline"
            aria-label="Show Less gallery description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Show Less
          </motion.button>
        )}
      </div>

      {/* --- DECORATIVE HORSE (BOTTOM LEFT - STATIC) --- */}
      <div className="absolute left-4 md:left-12 bottom-0 translate-y-1/2 z-10 pointer-events-none">
        <img
          src={horseImg}
          alt=""
          aria-hidden="true"
          className="w-32 md:w-36 lg:w-[35vh] scale-x-[-1] -rotate-[10deg]"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default memo(Gallery);
