import React from 'react';
import wood_texture from '../../assets/home/wood.jpg';
import Logo from '../../assets/home/logo2.png';
import Chai_tapri from '../../assets/home/chai_tapri_logo.png';

import board from '../../assets/home/board00.png';

// Navigation links
const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Contact', href: '#contact' },
];

const Header = () => {
  // Smooth scroll + section trigger
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });

      if (href === '#about') {
        window.dispatchEvent(new CustomEvent('expandAboutSection'));
      } else if (href === '#gallery') {
        window.dispatchEvent(new CustomEvent('expandGallerySection'));
      }
    }
  };

  return (
    <header className="w-full relative flex justify-between items-center pt-4 sm:pt-6 px-4 sm:px-6 lg:px-20">
      {/* Background + Navigation */}
      <div
        className="relative w-full md:w-auto bg-bottom bg-cover text-white"
        style={{ backgroundImage: `url(${wood_texture})` }}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <nav className="hidden lg:min-w-[50vw] md:flex justify-evenly items-center gap-4 sm:gap-6 lg:gap-10 p-3 px-6 sm:px-8 text-white shadow-md rounded-md">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base sm:text-lg font-semibold tracking-wide transition-colors duration-300 hover:text-yellow-200"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Board Image */}
      <div className="absolute right-2 sm:right-4 md:right-12 top-0 p-2 md:p-0 md:-top-4 transform md:translate-y-1/10 z-10">
        <img
          className="w-32  sm:w-40 md:w-48 lg:w-56 xl:w-64 object-contain opacity-90"
          src={Chai_tapri}
          alt=""
        />
      </div>

      {/* Logo (Improved Placement & Responsiveness) */}
      {/* <div className="absolute flex flex-col justify-center items-center z-20 pointer-events-none
        right-10 md:right-22 lg:right-24
        top-14 md:top-21 lg:top-28 ">
        <img
          className="w-18 h-18 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain"
          src={Logo}
          alt="Chai se Shuruvaat Logo"
        />
      </div> */}
    </header>
  );
};

export default Header;
