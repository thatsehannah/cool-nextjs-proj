import React from 'react';

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

const Form = () => {
  return (
    <form
      className={formStyle}
      action=''
    >
      <h2 className='text-2xl capitalize mb-5'>Create User</h2>
      <input
        className={inputStyle}
        type='text'
        name='firstName'
        defaultValue='elliot'
        required
      />
      <input
        className={inputStyle}
        type='text'
        name='lastName'
        defaultValue='hannah'
        required
      />
      <button
        className={btnStyle}
        type='submit'
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
