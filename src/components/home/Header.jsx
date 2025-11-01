import React from 'react';
import wood_texture from '../../assets/home/wood.jpg';
import Logo from '../../assets/home/logo2.png'
import rope from '../../assets/home/rope_1.png'
import board from '../../assets/home/board00.png'

// Navigation links
const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Contact', href: '#contact' },
];

const Header = () => {
  // Function to handle link click
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      // Smooth scroll to section
      target.scrollIntoView({ behavior: 'smooth' });

      // Trigger custom events based on the link clicked
      if (href === '#about') {
        const expandEvent = new CustomEvent('expandAboutSection');
        window.dispatchEvent(expandEvent);
      } else if (href === '#gallery') {
        const expandEvent = new CustomEvent('expandGallerySection');
        window.dispatchEvent(expandEvent);
      }
    }
  };

  return (
    <header className="w-full relative flex justify-between items-center pt-4 sm:pt-6 px-4 sm:px-6 lg:px-20">
      <div
        className="relative w-full md:w-auto bg-bottom bg-cover text-white"
        style={{ backgroundImage: `url(${wood_texture})` }}
      >
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <nav className="hidden lg:min-w-[60vw] md:flex justify-evenly items-center gap-4 sm:gap-6 lg:gap-10 p-3 px-6 sm:px-8 text-white shadow-md rounded-md">
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

      <div className='absolute right-4 top-0 p-4 md:p-0 md:right-12 md:-top-4 transform md:translate-y-1/10 z-10'>
        <img className='w-48 lg:w-70 object-contain opacity-90' src={board} alt="" />
      </div>
      <div className="absolute flex flex-col justify-center items-center gap-0 right-4 top-0 p-4 md:p-0 md:right-1/15 md:top-25 transform md:translate-y-1/6 z-10 pointer-events-none"> 
        {/* <img className=' h-28 object-contain  shadow-md' src={rope} alt="" /> */}
        <img
          className="w-24 h-24 md:w-42 md:h-42 opacity-100  object-contain  shadow-md"
          src={Logo}
          alt="Chai se Shuruvaat Logo"
        />
      </div> 
     
    </header>
  );
};

export default Header;
