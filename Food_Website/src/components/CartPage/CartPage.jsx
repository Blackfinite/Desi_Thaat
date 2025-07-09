import React, { useState } from 'react';
import { useCart } from '../../Cartcontext/CartContext';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, removeFromCart, UpdateQ, cartTotal } = useCart();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='min-h-screen overflow-x-hidden pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-white to-green-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading */}
        <h1 className='text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent font-dancingscript'>
          Your Cart
        </h1>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className='text-center'>
            <p className='text-green-800/80 text-xl mb-4'>Your Cart is Empty</p>
            <Link
              to='/menu'
              className='transition-all duration-300 text-green-900 inline-flex items-center gap-2 hover:gap-3 hover:bg-green-200 bg-green-100 px-6 py-2 rounded-full font-cinzel text-sm uppercase'
            >
              Browse All Items
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
              {cartItems.map((item) => {
                const itemTotal = parseFloat(item.price) * item.quantity;
                return (
                  <div
                    key={item.id}
                    className='group bg-white rounded-3xl border border-green-200 hover:border-green-400 shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col gap-4'
                  >
                    {/* Image */}
                    <div
                      className='w-full h-44 flex justify-center items-center overflow-hidden rounded-xl bg-green-100 cursor-pointer'
                      onClick={() => setSelectedImg(item.image)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className='max-h-36 object-contain transition-transform duration-300 group-hover:scale-105'
                      />
                    </div>

                    {/* Info */}
                    <div className='text-center'>
                      <h3 className='text-xl font-dancingscript text-green-900'>{item.name}</h3>
                      <p className='text-green-700 font-cinzel mt-1'>₹{item.price}</p>
                    </div>

                    {/* Quantity controls */}
                    <div className='flex items-center justify-center gap-4'>
                      <button
                        onClick={() =>
                          item.quantity > 1
                            ? UpdateQ(item.id, item.quantity - 1)
                            : removeFromCart(item.id)
                        }
                        className='w-8 h-8 rounded-full bg-green-200 hover:bg-green-300 text-green-800 flex items-center justify-center transition duration-200 active:scale-95'
                      >
                        <FaMinus />
                      </button>

                      <span className='w-8 text-center text-green-800 font-bold'>{item.quantity}</span>

                      <button
                        onClick={() => UpdateQ(item.id, item.quantity + 1)}
                        className='w-8 h-8 rounded-full bg-green-200 hover:bg-green-300 text-green-800 flex items-center justify-center transition duration-200 active:scale-95'
                      >
                        <FaPlus />
                      </button>
                    </div>

                    {/* Remove & Item total */}
                    <div className='flex items-center justify-between mt-3'>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className='flex items-center gap-1 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-300 hover:bg-green-100 text-xs uppercase transition duration-300'
                      >
                        <FaTrash className='text-sm' />
                        Remove
                      </button>
                      <p className='text-green-800 font-cinzel'>₹{itemTotal}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cart Summary */}
            <div className='mt-14 pt-10 border-t border-green-200'>
              <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                <Link
                  to='/menu'
                  className='bg-gradient-to-r from-green-700 to-green-600 text-white px-6 py-3 rounded-full font-cinzel uppercase tracking-wider hover:scale-105 transition-all duration-300'
                >
                  Continue Shopping
                </Link>

                <div className='flex items-center gap-6'>
                  <h2 className='text-2xl font-dancingscript text-green-900'>
                    Total: ₹{cartTotal}
                  </h2>
                  <button className='bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-cinzel uppercase tracking-wider hover:scale-105 transition-all duration-300'>
                    Checkout Now
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
