import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';

const ComingSoon: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-chivo items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center w-full">
            <div className="min-h-screen w-full bg-blue-800 flex flex-col items-center justify-center">
              <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
                <Translate contentKey="comingsoon.title" />
              </h1>
              <p className="text-white text-lg mb-8">
                <Translate contentKey="comingsoon.subTitle" />
              </p>
            </div>
          </div>
          <Footer className="bg-gray-200 flex items-center justify-center mt-[120px] w-full" />
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
