import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';
import { Button, Img, Input, Text } from 'app/modules/components';

const ComingSoon: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-chivo items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <Img src="content/images/comingsoon.png" alt="Background" className="w-full h-screen sm:h-[700px] object-fill" />
          {/* Home Page Main Picture */}
          <div className="absolute top-1/2 transform -translate-y-1/2 text-white w-full">
            <Text className="text-8xl font-bold text-blue-900 mb-4 lg:text-center sm:text-center sm:backdrop-blur-sm animate-pulse">
              <Translate contentKey="comingsoon.title" />
            </Text>
            <Text className="text-2xl text-blue-900 text-center mt-4 sm:backdrop-blur-sm">
              <Translate contentKey="comingsoon.subTitle" />
            </Text>
          </div>
        </div>
        <Footer className="bg-gray-200 flex items-center justify-center w-full" />
      </div>
    </>
  );
};

export default ComingSoon;
