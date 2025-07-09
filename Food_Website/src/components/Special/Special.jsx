import React, { useState } from 'react'
import { cardData, additionalData } from '../../assets/Dummy'
import { useCart } from '../../Cartcontext/CartContext';
import { FaHeart, FaPlus, FaStar, FaFire } from 'react-icons/fa';
import { HiMinus, HiPlus } from "react-icons/hi";
import Floating from '../FloatingPar/Floating'

const Special = () => {
  const [showAll, setShowAll] = useState(false);
  const initialData = [...cardData, ...additionalData]
  const { addToCart, UpdateQ, removeFromCart, cartItems } = useCart();

  return (
    <div className='bg-gradient-to-b from-[#0d2a23] to-[#1a3d34] text-white py-16 px-4 font-[poppins]'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-14'>
          <h1 className='text-5xl font-bold mb-4 transform transition-all bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent font-[playfair_display] italic'>
            Today's <span className='text-stroke-green-400'>Special</span>Offer
          </h1>
          <p className='text-lg text-gray-300 max-w-3xl mx-auto tracking-wide leading-relaxed'>
            Flavors that speak louder than words.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {(showAll ? initialData : initialData.slice(0, 4)).map((item, index) => {
            const cartItem = cartItems.find(ci => ci.id == item.id);
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <div key={`${item.id}-${index}`} className='relative group bg-[#2b4437] rounded-5xl hover:shadow-green-900/40 border-2 border-transparent hover:border-green-500/20 before:absolute before:inset-0 hover:before:opacity-20'>

                <div className='relative h-72 overflow-hidden'>
                  <img src={item.image} alt={item.title} className='w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-500' />

                  <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90' />

                  <div className='absolute bottom-4 left-4 right-4 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full'>
                    <span className='flex items-center gap-2 text-green-400'>
                      <FaStar className='text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]' />
                      <span className='font-bold'>{item.rating}</span>
                    </span>

                    <span className='flex items-center gap-2 text-teal-400'>
                      <FaHeart className='text-xl animate-heartbeat' />
                      <span className='font-bold'>{item.hearts}</span>
                    </span>
                  </div>
                </div>

                <div className='p-6 relative z-10'>
                  <h3 className='text-2xl font-bold mb-2 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent font-[playfair_Display] italic'>
                    {item.title}
                  </h3>

                  <p className='text-gray-300 mb-5 text-sm leading-relaxed tracking-wide'>
                    {item.description}
                  </p>

                  <div className='flex items-center justify-between gap-4'>
                    <span className='text-2xl font-bold text-green-400 flex-1'>
                      {item.price}
                    </span>

                    {cartItem ? (
                      <div className='flex items-center gap-3'>
                        <button onClick={() => {
                          quantity > 1 ? UpdateQ(item.id, quantity - 1)
                            : removeFromCart(item.id)
                        }} className='w-8 h-8 rounded-full bg-green-900/40 flex items-center justify-center hover:bg-green-800/50 transition-all duration-200 active:scale-95' >
                          <HiMinus className='w-4 h-4 text-green-100' />
                        </button>

                        <span className='w-8 text-center text-green-100 font-cinzel'>
                          {quantity}
                        </span>

                        <button onClick={() => UpdateQ(item.id, quantity + 1)}
                          className='w-8 h-8 rounded-full bg-green-900/40 flex items-center justify-center hover:bg-green-800/50 transition-all duration-200 active:scale-95' >
                          <HiPlus className='w-4 h-4 text-green-100' />
                        </button>
                      </div>
                    ) : (
                     <button
  onClick={() => addToCart({ ...item, name: item.title, price: parseFloat(item.price.replace('', '')) }, 1)}
  className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold tracking-wide shadow-md shadow-green-700/50 transition duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400"
>
  <FaPlus className="text-lg" />
  <span>ADD</span>
  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
</button>
                    )}
                  </div>
                </div>

                <div className='absolute inset-0 rounded-3xl pointer-events-none border-2 border-transparent group-hover:border-green-500/30 transition-all duration-500' />
                <div className='opacity-0 group-hover:opacity-100'>
                  <Floating />
                </div>
              </div>
            )
          })}
        </div>

        <div className='m-12 flex justify-center'>
          <button onClick={() => setShowAll(!showAll)}
            className='flex items-center gap-3 bg-gradient-to-r from-green-700 to-teal-700 text-white px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wider hover:gap-4 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 group border-2 border-green-400/30 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r fill-green-500/20 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            <FaFire className='text-xl animate-pulse' />

            <span>{showAll ? 'Show Less' : 'Show More'}</span>
            <div className='h-full w-1 bg-green-400/30 absolute right-0 top-0 group-hover:animate-border-pulse'></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Special
