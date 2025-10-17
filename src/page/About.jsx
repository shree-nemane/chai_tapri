import React from 'react';

// --- IMAGE ASSETS ---
// IMPORTANT: Replace these with the actual paths to your images.
import chiliLemonImg from '../assets/lemon.png';
import busImg from '../assets/bus.png';
import trumpetImg from '../assets/trumpet.png';
import trophyIcon from '../assets/trophy.png';
import ribbonIcon from '../assets/trophy.png';
import starIcon from '../assets/trophy.png';
import heartIcon from '../assets/trophy.png';

// --- DATA FOR "WHY US" SECTION ---
// This makes the section easy to update and manage.



// --- CHILD COMPONENT: AboutSection ---
const About = () => {
    return (
        <section className="relative w-full font-[contentFont] bg-yellow-400 py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-visible">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Image */}
                <div className="md:col-span-4 flex justify-center">
                    <img src={chiliLemonImg} alt="Illustration of chilies and a lemon" className="w-48 md:w-64" />
                </div>

                {/* Center Content */}
                <div className="md:col-span-5 text-center md:text-left">
                    <h2 className="font-heading text-4xl md:text-5xl text-gray-800 tracking-wide">
                        ABOUT US
                    </h2>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a href="#" className="inline-flex items-center mt-6 font-heading text-2xl text-gray-800 hover:text-black transition-colors">
                        <img src={trumpetImg} alt="trumpet icon" className="w-12 mr-2" />
                        More...
                    </a>
                </div>

                {/* Right Image */}
            </div>
                <div className="absolute right-4 md:right-12 bottom-0 transform translate-y-1/2 z-30 pointer-events-none">
                    <img src={busImg} alt="Illustration of a red bus" className="w-48 md:w-full max-w-md" />
                </div>
        </section>
    );
};


export default About;