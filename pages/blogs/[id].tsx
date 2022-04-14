import { client } from '../../libs/client';

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'animals' });

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
  return <div>{article.name}</div>;
};

export default Blogs;
