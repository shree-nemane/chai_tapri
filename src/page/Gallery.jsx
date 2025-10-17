import React from 'react'

import horeseImg from '../assets/horse.png'
import tea1 from '../assets/tea1.jpg'
import tea2 from '../assets/tea2.jpg'
import tea3 from '../assets/tea3.jpg'
import trumpet from '../assets/trumpet.png';


const galleryImages = [
    { id: 1, src: tea1, alt: 'A modern tea shop interior' },
    { id: 2, src: tea2, alt: 'Steaming tea being prepared in a pan' },
    { id: 3, src: tea3, alt: 'Close-up of traditional tea glasses' },
    { id: 4, src: tea1, alt: 'A street-side tea stall with a vendor' },
    { id: 5, src: tea2, alt: 'Classic metal teapots on a shelf' },
    { id: 6, src: tea3, alt: 'Old-fashioned kettles for brewing tea' },
    { id: 7, src: tea1, alt: 'A metal rack holding multiple tea glasses' },
    { id: 8, src: tea2, alt: 'Pouring tea through a strainer into a cup' },
];

const Gallery = () => {
    return (
        // 1. IMPROVED: Used a darker shade for better visual depth and kept the font class.
        <div className='relative w-full font-[contentFont] bg-teal-600 p-4 md:p-8 overflow-visible'>
            
            {/* Gallery Header */}
            {/* 2. IMPROVED: Added responsive text sizing (md:text-5xl) and ensured drop-shadow. */}
            <div className='flex w-full justify-center items-center gap-4 mt-12 mb-8 text-4xl md:text-5xl font-bold text-yellow-800 drop-shadow-md'>
                
                <img 
                    // 3. IMPROVED: Added responsive width (sm:w-20) and loading="lazy".
                    className='w-24 sm:w-20' 
                    src={horeseImg} 
                    alt="Decorative horse illustration"
                    loading="lazy" 
                />
                
                <div>Gallery</div>
                
                <img 
                    // 4. PRESERVED: Keeping the original class, assuming '-rotate-y-180' is a custom utility in your Tailwind config.
                    // 5. IMPROVED: Added responsive width and loading="lazy".
                    className='w-24 sm:w-20 -rotate-y-180' 
                    src={horeseImg} 
                    alt="Decorative horse illustration (flipped)" 
                    loading="lazy"
                />
            </div>

            {/* Gallery Grid */}
            {/* 6. IMPROVED: Increased max width for better desktop view and added an intermediate breakpoint (sm:grid-cols-3) for smoother transition. */}
            <div className="container mx-auto max-w-6xl sm:px-4 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                {/* We map over the galleryImages array to render each image dynamically. */}
                {galleryImages.map((image) => (
                    // 7. IMPROVED: Added 'group' for consistent hover effects across the card.
                    <div key={image.id} className="group overflow-hidden aspect-square shadow-xl">
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy" // 8. OPTIMIZATION: Added lazy loading for performance.
                            className="
                                w-full h-full object-cover transform            
                                filter grayscale            
                                cursor-pointer             
                                transition-all duration-300 ease-in-out
                                group-hover:grayscale-0          
                                group-hover:scale-[1.07]            
                            "
                        />
                    </div>
                ))}
            </div>
            
            {/* More... Link */}
            <div className='flex justify-end'>
                <a
                href="#"
                // 9. IMPROVED: Added responsive font size (md:text-3xl) and right padding (pr-4) for spacing.
                className="inline-flex  items-center  mt-8 md:mt-10  text-2xl md:text-3xl text-white hover:text-yellow-200 transition-colors duration-300 drop-shadow-md pr-4"
            >
                <img 
                    src={trumpet} 
                    alt="Trumpet icon for More info" 
                    // 10. IMPROVED: Added responsive width and loading="lazy".
                    className="w-16 md:w-20 mr-2" 
                    loading="lazy"
                />
                More...
            </a>
            </div>
            

            {/* Absolute Horse Image */}
            <div className="absolute left-4 md:left-12 bottom-0 transform translate-y-1/2 z-10 pointer-events-none">
                <img 
                    src={horeseImg} 
                    alt="Decorative horse element" 
                    // 11. IMPROVED: Added responsive width and kept your custom rotation classes.
                    className="w-40 sm:w-48 -rotate-y-180 rotate-z-10 lg:max-w-[35vh]" 
                    loading="lazy"
                />
            </div>

        </div>
    )
}

export default Gallery