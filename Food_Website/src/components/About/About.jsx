import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaShippingFast, FaLeaf } from 'react-icons/fa';

const aboutCards = [
  {
    icon: <FaUtensils className="text-4xl text-green-500" />,
    title: 'Authentic Taste',
    description: 'Crafted by seasoned chefs using traditional techniques and fresh ingredients.'
  },
  {
    icon: <FaShippingFast className="text-4xl text-green-500" />,
    title: 'Fast Delivery',
    description: 'Get gourmet experiences delivered to your doorstep quickly and reliably.'
  },
  {
    icon: <FaLeaf className="text-4xl text-green-500" />,
    title: 'Fresh & Organic',
    description: 'We prioritize quality by sourcing organic, locally grown ingredients.'
  }
];

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-white text-green-900 overflow-hidden relative'>
      <div className='absolute inset-0 opacity-10 mix-blend-soft-light' />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='py-16 px-4 text-center relative'
      >
        <div className='max-w-4xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700'
          >
            Desi Thaat
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-green-800'
          >
            Where tradition meets taste — a soulful Desi food journey.
          </motion.p>
        </div>
      </motion.section>

      {/* Card Section */}
      <section className='py-12 px-4 md:px-8 relative'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12'>
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className='bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center border border-green-200 hover:scale-105 transition-transform duration-300'
            >
              <div className='mb-4 flex justify-center'>{card.icon}</div>
              <h3 className='text-xl font-semibold mb-2 text-green-600'>{card.title}</h3>
              <p className='text-sm text-green-800'>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
