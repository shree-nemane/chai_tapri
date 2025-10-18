import React from 'react';

// Import child components
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';

// Import assets
import brickWallimg from '../assets/home/brick_wall.jpg';
import logoImg from '../assets/home/logo.jpg';
import chaiImg from '../assets/chai_cup.png';

const Home = () => {
  return (
    // Main background container
    <div
      className="relative w-full min-h-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${brickWallimg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header logo={logoImg} />

        {/* Hero Section */}
        <Hero chaiImage={chaiImg} />
      </div>
    </div>
  );
};

export default Home;
