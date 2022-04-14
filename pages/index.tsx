/* eslint-disable react/jsx-key */
import AnimalList from '../components/layout/AnimalList';
import Layout from '../components/layout/Layout';
import { FC, useState } from 'react';
import { client } from '../libs/client';

export const getStaticProps = async () => {
  const animals = await client.get({
    endpoint: 'animals',
  });

  return {
    props: {
      animals: animals.contents,
    },
  };
};

const Home: FC<{ animals: any }> = ({ animals }) => {
  const [selected, setSelected] = useState(animals);
  // Client JSで処理
  const dogs = animals.filter((animal) => animal.category.category === '犬');
  const cats = animals.filter((animal) => animal.category.category === '猫');

  return (
    <Layout>
      <h1 className='pt-10 text-2xl font-bold my-4'>記事一覧</h1>
      <div>
        <button
          className='text-3xl text-white border bg-blue-500 hover:bg-blue-300 rounded-t-md mx-2'
          onClick={() => setSelected(animals)}
        >
          すべて
        </button>
        <button
          className='text-3xl text-white border bg-blue-500 hover:bg-blue-300 rounded-t-md mx-2'
          onClick={() => setSelected(dogs)}
        >
          犬
        </button>
        <button
          className='text-3xl text-white border bg-blue-500 hover:bg-blue-300 rounded-t-md mx-2'
          onClick={() => setSelected(cats)}
        >
          猫
        </button>
      </div>
      <AnimalList animals={selected} />
    </Layout>
  );
};

export default Home;
