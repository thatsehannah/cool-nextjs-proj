'use client';
import React, { useActionState } from 'react';
import { createUserAction } from '@/utils/actions';
import SubmitButton from './SubmitButton';

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';

const Form = () => {
  const [message, formAction] = useActionState(createUserAction, null);
  return (
    <form
      className={formStyle}
      action={formAction}
    >
      {message && <p>{message}</p>}
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
      <SubmitButton text='Submit User' />
    </form>
  );
};

export default Form;
