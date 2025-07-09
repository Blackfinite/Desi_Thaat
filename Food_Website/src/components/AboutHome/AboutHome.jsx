import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Floating from '../FloatingPar/Floating'
import AboutImage from '/src/assets/AboutImg.png'
import './AboutHome.css'

const AboutHome = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 text-green-900 py-10 sm:py-20 relative overflow-hidden'>

      <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
        <div className='absolute top-1/4 left-20 w-96 h-96 bg-green-400/20 rounded-full blur-3xl mix-blend-soft-light' />
      </div>

      <div className='container mx-auto px-4 sm:px-4 lg:px-8 flex flex-col lg:flex-row items-center lg:gap-8 xl:gap-16 relative'>

        <div className='w-full order-1 lg:order-2 space-y-8 sm:space-y 12 relative'>
          <div className='space-y-4 sm:space-y-8 px-4 sm:px-0'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight'>
              <span className='font-cursive text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent'>
                  Savor the Essence of Tradition
              </span>
              <br />
              <span className='inline-block mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl opacity-90 font-light'>
                Where flavours Dance &amp; Memories Bloom
              </span>
            </h2>

            <p className='text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-3xl font-serif italic border-l-4 bg-green-200/60 pl-4 sm:pl-6 py-2 bg-gradient-to-r from-white/5 to-transparent'>
              "In our kitchen, every recipe is a love story — seasoned with care, served with soul."
            </p>
          </div>

          <div className='flex flex-wrap gap-4 items-center mt-6 sm:mt-8 px-4 sm:px-0'>
            <Link to='/about' className='px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl font-bold hover:scale-[1.02] transition-transform duration-300 flex items-center gap-2 sm:gap-3 shadow-xl hover:shadow-green-500/20 group relative overflow-hidden'>
              <span className='absolute inset-0 bg-gradient-to-r from-green-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>

              <FaInfoCircle className='text-lg sm:text-xl animate-pulse' />
              <span className='font-cursive text-lg sm:text-xl'>Experience Our Culinary Story</span>
            </Link>
          </div>
        </div>

        <div className='w-full order-2 lg:order-1 md:max-w-md lg:max-w-none lg:w-7/12 mt-12 mb-10 lg:mb-0 relative group transform hover:scale-[1.01] transition-all duration-500'>

          <div className='relative rounded-[4rem] overflow-hidden border-4 border-green-300 hover:border-green-500 transition duration-500 shadow-black/50'>
            <div className='absolute inset-0 bg-gradient-to-r from-green-400/15 via-transparent to-green-600/10 mix-blend-soft-light' />
            <div className="max-w-md mx-auto">
              <img
                src={AboutImage}
                alt="Restaurant"
                className="w-[300px] h-[400px] object-cover rounded-2xl transform -rotate-1 hover:rotate-0 transition-all duration-500"
              />
            </div>
            <div className='absolute -bottom-12 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-green-300/30 blur-3xl z-0' />
          </div>
          <div className='absolute -top-6 -right-6 w-24 h-24 bg-green-500/10 rounded-full blur-xl' />
        </div>
      </div>

      <Floating />
    </div>
  )
}

export default AboutHome
