import React from 'react';

const Hero = ({ chaiImage }) => {
    return (
        // Using <main> tag is semantically correct for the primary page content.
        <main className="flex-grow flex flex-col md:flex-row items-center justify-center md:justify-evenly p-4 text-center md:text-left">
            
            {/* Title */}
            <div className="font-[contentFont] text-white flex flex-col items-center md:items-start drop-shadow-lg">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl sm:flex sm:flex-col sm:self-start font-bold tracking-tighter">
                    <span className="block">Chai से</span>
                    <span className="block mt-2 md:mt-4">SHuRuVaat</span>
                </h1>
            </div>

            {/* Chai Image */}
            <div className="mt-8 md:mt-0">
                <img 
                    className="w-48 sm:w-64 lg:w-80 xl:w-96 drop-shadow-2xl"
                    src={chaiImage} 
                    alt="A warm cup of chai tea" 
                />
            </div>
        </main>
    );
};

export default Hero;