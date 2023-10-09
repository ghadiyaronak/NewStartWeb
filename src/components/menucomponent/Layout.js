import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Box } from '@chakra-ui/react';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Box>
        <Footer/>
      </Box>
    </div>
  );
};

export default Layout;
