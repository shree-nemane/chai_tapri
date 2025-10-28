import React from 'react';
import Slider from 'react-slick';
import truckImg from '../assets/testimonial/Truck.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const testimonials = [
  {
    quote: "Feels just like my college tapri — but cleaner and cooler!",
    author: "Rohan M.",
  },
  {
    quote: "The best masala chai I’ve ever had. Takes me home instantly.",
    author: "Sneha K.",
  },
  {
    quote: "Perfect hangout spot. Great tea, great vibes!",
    author: "Amit S.",
  },
];

const Testimonial = () => {
  // Slider settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section className="relative w-full overflow-visible pt-8 font-[contentFont] bg-[#4EB73E] font-heading text-white">
      {/* Decorative Shapes */}
      <div className="absolute top-24 left-36 z-0 hidden sm:block">
        <div className="h-32 w-32 rounded-full bg-green-600 opacity-50" />
      </div>
      <div className="absolute bottom-24 right-24 z-0 hidden sm:block">
        <div className="h-40 w-40 rounded-full bg-green-600 opacity-50" />
      </div>

      {/* Content Wrapper */}
      <div className="container relative z-10 mx-auto max-w-4xl px-4 py-16 md:py-24 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[headerFont] tracking-wider">
          TESTIMONIAL
        </h2>
        <hr className="w-2/5 mx-auto mt-6 mb-8 border-t-2 border-gray-300" />

        {/* Slider */}
        <div className="mt-8 font-[contentFont]">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <blockquote key={index} className="px-4 sm:px-6">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide">
                  "{item.quote}"
                </p>
                <footer className="mt-4 sm:mt-6 tracking-wide text-xl lg:text-2xl text-right">
                  - {item.author}
                </footer>
              </blockquote>
            ))}
          </Slider>
        </div>
      </div>

      {/* Decorative Truck */}
      <div className="absolute right-2 md:right-12 bottom-0 transform translate-y-1/2 z-30 pointer-events-none">
        <img
          src={truckImg}
          alt="Illustration of a red bus"
          className="w-32 md:w-48 lg:w-[15vw]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Testimonial;
