import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='max-w-screen-lg mx-auto'>{children}</div>
    </>
  );
};

export default Layout;
