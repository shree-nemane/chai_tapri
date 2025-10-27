import React from 'react';
import wood_texture from '../../assets/home/wood.jpg';
import Logo from '../../assets/home/logo.jpg'

// Navigation links
const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Contact', href: '#contact' },
];

const Header = () => {
  return (
    <header className="w-full relative flex justify-between items-center pt-4 sm:pt-6 px-4 sm:px-6 lg:px-20">
      <div
        className="relative w-full md:w-auto bg-bottom bg-cover text-white rounded-md"
        style={{ backgroundImage: `url(${wood_texture})` }}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <nav className="hidden lg:min-w-[60vw] md:flex justify-evenly items-center gap-4 sm:gap-6 lg:gap-10 p-3 px-6 sm:px-8 text-white shadow-md rounded-md">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-base sm:text-lg font-semibold tracking-wide transition-colors duration-300 hover:text-yellow-200"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>

      <div className="absolute right-4 top-0 p-4 md:p-0 md:right-12 md:-top-10 transform md:translate-y-1/12 z-10 pointer-events-none"> 
        <img
          className="w-24 h-24 md:w-40 md:h-40  rounded-full bg-white object-contain border-2 border-[#B77729] shadow-md"
          src={Logo}
          alt="Chai se Shuruvaat Logo"
        />
      </div> 
     
    </header>
  );
};

export default Header;
