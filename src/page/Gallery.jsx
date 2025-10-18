import React, { memo } from 'react';

// --- ASSETS ---
import horseImg from '../assets/horse.png';
import tea1 from '../assets/tea1.jpg';
import tea2 from '../assets/tea2.jpg';
import tea3 from '../assets/tea3.jpg';
import read_more from '../assets/read_more.png';

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
        <section id="gallery" className="relative w-full font-[contentFont] bg-[#16B89F] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-visible">

            {/* --- HEADER --- */}
            <div className="flex w-full justify-center items-center gap-4 mb-8 md:mb-12 text-4xl md:text-5xl font-bold text-yellow-800 drop-shadow-md">
                <img
                    className="w-16 sm:w-20 lg:w-24"
                    src={horseImg}
                    alt="Decorative horse illustration"
                    loading="lazy"
                    decoding="async"
                />

                <h2 className="font-[headerFont] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    GALLERY
                </h2>

                <img
                    className="w-16 sm:w-20 lg:w-24 scale-x-[-1]"
                    src={horseImg}
                    alt="Decorative horse illustration (mirrored)"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            {/* --- GALLERY GRID --- */}
            <div
                role="list"
                className="container mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
            >
                {galleryImages.map((image) => (
                    <div
                        key={image.id}
                        role="listitem"
                        className="group overflow-hidden aspect-square shadow-xl "
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            decoding="async"
                            fetchpriority="low"
                            className="w-full h-full object-cover transform filter grayscale cursor-pointer transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            {/* --- READ MORE LINK --- */}
            <div className="flex justify-end">
                <a
                    href="#"
                    aria-label="View more gallery items"
                    className="inline-flex items-center mt-8 md:mt-10 drop-shadow-md pr-4"
                >
                    <img
                        src={read_more}
                        alt="Read more icon"
                        className="w-36 sm:w-48"
                        loading="lazy"
                        decoding="async"
                    />
                </a>
            </div>

            {/* --- DECORATIVE HORSE (BOTTOM LEFT) --- */}
            <div className="absolute left-4 md:left-12 bottom-0 translate-y-1/2 z-10 pointer-events-none">
                <img
                    src={horseImg}
                    alt=""
                    aria-hidden="true"
                    className="w-28 sm:w-36 lg:w-[35vh] scale-x-[-1] -rotate-[10deg]"
                    loading="lazy"
                    decoding="async"
                />
            </div>
        </section>
    );
};

export default memo(Gallery);
