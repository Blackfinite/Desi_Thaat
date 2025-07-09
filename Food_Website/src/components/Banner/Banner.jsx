import React, { useState } from 'react'
import { FaDownload, FaSearch } from "react-icons/fa";
import bannerImage from '../../assets/bannerf.jpg'

const Banner = () => {
  const [searchQ, setSearchQ] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for ... ', searchQ);
  }

  return (
    <div className='relative'>
      <div className='bg-gradient-to-br from-green-100 via-white to-green-200 text-green-900 py-16 px-4 sm:px-8 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-100/30 to-green-200/10' />
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10 relative'>

          {/* Text Section */}
          <div className='flex-1 space-y-8 relative md:pr-8 lg:pr-12 text-center md:text-left'>
            <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold leading-tight font-serif drop-shadow-md'>
              Crafted with Passion <br />
              <span className='bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent'>
                Delivered with Care
              </span>
            </h1>

            <p className='text-lg lg:text-xl font-playfair italic text-green-800 opacity-90 max-w-xl mx-auto md:mx-0'>
              Deliciously Made. Swiftly Delivered.
              Your Feast Arrives in Just 60 Minutes.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className='relative max-w-2xl mx-auto md:mx-0 group'>
              <div className='relative flex items-center bg-green-50 rounded-xl border-2 border-green-400 shadow-2xl hover:bg-green-100 transition-all duration-300'>
                <div className='pl-6 pr-3 py-4'>
                  <FaSearch className='text-xl text-green-600' />
                </div>
                <input
                  type="text"
                  value={searchQ}
                  onChange={(e) => setSearchQ(e.target.value)}
                  placeholder='Find your craving...'
                  className='w-full py-4 pr-6 bg-transparent outline-none placeholder-green-600/70 text-lg font-medium tracking-wide text-green-900'
                />
                <button
                  type='submit'
                  className='mr-4 px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 rounded-lg font-semibold text-white hover:from-green-300 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-green-200'
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className='flex-1 relative group mt-8 md:mt-0 min-h-[300px] sm:min-h-[400px]'>
            <div className='relative rounded-full p-1 bg-gradient-to-br from-green-100 via-green-300 to-green-500 shadow-2xl z-20 w-[250px] xs:w-[300px] sm:w-[350px] h-[250px] xs:h-[300px] sm:h-[350px] mx-auto'>
              <img
                src={bannerImage}
                alt="Banner"
                className='rounded-full border-4 xs:border-8 border-green-200 w-full h-full object-cover object-top'
              />
              <div className='absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-green-200/40 mix-blend-multiply'></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
