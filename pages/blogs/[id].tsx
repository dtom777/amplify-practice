export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
      { params: { id: '6' } },
      { params: { id: '7' } },
      { params: { id: '8' } },
      { params: { id: '9' } },
      { params: { id: '10' } },
    ],
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};

const Blogs = ({ params }) => {
  return <div>{params.id}</div>;
};

export default Blogs;
