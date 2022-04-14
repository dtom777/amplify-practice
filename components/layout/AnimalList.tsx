/* eslint-disable react/jsx-key */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalList = ({ animals }) => {
  return (
    <ul className='flex'>
      {animals?.map((animal) => (
        <li key={animal.id} className='mx-2 py-2'>
          <Link href={`/blogs/${animal.id}`}>
            <a>
              <Image
                src={animal.thumbnail.url}
                height={200}
                width={200}
                className='rounded-full'
                alt='dog'
              />
              <p className='pl-2 font-semibold'>{animal.name}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AnimalList;
