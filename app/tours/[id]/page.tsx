import React from 'react';

type SpecificTourPageProps = {
  params: {
    id: string;
  };
};

const SpecificTourPage = ({ params }: SpecificTourPageProps) => {
  return (
    <div>
      <h1 className='text-4xl'>ID: {params.id}</h1>
    </div>
  );
};

export default SpecificTourPage;
