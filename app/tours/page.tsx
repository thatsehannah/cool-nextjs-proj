import React from 'react';

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async (): Promise<Tour[]> => {
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
        return <h2 key={tour.id}>{tour.name}</h2>;
      })}
    </section>
  );
};

export default ToursPage;
