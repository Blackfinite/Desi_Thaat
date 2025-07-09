// HomeMenu.jsx
import React, { useState, useCallback } from 'react';
import { useCart } from '../../Cartcontext/CartContext';
import { dummyMenuData } from '../../assets/OmhD.js';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HomeMenu.css';

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Mexican', 'Italian', 'Drinks'];

const buttonBaseClass =
  'px-4 sm:px-6 py-2 rounded-full border-2 transition-all duration-300 transform font-cinzel text-sm sm:text-lg tracking-widest backdrop-blur-sm';

const activeButtonClass =
  'bg-gradient-to-r from-green-800/80 to-green-600/80 border-green-700 scale-105 shadow-xl shadow-green-900/30';

const inactiveButtonClass =
  'bg-green-900/20 border-green-700/30 text-green-900/80 hover:bg-green-800/40 hover:scale-95';

const HomeMenu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const displayItems = (dummyMenuData[activeCategory] || []).slice(0, 4);

  const { addToCart, removeFromCart, cartItems } = useCart();

  // useCallback to avoid recreating function unnecessarily
  const getQuantity = useCallback(
    (id) => cartItems.find((i) => i.id === id)?.quantity || 0,
    [cartItems]
  );

  return (
    <div className="bg-gradient-to-br from-[#e6f4ea] via-[#c6f6d5] to-[#a3d9a5] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-400 to-green-300">
          <span className="font-dancingscript block text-5xl md:text-7xl sm:text-6xl mb-2">Our Menu</span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-cinzel mt-4 text-green-900/80">
            A Symphony Of Flavours
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16" role="tablist" aria-label="Menu Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${buttonBaseClass} ${
                activeCategory === cat ? activeButtonClass : inactiveButtonClass
              }`}
              aria-pressed={activeCategory === cat}
              role="tab"
              tabIndex={activeCategory === cat ? 0 : -1}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 items-stretch"
          role="list"
        >
          {displayItems.map((item, i) => {
            const quantity = getQuantity(item.id);
            return (
              <article
                key={item.id}
                className="relative bg-green-900/20 rounded-2xl overflow-hidden border border-green-700/30 backdrop-blur-sm flex flex-col transition-all duration-500 h-full hover:shadow-lg hover:shadow-green-800/40"
                style={{ '--index': i }}
                role="listitem"
                tabIndex={0}
                aria-label={`${item.name}, price ₹${item.price}`}
              >
                <div className="relative h-48 sm:h-56 md:h-60 flex items-center justify-center bg-white/10">
                  <img
                    src={item.image}
                    alt={item.name || 'Menu item image'}
                    className="w-full h-full object-cover rounded-t-2xl"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-green-700/50 to-transparent opacity-50 transition-all duration-300" />

                  <h3 className="text-xl sm:text-2xl mb-2 font-dancingscript text-green-900 transition-colors">{item.name}</h3>
                  <p className="text-green-900/80 text-xs sm:text-sm mb-4 font-cinzel leading-relaxed">{item.description}</p>

                  <div className="mt-auto flex items-center gap-4 justify-between">
                    <div className='bg-white/30 backdrop-blur-sm px-3 py-1 rounded-2xl shadow-lg'>
  <span className='text-xl font-bold text-green-900 font-dancingscript'>
    ₹{item.price}
  </span>
</div>

                    <div className="flex items-center gap-2">
                      {quantity > 0 ? (
                        <>
                          <button
                            aria-label={`Decrease quantity of ${item.name}`}
                            className="w-8 h-8 rounded-full bg-green-900/40 flex items-center justify-center hover:bg-green-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                            onClick={() =>
                              quantity > 1 ? addToCart(item, quantity - 1) : removeFromCart(item.id)
                            }
                          >
                            <FaMinus className="text-green-100" />
                          </button>

                          <span className="w-8 text-center text-green-900" aria-live="polite" aria-atomic="true">
                            {quantity}
                          </span>

                          <button
                            aria-label={`Increase quantity of ${item.name}`}
                            className="w-8 h-8 rounded-full bg-green-900/40 flex items-center justify-center hover:bg-green-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                            onClick={() => addToCart(item, quantity + 1)}
                          >
                            <FaPlus className="text-green-100" />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => addToCart(item, 1)}
                          className="bg-green-900/40 px-4 py-1.5 rounded-full font-cinzel text-xs uppercase sm:text-sm tracking-wider transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-900/20 relative overflow-hidden border border-green-700/50 focus:outline-none focus:ring-2 focus:ring-green-400"
                          aria-label={`Add ${item.name} to cart`}
                        >
                          <span className="relative z-10 text-xs text-white">Add To Cart</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center mt-16">
          <Link
            className="bg-green-900/30 border-2 border-green-700/30 text-green-900 px-8 sm:px-10 py-3 rounded-full font-cinzel tracking-widest transition-all duration-300 hover:bg-green-800/40 hover:text-green-50 hover:scale-105 hover:shadow-lg hover:shadow-green-900/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            to="/menu"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
