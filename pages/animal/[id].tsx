import Image from 'next/image';
import { client } from '../../libs/client';

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'animals' });
  console.log(data);

  const paths = data.contents.map((article) => ({
    params: { id: article.id },
  }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const article = await client.get({ endpoint: 'animals', contentId: id });

  return {
    props: {
      article,
    },
  };
};

const Blogs = ({ article }) => {
  return (
    <>
      <h1>{article.name}</h1>
      <Image
        src={article.thumbnail.url}
        height={200}
        width={200}
        className='rounded-full'
        alt='animal'
      />
      <div dangerouslySetInnerHTML={{ __html: article.description }} />
    </>
  );
};

export default Blogs;
