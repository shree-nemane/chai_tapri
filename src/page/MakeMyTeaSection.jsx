import React from 'react';

// --- ASSETS ---
// IMPORTANT: Replace these paths with the correct paths to your images.
import paintedKettleImg from '../assets/kettle.png';
import trumpet from '../assets/trumpet.png';

const MakeMyTeaSection = () => {
    return (
        // --- MAIN CONTAINER ---
        // Using a distinct blue background and min-h-screen/2 to ensure height
        // Semantic <section> tag for a content block
        <section className='relative font-[contentFont] w-full min-h-[50vh] bg-blue-400 text-white'>
            
            {/* Inner Content Centered */}
            <div className="container mx-auto flex h-full flex-col md:flex-row items-center justify-center p-8 lg:p-16">
                
                {/* --- LEFT: Text Content --- */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 lg:w-3/5 p-4 order-2 md:order-1">
                    
                    {/* Title */}
                    <h2 className="font-heading text-4xl md:text-5xl text-white tracking-wider mb-6 drop-shadow">
                        MAKE My tea
                    </h2>
                    
                    {/* Paragraph Content */}
                    <p className="font-heading text-base md:text-lg leading-loose max-w-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                    
                    {/* More Link */}
                    <a 
                        href="#" 
                        className="inline-flex items-center mt-8 font-heading text-2xl text-white hover:text-yellow-200 transition-colors duration-300 drop-shadow-md"
                    >
                        <img src={trumpet} alt="Key icon for More info" className="w-20 mr-2" />
                        More...
                    </a>
                </div>

                {/* --- RIGHT: Kettle Illustration --- */}
                {/* Order-1 on mobile so the text is below the kettle; Order-2 on desktop */}
                <div className="md:w-1/2 lg:w-2/5 flex justify-center p-4 order-1 md:order-2">
                    <img 
                        className="w-56 h-auto md:w-80 lg:w-96 object-contain drop-shadow-2xl animate-pulse-subtle" 
                        src={paintedKettleImg} 
                        alt="A brightly painted red tea kettle" 
                    />
                </div>
            </div>

        </section>
    );
};

export default MakeMyTeaSection;
