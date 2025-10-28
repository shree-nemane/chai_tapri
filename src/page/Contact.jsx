import React, { useState } from 'react';

import autoRickshawBottom from '../assets/contact/rickshaw.png';
import hornPleaseLogo from '../assets/contact/horn_ok_plz.png';
import sendKeyIcon from '../assets/contact/send_it.png';

// Form input component
const FormInput = ({ label, type = 'text', fullWidth = false, isTextarea = false }) => (
  <div className={`${fullWidth ? 'col-span-2' : 'col-span-1'} mb-4`}>
    <label className="text-white text-base sm:text-lg font-handwritten block mb-1">{label}</label>
    {isTextarea ? (
      <textarea
        name={label.replace(':', '').trim().toLowerCase()}
        className="w-full bg-gray-900/50 border-b-2 border-white/70 p-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 h-24 font-[contentFont] resize-none"
        placeholder={label.replace(':', '').trim()}
        required
      />
    ) : (
      <input
        type={type}
        name={label.replace(':', '').trim().toLowerCase()}
        className="w-full bg-gray-900/50 border-b-2 border-white/70 p-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 font-[contentFont]"
        placeholder={label.replace(':', '').trim()}
        required
      />
    )}
  </div>
);

// Social icon component
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
  const [submitted, setSubmitted] = useState(false);

  return (
    <div id="contact" className="min-h-screen bg-[#0D5152] p-4 pt-8 md:px-10 relative overflow-hidden font-[contentFont]">
      <div className="max-w-4xl mx-auto z-20 pt-8 relative">

        {/* Header */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-[headerFont] mb-10 tracking-widest text-center md:text-left">
          CONTACT
        </h1>

        {!submitted ? (
          // Form (Formspree integration)
          <form
            className="grid grid-cols-2 gap-x-4 sm:gap-x-8"
            action="https://formspree.io/f/your-form-id"
            method="POST"
            onSubmit={() => setSubmitted(true)} // sets submitted state on submit
          >
            <FormInput label="Name :" />
            <FormInput label="Email :" type="email" />
            <FormInput label="Ph./Tel." />
            <FormInput label="Address :" />
            <FormInput label="Message :" isTextarea fullWidth />

            {/* Send Button */}
            <div className="col-span-2 flex justify-center border-2 border-white mx-auto rounded-2xl bg-yellow-400 hover:border-yellow-400 transition-transform">
              <button type="submit" className="cursor-pointer hover:scale-105 transition-transform">
                <img
                  src={sendKeyIcon}
                  alt="Send Icon"
                  className="w-24 md:w-32"
                />
              </button>
            </div>
          </form>
        ) : (
          // Thank You Note
          <div className="bg-gray-900/50 border border-yellow-400 rounded-lg p-8 text-center flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-4xl font-[headerFont] text-yellow-400 mb-4">Thank You!</h2>
            <p className="text-white text-lg sm:text-xl font-[contentFont]">
              Your message has been successfully sent.
            </p>
            <p className="text-white mt-2 text-md sm:text-lg">We will get back to you shortly.</p>
          </div>
        )}

        {/* Contact Info Section */}
        <div className=" flex flex-col md:flex-row items-center justify-center md:items-center md:justify-evenly space-y-8 md:space-y-0 md:my-12 ">

          {/* Horn Please Logo */}
          <img
            src={hornPleaseLogo}
            alt="Horn Please Logo"
            className="hidden md:block md:w-56 relative z-10 "
          />

          {/* Central Contact Info */}
          <div className="flex flex-col items-center justify-center text-center ">
            
            {/* Email & Phone */}
            <div className="flex md:flex-col justify-center items-center gap-10 md:gap-8 mt-10 md:mt-0 md:my-6 ">
              {/* Email */}
              <div className="flex flex-col justify-center items-center text-center">
                <div className="text-white text-3xl mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                </div>
                <a
                  href="mailto:info@chaitapri.in"
                  className="text-white font-[contentFont] lg:text-xl text-sm tracking-wider hover:underline"
                >
                  info@chaitapri.in
                </a>

              </div>

              {/* Phone */}
              <div className="flex flex-col justify-center items-center text-center">
                <div className="text-white text-3xl mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </div>
                <a
                  href="tel:+919922436500"
                  className="text-white font-[contentFont] lg:text-xl text-sm tracking-wider hover:underline"
                >
                  +919922436500
                </a>

              </div>
            </div>

            {/* Social Icons */}
            <div className="flex mt-6 gap-1.5">
              <SocialTextIcon char="f" color="#3b5998" href="#" />
              <SocialTextIcon char="in" color="#0077B5" href="#" />
              <SocialTextIcon char="t" color="#1DA1F2" href="#" />
              <SocialTextIcon char="g" color="#db4437" href="#" />
            </div>
          </div>

          {/* Auto Rickshaw */}
          <img
            src={autoRickshawBottom}
            alt="Cartoon Auto Rickshaw Bottom"
            className="hidden md:block md:w-56 relative z-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
