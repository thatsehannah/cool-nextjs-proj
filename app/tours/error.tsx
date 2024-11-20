'use client';

import React from 'react';

type TourError = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: TourError) => {
  return (
    <div>
      <p className='text-xl'>There was an error: {error.message}</p>
      <button
        className='py-4 px-5 mt-6 bg-blue-500'
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Error;
