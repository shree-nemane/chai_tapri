import React from "react";

// Import child components
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import brickWallimg from "../assets/home/brick_wall.jpg";
import chaiImg from "../assets/home/chai_cup.png";

const Home = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${brickWallimg})` }}
    >
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header  />
        {/* Hero Section */}
        <Hero chaiImage={chaiImg} />
      </div>
    </div>
  );
};

export default Home;
