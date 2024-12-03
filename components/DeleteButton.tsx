import { deleteUserAction } from '@/utils/actions';
import React from 'react';

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  return (
    <form action={deleteUserAction}>
      <input
        type='hidden'
        name='id'
        value={id}
      />
      <button
        type='submit'
        className='bg-red-500 text-white text-xs rounded p-2'
      >
        Delete
      </button>
    </form>
  );
};

export default DeleteButton;
