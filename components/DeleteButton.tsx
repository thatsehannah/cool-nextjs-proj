import { removeUserAction } from '@/utils/actions';
import React from 'react';

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const removeUserWithId = removeUserAction.bind(null, id);
  return (
    <form action={removeUserWithId}>
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
