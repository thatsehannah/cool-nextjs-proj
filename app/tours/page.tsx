import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const url = 'https://www.course-api.com/react-tours-project';
// const url = 'https://www.course-api.com/react-tours-projects'; //invalid url to trigger an error

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async (): Promise<Tour[]> => {
  await new Promise((resolve) => setTimeout(resolve, 3000)); //simulating a delay
  const response = await fetch(url);
  const data: Tour[] = await response.json();

  return data;
};

const ToursPage = async () => {
  const tours = await fetchTours();

  return (
    <section>
      <h1 className='text-3xl mb-5'>Tours</h1>
      <div className='grid md:grid-cols-2 gap-8'>
        {tours.map((tour) => {
          return (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className='hover:text-blue-400'
            >
              <div className='relative h-48 mb-2'>
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw'
                  priority
                  className='object-cover rounded'
                />
              </div>
              <h2>{tour.name}</h2>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ToursPage;
