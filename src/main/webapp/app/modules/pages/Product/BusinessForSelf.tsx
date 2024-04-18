import React from 'react';

import { Button, Img, Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';
import { useNavigate } from 'react-router';

const BusinessForSelf: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-chivo lg:gap-[70px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start lg:mx-auto lg:px-5 w-full">
            <div className="flex bg-blue-800 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <div className="w-2/5 bg-blue-800 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <Text className="lg:text-6xl md:text-3xl sm:text-xl lg:ml-10 md:ml-5 sm:ml-5 text-justify font-bold text-white-A700">
                  <Translate contentKey="product.businessforself.title1" />
                  <br /> <Translate contentKey="product.businessforself.title2" />
                </Text>
                <Button
                  className="cursor-pointer lg:w-1/2 md:w-3/5 sm:w-3/5 lg:ml-10 md:ml-5 sm:ml-5 lg:mt-5 md:mt-3 sm:mt-3 my-0.5 text-base text-center font-bold uppercase lg:text-lg lg:px-5 sm:text-xs w-1/3 lg:h-14 md:h-10 sm:h-10 md:px-2 sm:px-1"
                  shape="round"
                  color="red_800"
                  variant="fill"
                  onClick={() => navigate('/contactus')}
                >
                  <Translate contentKey="product.contactus" />
                </Button>
              </div>
              <div className="w-3/5 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Img src="content/images/businessforself.png" className="object-fill" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start mx-auto lg:mt-20 lg:px-5 md:mt-10 sm:mt-10 w-full">
            <div className="flex sm:flex-col h-full flex-row sm:gap-10 items-center justify-between w-full relative">
              <Img className="w-full object-cover" src="content/images/new2canada-detail.png" alt="Background" />
              <div className="absolute top-1/2 transform -translate-y-1/2 text-white p-8 w-full">
                <Text className="lg:text-4xl md:text-2xl sm:text-2xl font-bold text-blue-900 lg:mb-4 lg:text-left sm:text-center backdrop-blur-sm">
                  <Translate contentKey="product.businessforself.question" />
                </Text>
                <Text className="lg:text-2xl md:text-lg sm:text-lg text-blue-900 sm:text-center lg:mt-4 backdrop-blur-sm">
                  <Translate contentKey="product.businessforself.answer" />
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start mx-auto lg:mt-20 lg:px-5 md:mt-10 sm:mt-10 w-full">
            <div className="flex flex-col bg-white-A700 items-center justify-start mx-auto w-full">
              <div className="flex sm:flex-col lg:flex-row my-5 items-center justify-between w-full relative">
                <div className="w-2/5 flex items-center justify-center ml-5">
                  <Img className="w-56" src="content/images/businessforself-icon.png" alt="" />
                </div>
                <div className="flex flex-col w-3/5">
                  <div className="mt-10 lg:mb-10 lg:mr-5">
                    {/* <Text className="text-3xl ml-10 text-justify font-bold text-blue-800 mt-3"><Translate contentKey="product.points" /></Text> */}
                    <Text className="text-2xl sm:text-lg ml-5 text-justify font-bold text-blue-800 mt-3">
                      <Translate contentKey="product.businessforself.points.p1" />
                    </Text>
                    <Text className="text-2xl sm:text-lg ml-5 text-justify font-bold text-blue-800 mt-3">
                      <Translate contentKey="product.businessforself.points.p2" />
                    </Text>
                    <Text className="text-2xl sm:text-lg ml-5 text-justify font-bold text-blue-800 mt-3">
                      <Translate contentKey="product.businessforself.points.p3" />
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer className="bg-gray-200 flex items-center justify-center lg:mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default BusinessForSelf;
