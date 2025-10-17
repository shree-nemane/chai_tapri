import React from 'react';

import autoRickshawBottom from '../assets/rickshaw.png'
import hornPleaseLogo from '../assets/horn_ok_plz.jpg'
import sendKeyIcon from '../assets/send_it.png'


// A simple component for the form inputs
const FormInput = ({ label, type = 'text', fullWidth = false, isTextarea = false }) => (
  <div className={`${fullWidth ? 'col-span-2' : 'col-span-1'} mb-4`}>
    {/* Label styled with the fun font style */}
    <label className="text-white text-lg font-handwritten block mb-1">{label}</label>
    {isTextarea ? (
      <textarea
        className="w-full bg-gray-900/50 border-b-2 border-white/70 p-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 h-24 font-[contentFont] resize-none"
        placeholder={label.replace(':', '').trim()}
        rows="4"
      ></textarea>
    ) : (
      <input
        type={type}
        className="w-full bg-gray-900/50 border-b-2 border-white/70 p-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 font-[contentFont]"
        placeholder={label.replace(':', '').trim()}
      />
    )}
  </div>
);

// Component for the social media 'icons' using text and background colors
const SocialTextIcon = ({ char, color, href }) => (
  <a 
    href={href} 
    className={`w-6 h-6 flex items-center justify-center text-xs font-bold text-white rounded-sm mx-0.5 transition-shadow`}
    style={{ backgroundColor: color }}
  >
    {char}
  </a>
);


const Contact = () => {

    const tealBackground = 'bg-[#005c5c]';

  return (
<div className={`min-h-screen ${tealBackground} p-4 md:px-10 relative overflow-hidden font-[contentFont]`}>
      
      {/* Top Right Auto Rickshaw (Absolute Positioning - remains fixed) */}
      {/* If you have the image: */}
      

      <div className="max-w-4xl mx-auto z-20 pt-8 relative ">
        
        {/* CONTACT Header (Assuming a large, handwritten-style font) */}
        <h1 className="text-white text-5xl font-extrabold mb-10 tracking-widest" >
          CONTACT
        </h1>

        {/* Form Section */}
        <form className="grid grid-cols-2 gap-x-8">
          <FormInput label="Name :" />
          <FormInput label="Email :" type="email" />
          <FormInput label="Ph./Tel." />
          <FormInput label="Address :" />
          <FormInput label="Message :" isTextarea fullWidth />
        </form>

        {/* Send Button/Icon */}
        <div className="flex justify-center items-center  relative">
          {/* If you have the image: */}
          <img 
            src={sendKeyIcon} 
            alt="Send Key Icon" 
            className="w-40 cursor-pointer hover:scale-105 transition-transform" 
          />
        </div>

        {/* --- Contact Information Section with Horn Please and Rickshaw side-by-side --- */}
        {/* Using flex for horizontal layout and relative for vertical adjustments */}
        <div className="flex flex-col md:flex-row items-center justify-center md:items-end md:justify-between space-y-8 md:space-y-0 md:space-x-4 mt-12 mb-12">
          
          {/* HORN PLEASE Logo - now part of the flex layout, adjusted slightly up */}
          <img 
            src={hornPleaseLogo} 
            alt="Horn Please Logo" 
            className="w-40 md:w-56 relative -top-6 md:-top-36 z-10" // Adjust 'top' for the "slight up" effect
          />

          {/* Contact Details & Socials - This block is the central element */}
          <div className="flex flex-col items-center text-center flex-grow"> 
            {/* Address */}
            <div className="flex flex-col items-center justify-center text-white my-4 max-w-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
              <p className="text-lg font-[contentFont]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 422 502
              </p>
            </div>

            <div className="flex justify-center space-x-12 my-6">
              {/* Email */}
              <div className="text-center">
                <div className="text-white text-3xl mx-auto mb-2 font-extrabold" style={{ transform: 'scale(1.5, 1)' }}>
                  &#x2709; 
                </div>
                <p className="text-white font-[contentFont] text-sm">saymyemail@gmail.com</p>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="text-white text-3xl mx-auto mb-2 font-extrabold">
                  &#x260E; 
                </div>
                <p className="text-white font-[contentFont] text-sm">991 96582 23639</p>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex mt-6">
              <SocialTextIcon char="f" color="#3b5998" href="#" /> 
              <SocialTextIcon char="in" color="#0077B5" href="#" /> 
              <SocialTextIcon char="t" color="#1DA1F2" href="#" /> 
              <SocialTextIcon char="g" color="#db4437" href="#" /> 
            </div>
          </div>
          
          {/* Bottom Right Auto Rickshaw - now part of the flex layout, adjusted slightly down */}
          <img 
            src={autoRickshawBottom} 
            alt="Cartoon Auto Rickshaw Bottom" 
            className="w-40 md:w-64 relative top-6 md:top-12 z-10" // Adjust 'top' for the "slight down" effect
          />

        </div>

      </div> 
      
    </div>
  );
};

export default Contact;