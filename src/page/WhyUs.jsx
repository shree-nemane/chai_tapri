import React from 'react'

import chiliLemonImg from '../assets/lemon.png';
import busImg from '../assets/bus.png';
import trumpetImg from '../assets/trumpet.png';
import trophyIcon from '../assets/trophy.png';
import ribbonIcon from '../assets/trophy.png';
import starIcon from '../assets/trophy.png';
import heartIcon from '../assets/trophy.png';


const whyUsItems = [
    { icon: trophyIcon, text: 'Award Winning' },
    { icon: ribbonIcon, text: 'Certified Quality' },
    { icon: starIcon, text: 'Top Rated' },
    { icon: heartIcon, text: 'Loved by Customers' },
];

const WhyUs = () => {
    return (
        <section className="w-full bg-white font-[contentFont] pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Section Title */}
                <div className="flex justify-center items-center gap-4 mb-12">
                    <img src={trumpetImg} alt="trumpet icon" className="w-16 transform -scale-x-100" />
                    <h2 className="font-heading text-4xl md:text-5xl text-gray-800 tracking-wide">
                        Why US
                    </h2>
                    <img src={trumpetImg} alt="trumpet icon" className="w-16" />
                </div>

                {/* Icons Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                    {whyUsItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            {/* Icon container with decorative style */}
                            <div className="bg-gray-50 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center p-4 rounded-[35%] border-2 border-dashed border-gray-200">
                                <img src={item.icon} alt={item.text} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                            </div>
                            <p className="mt-4 font-heading text-lg text-amber-800">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs