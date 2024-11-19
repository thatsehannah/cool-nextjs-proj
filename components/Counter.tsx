'use client';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center w-[100px]'>
      <p className='text-5xl font-bold'>{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className='bg-blue-500 text-white px-4 py-3 mt-5'
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
