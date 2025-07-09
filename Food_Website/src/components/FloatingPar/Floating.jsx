import React from 'react';

const Floating = ({ count = 40 }) => {
  const particle = Array.from({ length: count }, () => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {particle.map((p, i) => (
        <div
          key={i}
          className='absolute w-1 h-1 bg-green-400/30 rounded-full'
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            animation: `float ${p.duration}s infinite`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Floating;
