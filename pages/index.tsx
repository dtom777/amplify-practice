/* eslint-disable react/jsx-key */
import { client } from '../libs/client';
import Link from 'next/link';

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'prefectures',
  });

  return {
    props: {
      prefectures: data.contents,
    },
  };
};

const Prefectures = ({ prefectures }) => {
  return (
    <>
      <Link href='/animals'>
        <a style={{ border: 'solid' }}>動物一覧へ→</a>
      </Link>
      <h1 style={{ marginTop: '4px' }}>都道府県一覧</h1>
      {prefectures.map((prefecture) => (
        <div key={prefecture.id} className='text-center'>
          <input
            type='checkbox'
            name='prefecture'
            value={prefecture.name}
            defaultChecked={prefecture.checked}
          />
          <label>{prefecture.name}</label>
        </div>
      ))}
    </>
  );
};

export default Prefectures;
