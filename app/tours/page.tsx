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
      {tours.map((tour) => {
        return (
          <Link
            key={tour.id}
            href={`/tours/${tour.id}`}
            className='hover:text-blue-400'
          >
            <h2>{tour.name}</h2>
          </Link>
        );
      })}
    </section>
  );
};

export default ToursPage;
