import React from 'react';

import truckImg from '../assets/truck.png';

const TestimonialSection = () => {
    return (
        // --- MAIN CONTAINER ---
        // A semantic <section> tag with a vibrant green background.
        // 'relative' is needed to position the decorative shapes inside.
        // 'overflow-hidden' clips the parts of the shapes that are outside the container.
        <section className="relative w-full overflow-visible  font-[contentFont] bg-green-500 font-heading text-white">

            {/* --- DECORATIVE SHAPES --- */}
            {/* These are positioned absolutely relative to the main container. */}
            {/* Hidden on extra-small screens to avoid clutter. */}
            <div className="absolute top-24 left-24 z-0 hidden sm:block">
                <div className="h-32 w-32 rounded-full bg-green-600 opacity-50" />
            </div>

            <div className="absolute bottom-24 right-24 z-0 hidden sm:block">
                <div className="h-40 w-40 rounded-full bg-green-600 opacity-50" />
            </div>

            {/* --- CONTENT WRAPPER --- */}
            {/* 'z-10' ensures the content is on top of the decorative shapes. */}
            <div className="container relative z-10 mx-auto max-w-4xl px-4 py-16 text-center md:py-24">

                {/* Title */}
                <h2 className="text-4xl font-bold tracking-wider md:text-5xl">
                    TESTIMONIAL
                </h2>

                {/* Testimonial Quote */}
                <blockquote className="mt-8">
                    <p className="text-lg leading-relaxed md:text-xl">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    </p>

                    {/* Author */}
                    <footer className="mt-6 text-right text-lg">
                        - Sandra John
                    </footer>
                </blockquote>
            </div>

            <div className="absolute right-4 md:right-12 bottom-0 transform translate-y-1/2 z-30 pointer-events-none">
                <img src={truckImg} alt="Illustration of a red bus" className="w-48 md:w-full max-w-[25vh]" />
            </div>

        </section>
    );
};

export default TestimonialSection;