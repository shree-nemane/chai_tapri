import React from 'react';

// Navigation links are now managed as data, which is much more maintainable.
const navLinks = [
    { title: 'Home', href: '#' },
    { title: 'About', href: '#' },
    { title: 'Gallery', href: '#' },
    { title: 'Contact', href: '#' },
];

const Header = ({ logo }) => {
    return (
        // Use a <header> tag for semantic HTML.
        // Padding is now responsive.
        <header className='w-full flex justify-between items-center pt-6 px-4 sm:px-6 lg:px-20'>
            {/* Navigation */}
            <div>
                <nav className='hidden md:flex items-center gap-6 lg:gap-10 bg-[#B77729] opacity-95 p-3 px-8 text-white shadow-lg'>
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="text-lg font-semibold tracking-wide transition-colors duration-300 hover:text-yellow-200"
                        >
                            {link.title}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Logo */}
            <div>
                <img
                    // Logo size is now responsive.
                    // 'object-cover' prevents image distortion.
                    className='w-24 h-24 md:w-36 md:h-36 rounded-full object-cover border-2 border-[#B77729] shadow-md'
                    src={logo}
                    alt="Chai se Shuruvaat Logo"
                />
            </div>
        </header>
    );
};

export default Header;