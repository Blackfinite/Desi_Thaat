import React, { useState } from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";

const navItems = [
  { name: 'Home', link: '/' },
  { name: 'AboutUs', link: '/about' },
  { name: 'Menu', link: '/menu' },
  { name: 'Contact', link: '/contact' },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks For Subscribing! You will get notified on ${email}`);
    setEmail('');
  };

  return (
    <footer className='bg-[#0f1d14] text-green-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12'>

          {/* Branding & Subscription */}
          <div className='space-y-6'>
            <h2 className='text-4xl sm:text-5xl md:text-5xl font-bold font-sacramento text-green-400 animate-pulse'>
              Desi Thaat
            </h2>
            <p className='text-green-100/90 text-sm font-savramento italic'>
              When Culinary Artistry Meets Doorstep Convenience. <br />
              Savor Handcrafted Perfection, Delivered With Care.
            </p>

            <form onSubmit={handleSubmit} className='relative mt-4 group '>
              <div className='flex items-center gap-2 mb-2'>
                <FaRegEnvelope className='text-green-300 animate-pulse' />
                <span className='font-bold text-green-300'>Get Exclusive Offers</span>
              </div>

              <div className='relative'>
                <input
                  type="email"
                  placeholder='Email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className='w-full px-4 py-2.5 rounded-lg bg-green-50/5 border-2 border-green-300/30 focus:outline-none focus:border-green-400 focus:ring-4 focus:ring-green-300/20 transition-all duration-300 placeholder-green-100/50 pr-24'
                  required
                />
                <button
                  type='submit'
                  className='absolute right-1 top-1 bg-gradient-to-r from-green-300 via-emerald-500 to-green-600 text-white px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg hover:shadow-green-400/30 overflow-hidden transition-all duration-500'
                >
                  <span className='font-bold text-sm track transition-transform duration-300 group-hover:-translate-x-1'>
                    Join Now
                  </span>
                  <BiChevronRight className='text-xl transition-transform duration-300 group-hover:animate-spin flex-shrink-0' />
                  <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-700' />
                </button>
              </div>
            </form>
          </div>

          {/* Navigation */}
          <div className='flex justify-center'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold mb-4 border-l-5 border-green-400 pl-3 font-merriweather italic text-green-300'>
                Navigate
              </h3>
              <ul className='space-y-3'>
                {navItems.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className='flex items-center hover:text-green-300 transition-all group font-lora hover:pl-2'
                    >
                      <BiChevronRight className='mr-2 text-green-400 group-hover:animate-bounce' />
                      <span className='hover:italic'>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className='border-t border-green-800 pt-8 mt-8 text-center'>
          <p className='text-green-400 text-lg mb-2 font-playfair'>
            &copy; 2025 Desi Thaat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
