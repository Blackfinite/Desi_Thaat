import React, { useState } from 'react';
import { useCart } from '../../Cartcontext/CartContext';
import { dummyMenuData } from '../../assets/OmhD.js';
import { FaMinus, FaPlus } from 'react-icons/fa';

import './OurMenu.css'


const categories = ['Breakfast', 'Lunch', 'Dinner', 'Mexican', 'Italian', 'Drinks'];

const OurMenu = () => {
     const [activeCategories, setActiveCategories] = useState(categories[0]);
      const displayItems = (dummyMenuData[activeCategories] || []).slice(0, 4);
    
      const { addToCart, removeFromCart, cartItems } = useCart();
      const getQuantity = (id => cartItems.find((i) => i.id === id)?.quantity || 0)
        
      return (
    <div className='bg-gradient-to-br from-[#0b1a12] via-[#142a1e] to-[#1d3e2b] min-h-screen py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-400 to-green-300'>
          <span className='font-dancingscript block text-5xl md:text-7xl sm:text-6xl mb-2'>
            Our Menu
          </span>
          <span className='block text-xl sm:text-2xl md:text-3xl font-cinzel mt-4 text-green-100/80'>
            A Symphony Of Flavours
          </span>
        </h2>

        <div className='flex flex-wrap justify-center gap-4 mb-16'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategories(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full border-2 transition-all duration-300 transform font-cinzel text-sm sm:text-lg tracking-widest backdrop-blur-sm
                ${
                  activeCategories === cat
                    ? 'bg-gradient-to-r from-green-900/80 to-green-700/80 border-green-800 scale-105 shadow-xl shadow-green-900/30'
                    : 'bg-green-900/20 border-green-800/30 text-green-100/80 hover:bg-green-800/40 hover:scale-95'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 items-stretch'>
          {displayItems.map((item, i) => {
            const quantity = getQuantity(item.id);
            return (
              <div
                key={item.id}
                className='relative bg-green-900/20 rounded-2xl overflow-hidden border border-green-800/30 backdrop-blur-sm flex flex-col transition-all duration-500 h-full'
                style={{ '--index': i }}
              >
                <div className='relative h-48 sm:h-56 md:h-60 flex items-center justify-center bg-black/10'>
  <img
    src={item.image}
    alt={item.name}
    className='w-full h-full object-cover rounded-t-2xl'
  />
</div>

                <div className='p-4 sm:p-6 flex flex-col flex-grow'>
                  <div className='absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-green-800/50 to-transparent opacity-50 transition-all duration-300' />

                  <h3 className='text-xl sm:text-2xl mb-2 font-dancingscript text-green-100 transition-colors'>
                    {item.name}
                  </h3>
                  <p className='text-green-100/80 text-xs sm:text-sm mb-4 font-cinzel leading-relaxed'>
                    {item.description}
                  </p>

                  <div className='mt-auto flex items-center gap-4 justify-between'>
                    <div className='bg-green-100/10 backdrop-blur-sm px-3 py-1 rounded-2xl shadow-lg'>
                      <span className='text-xl font-bold text-green-300 font-dancingscript'>
                        ₹{item.price}
                      </span>
                    </div>

                    <div className='flex items-center gap-2'>
                      {quantity > 0 ? (
                        <>
                          <button
                            className='w-8 h-8 rounded-full bg-green-900/40 flex items-center justify-center hover:bg-green-800/50 transition-colors'
                            onClick={() =>
                              quantity > 1
                                ? addToCart(item, quantity - 1)
                                : removeFromCart(item.id)
                            }
                          >
                            <FaMinus className='text-green-100' />
                          </button>

                          <span className='w-8 text-center text-green-100'>{quantity}</span>

                          <button
                            className='w-8 h-8 rounded-full bg-green-900/40 flex items-center justify-center hover:bg-green-800/50 transition-colors'
                            onClick={() => addToCart(item, quantity + 1)}
                          >
                            <FaPlus className='text-green-100' />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => addToCart(item, 1)}
                          className='bg-green-900/40 px-4 py-1.5 rounded-full font-cinzel text-xs uppercase sm:text-sm tracking-wider transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-900/20 relative overflow-hidden border border-green-800/50'
                        >
                          <span className='relative z-10 text-xs text-white'>Add To Cart</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex justify-center mt-16'>
          
        
        </div>
      </div>
    </div>
  );
}

export default OurMenu
