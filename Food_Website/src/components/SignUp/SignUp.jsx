import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const AwesomeToast = ({ message, icon }) => (
  <div className='animate-slide-in fixed bottom-6 right-6 flex items-center bg-gradient-to-br from-green-500 to-green-600 px-6 py-4 rounded-lg shadow-lg border-2 border-green-300/20 '>
    <span className='text-2xl mr-3 text-[#134e2d]'>{icon}</span>
    <span className='font-semibold text-[#134e2d]'>{message}</span>
  </div>
);

const SignUp = () => {
  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFromData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        navigate('/login');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast, navigate]);

  const toggleShowPassword = () => setShowPassword(prev => !prev);

  const handleChange = e => {
    setFromData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('SignUp Data', formData);
    setShowToast(true);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#0f2f1b]'>
      {showToast && <AwesomeToast message='SignUp Successful' icon={<FaCheckCircle />} />}

      <div className='w-full max-w-md bg-gradient-to-br from-[#134e2d] to-[#276749] rounded-xl shadow-lg border-4 border-green-700/30 transform-all duration-300 hover:shadow-2xl'>
        <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform'>
          Create Account
        </h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='text'
            name='username'
            placeholder='UserName'
            value={formData.name}
            onChange={handleChange}
            className='w-full px-4 py-3 rounded-lg bg-[#134e2d] placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 hover:scale-[1.02]'
            required
          />

          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='w-full px-4 py-3 rounded-lg bg-[#134e2d] placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 hover:scale-[1.02]'
            required
          />

          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              className='w-full px-4 py-3 rounded-lg bg-[#134e2d] placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-200 hover:scale-[1.02]'
              required
            />

            <button
              className='absolute inset-y-0 right-4 flex items-center text-green-400 hover:text-green-600 transform hover:scale-125'
              type='button'
              onClick={toggleShowPassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type='submit'
            className='w-full py-3 bg-gradient-to-r from-green-400 to-green-600 text-[#134e2d] font-bold rounded-lg hover:scale-105 transition duration-300 hover:shadow-lg'
          >
            SignUP
          </button>
        </form>

        <div className='mt-6 text-center'>
          <Link
            to='/login'
            className='group inline-flex items-center text-green-400 hover:text-green-600 transition-all duration-300'
          >
            <FaArrowLeft className='mr-2 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300' />

            <span className='transform group-hover:-translate-x-2 transition-all duration-300'>Back to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
