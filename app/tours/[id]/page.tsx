import Image from 'next/image';
import React from 'react';

type SpecificTourPageProps = {
  params: {
    id: string;
  };
};

const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

const SpecificTourPage = ({ params }: SpecificTourPageProps) => {
  return (
    <div>
      <h1 className='text-4xl'>ID: {params.id}</h1>
      <section className='flex gap-x-4 mt-4'>
        <div>
          <Image
            className='w-48 h-48 object-cover rounded'
            src={url}
            alt='tour'
            width={192}
            height={192}
            priority
          />
          <p>remote image</p>
        </div>
      </section>
    </div>
  );
};

export default SpecificTourPage;
