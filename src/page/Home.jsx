import React from 'react';

// Import child components
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';

// Import assets
import brickWallimg from '../assets/home/brick_wall.jpg';
import logoImg from '../assets/home/logo.jpg';
import chaiImg from '../assets/home/chai_illustration.png';

const Home = () => {
  return (
    // Main container with background
    <div
      className='relative w-full h-[100vh] bg-cover bg-center text-white'
      style={{ backgroundImage: `url(${brickWallimg})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* Content wrapper that sits above the overlay */}
      <div className="relative z-10 flex h-full flex-col">
        <Header logo={logoImg} />
        <Hero chaiImage={chaiImg} />
      </div>
    </div>
  );
};

export default Home;