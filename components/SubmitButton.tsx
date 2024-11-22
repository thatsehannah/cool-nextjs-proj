import React from 'react';
import { useFormStatus } from 'react-dom';

const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

type SubmitButtonProps = {
  text: string;
};

const SubmitButton = ({ text }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={btnStyle}
      type='submit'
      disabled={pending}
    >
      {pending ? 'Submitting...' : text}
    </button>
  );
};

export default SubmitButton;
