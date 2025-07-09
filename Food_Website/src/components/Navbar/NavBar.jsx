// Paste this in place of your current NavBar code

import React, { useEffect, useState } from 'react'
import { GiChefToque, GiForkKnifeSpoon } from "react-icons/gi";
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  FiHome, FiBook, FiStar, FiPhone, FiShoppingCart, FiLogOut, FiKey
} from "react-icons/fi";
import { useCart } from '../../Cartcontext/CartContext';
import Login from '../Login/Login';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();
  const [showLoginModel, setShowLoginModel] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem('loginData'))?.loggedIn === true
  );

  useEffect(() => {
    setShowLoginModel(location.pathname === '/login');
    setIsAuthenticated(Boolean(localStorage.getItem('loginData')));
  }, [location.pathname]);

  const handleLoginSuccess = () => {
    localStorage.setItem('loginData', JSON.stringify({ loggedIn: true }));
    setIsAuthenticated(true);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setIsAuthenticated(false);
  };

  const renderDesktopAuthButton = () => {
    return isAuthenticated ? (
      <button onClick={handleLogout} className='px-3 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-green-300 to-green-500 text-green-900 rounded-2xl font-bold hover:shadow-lg hover:shadow-green-300/40 transition-all transform hover:scale-[1.02] border-2 border-green-500/30 flex items-center space-x-2 shadow-md shadow-green-900/10 text-xs md:text-xs lg:text-sm'>
        <FiLogOut className='text-base md:text-lg lg:text-lg' />
        <span className='text-shadow'>Logout</span>
      </button>
    ) : (
      <button onClick={() => navigate('/login')} className='px-3 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 bg-gradient-to-br from-green-300 to-green-500 text-green-900 rounded-2xl font-bold hover:shadow-lg hover:shadow-green-300/40 transition-all transform hover:scale-[1.02] border-2 border-green-500/30 flex items-center space-x-2 shadow-md shadow-green-900/10 text-xs md:text-xs lg:text-sm'>
        <FiKey className='text-base md:text-lg lg:text-lg' />
        <span className='text-shadow'>Login</span>
      </button>
    )
  };

  const renderMobileAuthButton = () => {
    return isAuthenticated ? (
      <button onClick={handleLogout} className='w-full px-4 py-3 bg-gradient-to-br from-green-300 to-green-500 text-green-900 rounded-xl font-semibold flex items-center justify-center space-x-2 text-sm'>
        <FiLogOut />
        <span>Logout</span>
      </button>
    ) : (
      <button onClick={() => {
        navigate('/login');
        setIsOpen(false);
      }} className='w-full px-4 py-3 bg-gradient-to-br from-green-300 to-green-500 text-green-900 rounded-xl font-semibold flex items-center space-x-2 text-sm'>
        <FiKey />
        <span>Login</span>
      </button>
    )
  };

  const navLink = [
    { name: 'Home', href: '/', icon: <FiHome /> },
    { name: 'Menu', href: '/menu', icon: <FiBook /> },
    { name: 'About', href: '/about', icon: <FiStar /> },
    { name: 'Contact', href: '/contact', icon: <FiPhone /> },
  ];

  return (
    <nav className='bg-white border-b-8 border-green-300 shadow-green-300 sticky top-0 z-50 font-vibes group/nav overflow-x-hidden'>
      <div className='absolute -top-3 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4'>
        <div className='h-[6px] bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_20px] shadow-green-300' />
        <div className='flex justify-between px-6'>
          <GiForkKnifeSpoon className='text-green-300 -mt-4 -ml-2 rotate-45' size={32} />
          <GiForkKnifeSpoon className='text-green-300 -mt-4 -mr-2 -rotate-45' size={32} />
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 relative'>
        <div className='flex justify-between items-center h-16 md:h-20 lg:h-24'>
          <div className='flex-shrink-0 flex items-center space-x-2 group relative md:-translate-x-4 lg:-translate-x-6 ml-0 md:ml-2 '>
            <div className='absolute -insert-4 bg-green-100 rounded-full blur-xl opacity-0 group-hover/nav:opacity-100 transition-opacity-300 ' />
            <GiChefToque className='text-3xl md:text-4xl lg:text-5xl text-green-500 transition-all group-hover:rotate-12 group-hover:text-green-400 hover:drop-shadow[0_0_15px] hover:drop-shadow-green-300' />
            <div className='flex flex-col relative ml-2 max-w-[140px] md:max-w-[160px] lg:max-w-none'>
            <NavLink to='/' className='text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent font-monsieur tracking-wider'>
  Desi Thaat
</NavLink>
              <div className='h-[3px] bg-gradient-to-r from-green-400/30 via-green-500/50 to-green-400/30 w-full mt-1 ml-1 shadow-[0_2px_5px] shadow-green-400/20 ' />
            </div>
          </div>

          <div className='hidden md:flex items-center space-x-2 md:space-x-1 lg:space-x-4 flex-1 justify-end'>
            {navLink.map((link) => (
              <NavLink key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `group px-3md:px-3 lg:px-4 py-2 md:py-2 lg:py-3 text-sm md:text-[15px] lg:text-base relative transition-all duration-300 flex items-center hover:bg-green-100 rounded-3xl border-2 
                  ${isActive ? `border-green-400 bg-green-100 shadow-[inset_0_0_15px] shadow-green-300/20`
                    : `border-green-200 hover:border-green-400`
                  } shadow-md shadow-green-200`
                }>
                <span className='mr-2 text-sm md:text-[15px] lg:text-base text-green-500 group-hover:text-green-400 transition-all'>
                  {link.icon}
                </span>
                <span className='text-green-800 group-hover:text-green-500 relative'>
                  {link.name}
                  <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full' />
                </span>
              </NavLink>
            ))}
            <div className='flex items-center space-x-2 md:space-x-3 lg:space-x-4 ml-3 md:ml-2 lg:ml-6 mr-2 md:mr-3 lg:mr-4'>
              <NavLink to='/cart' className='p-2 md:p-2 lg:p-3 text-green-900 rounded-xl transition-all relative border-2 border-green-200 hover:border-green-400 group hover:bg-green-100 hover:shadow-lg hover:shadow-green-300/30 shadow-md shadow-green-200'>
                <FiShoppingCart className='text-base md:text-lg lg:text-lg' />
                {totalItems > 0 && (
                  <span className='absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                    {totalItems}
                  </span>
                )}
              </NavLink>
              {renderDesktopAuthButton()}
            </div>
          </div>

          <div className='md:hidden flex items-center mr-2'>
            <button className='text-green-500 hover:text-green-400 focus:outline-none transition-all p-2 rounded-xl border-2 border-green-200 hover:bg-green-200 relative shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-300' onClick={() => setIsOpen(!isOpen)}>
              <div className='space-y-2 relative'>
                <span className={`block w-6 h-[2px] bg-current transition-all ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block w-6 h-[2px] bg-current ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-[2px] bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden bg-white border-t-4 border-green-300 relative shadow-lg shadow-green-200 w-full'>
          <div className='px-4 py-4 space-y-2'>
            {navLink.map((link) => (
              <NavLink key={link.name} to={link.href} onClick={() => setIsOpen(false)} className={({ isActive }) => `block px-4 py-3 text-sm rounded-xl transition-all items-center justify-center ${isActive ? 'bg-green-100 text-green-600' : 'text-green-900 hover:bg-green-50'} border-2 ${isActive ? 'border-green-400' : 'border-green-200'}`}>
                <span className='mr-3 text-green-500'>
                  {link.icon}
                  {link.name}
                </span>
              </NavLink>
            ))}
            <div className='pt-4 border-t-2 border-green-200 space-y-2'>
              <NavLink to='/cart' onClick={() => setIsOpen(false)} className='w-full px-4 py-3 text-center text-green-900 rounded-xl border-2 border-green-200 hover:border-green-400 flex items-center justify-center space-x-2 text-sm'>
                <FiShoppingCart className='text-lg' />
                {totalItems > 0 && (
                  <span className='top-2 right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                    {totalItems}
                  </span>
                )}
              </NavLink>
              {renderMobileAuthButton()}
            </div>
          </div>
        </div>
      )}

      {showLoginModel && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4'>
          <div className='bg-gradient-to-br from-white to-green-50 rounded-xl p-6 w-full max-w-[480px] relative border-4 border-green-300 shadow-[0_0_30px] shadow-green-200'>
            <button onClick={() => navigate('/')}
              className='absolute top-2 right-2 text-shadow-green-500 hover:text-green-400 text-2xl'>
              &times;
            </button>
            <h2 className='text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-4 text-center'>
              Desi Thaat
            </h2>
            <Login onLoginSuccess={handleLoginSuccess} onClose={() => navigate('/')} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
