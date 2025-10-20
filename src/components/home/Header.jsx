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

const Header = ({ logo }) => {
  return (
    <header className="w-full relative flex justify-between items-center pt-4 sm:pt-6 px-4 sm:px-6 lg:px-20">
      {/* Navigation Background Wrapper */}
      <div
        className="relative w-full md:w-auto bg-bottom bg-cover text-white rounded-md"
        style={{ backgroundImage: `url(${wood_texture})` }}
      >
        <div className="absolute inset-0 bg-black/10 " />
        {/* Navigation (Visible on md and larger screens) */}
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

      {/* Stylized Logo Section */}
      {/* <div className="flex flex-col items-start font-sans bg-white rounded-full py-6 sm:py-8 px-3 sm:px-4 absolute right-3 top-0 sm:right-8 md:right-12 md:-top-10 transform md:translate-y-1/12 z-10 shadow-md">
        
        <div className="flex items-end text-4xl sm:text-5xl font-bold text-gray-800 leading-none">
          <span>C</span>
          <span>H</span>
          <span className="text-xl sm:text-2xl font-bold -translate-y-[0.5rem] inline-block ml-[-0.5px]">a</span>
          <span className="text-3xl sm:text-4xl font-bold -translate-y-[0.1rem] inline-block">i</span>
        </div>

        
        <div className="text-5xl sm:text-6xl font-bold text-gray-800 leading-none -mt-2 sm:-mt-3">
          टपरी
        </div>
      </div> */}

      {/* Optional Image Logo (commented) */}
      {/*  add  */}
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
