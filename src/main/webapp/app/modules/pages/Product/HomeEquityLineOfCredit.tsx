import React from 'react';

import { Img, Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';
import { useNavigate } from 'react-router';

const HomeEquityLineOfCredit: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-chivo sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
            <div className="flex bg-blue-800 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
              <div className="w-2/5 bg-blue-800 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <Text className="text-6xl sm:text-3xl ml-10 text-justify font-bold text-white-A700">
                  <Translate contentKey="product.homeequitylineofcredit.title1" />
                  <br /> <Translate contentKey="product.homeequitylineofcredit.title2" />
                </Text>
                <button
                  onClick={() => navigate('/contactus')}
                  className="block w-1/2 sm:w-3/5 ml-10 select-none rounded-lg bg-red-800 sm:mt-0 mt-5 py-3.5 px-7 text-center align-middle font-sans text-lg font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <Text className="text-lg sm:text-xs text-center">
                    <Translate contentKey="product.contactus" />
                  </Text>
                </button>
              </div>
              <div className="w-3/5 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <Img src="content/images/homeequitylineofcredit.png" className="object-fill" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start mx-auto md:px-5 mt-20 w-full">
            <div className="flex sm:flex-col h-full flex-row sm:gap-10 items-center justify-between w-full relative">
              <Img className="w-full object-cover" src="content/images/homeequitylineofcredit-detail.png" alt="Background" />
              <div className="absolute top-1/2 transform -translate-y-1/2 text-white p-8 w-full">
                <Text className="text-4xl font-bold text-blue-900 mb-4 lg:text-left sm:text-center backdrop-blur-sm">
                  <Translate contentKey="product.homeequitylineofcredit.question" />
                </Text>
                <Text className="text-2xl text-blue-900 sm:text-center mt-4 backdrop-blur-sm">
                  <Translate contentKey="product.homeequitylineofcredit.answer" />
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start mx-auto md:px-5 mt-20 w-full">
            <div className="flex flex-col bg-white-A700 items-center justify-start mx-auto w-full">
              <div className="flex sm:flex-col flex-row my-5 sm:gap-10 items-center justify-between w-full relative">
                <div className="w-2/5 flex items-center justify-center ml-5">
                  <Img className="w-56" src="content/images/homeequitylineofcredit-icon.png" alt="" />
                </div>
                <div className="flex flex-col w-3/5">
                  <div className="mt-10 mb-10 mr-5">
                    {/* <Text className="text-3xl ml-10 text-justify font-bold text-blue-800 mt-3"><Translate contentKey="product.points" /></Text> */}
                    <Text className="text-2xl sm:text-lg ml-5 text-justify font-bold text-blue-800 mt-3">
                      <Translate contentKey="product.homeequitylineofcredit.points.p1" />
                    </Text>
                    <Text className="text-2xl sm:text-lg ml-5 text-justify font-bold text-blue-800 mt-3">
                      <Translate contentKey="product.homeequitylineofcredit.points.p2" />
                    </Text>
                    <Text className="text-2xl sm:text-lg ml-5 text-justify font-bold text-blue-800 mt-3">
                      <Translate contentKey="product.homeequitylineofcredit.points.p3" />
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer className="bg-gray-200 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HomeEquityLineOfCredit;
