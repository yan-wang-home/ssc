import React from 'react';

import { Img, Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';

const PartnersPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-chivo sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          {/* Top */}
          <div className="flex flex-col gap-12 items-center justify-start mx-auto w-full lg:px-20 sm:px-4">
            <div className="flex flex-col gap-0 items-center justify-center mb-3">
              <Text
                className="leading-[54.00px] sm:text-[34px] md:text-[40px] text-[50px] text-center text-blue-900 w-[80%] sm:w-full"
                size="txtChivoBold44"
              >
                <Translate contentKey="partner.title" />
              </Text>
              <Text className="text-[20px] text-center mt-2 text-gray-500 w-full" size="txtChivoRegular18Bluegray600">
                <Translate contentKey="partner.subTitle" />
              </Text>
            </div>
            <div className="flex flex-col gap-8 items-center justify-start mx-auto w-full">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-center">
                <Img src="content/images/partner01.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner02.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner03.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner04.png" className="shadow-2xl rounded-2xl object-fill" />
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-center">
                <Img src="content/images/partner05.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner06.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner07.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner08.png" className="shadow-2xl rounded-2xl object-fill" />
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-center">
                <Img src="content/images/partner09.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner10.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner11.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner12.png" className="shadow-2xl rounded-2xl object-fill" />
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-center">
                <Img src="content/images/partner13.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner14.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner15.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner16.png" className="shadow-2xl rounded-2xl object-fill" />
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-center">
                <Img src="content/images/partner17.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner18.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner19.png" className="shadow-2xl rounded-2xl object-fill" />
                <Img src="content/images/partner20.png" className="shadow-2xl rounded-2xl object-fill" />
              </div>
            </div>
          </div>

          <Footer className="bg-gray-200 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
