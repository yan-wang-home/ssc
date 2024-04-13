import './home.scss';

import React from 'react';

import { useAppSelector } from 'app/config/store';
import HomepagePage from 'app/modules/pages/Homepage/index';
import { ToastContainer, toast } from 'react-toastify';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <HomepagePage />
    </>
  );
};

export default Home;
