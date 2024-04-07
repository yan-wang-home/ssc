import React from 'react';

import { Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';

const RatesPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-chivo sm:gap-10 gap-10 items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full sm:px-5">
          <div className="lg:w-9/12 sm:w-full">
            {/* Top */}
            <div className="flex flex-col gap-12 items-center justify-start mx-auto w-full px-8">
              <div className="flex flex-col gap-0 items-center justify-start mb-3">
                <Text
                  className="leading-[54.00px] sm:text-[34px] text-[50px] text-center text-blue-900 w-[80%] sm:w-full"
                  size="txtChivoBold44"
                >
                  <Translate contentKey="rate.title" />
                </Text>
                <Text className="text-[20px] text-justify mt-2 text-gray-500 w-full" size="txtChivoRegular18Bluegray600">
                  <Translate contentKey="rate.subTitle" />
                </Text>
              </div>
            </div>

            {/* Fix Rate */}
            <div className="flex flex-col lg:gap-6 md:gap-2 sm:gap-2 items-center lg:px-5 sm:px-2 w-full pt-10 sm:pt-5">
              <div className="flex flex-row rounded-lg shadow-2xl bg-white-A700 h-10 w-full">
                <Text className="text-3xl sm:text-lg text-center text-blue-900 w-full mt-3" size="txtChivoRegular18Bluegray600"></Text>
                <Text className="text-3xl sm:text-lg text-center text-blue-900 w-full" size="txtChivoRegular18Bluegray600">
                  2 <Translate contentKey="rate.yearFix" />
                </Text>
                <Text className="text-3xl sm:text-lg text-center text-blue-900 w-full" size="txtChivoRegular18Bluegray600">
                  3 <Translate contentKey="rate.yearFix" />
                </Text>
                <Text className="text-3xl sm:text-lg text-center text-blue-900 w-full" size="txtChivoRegular18Bluegray600">
                  4 <Translate contentKey="rate.yearFix" />
                </Text>
                <Text className="text-3xl sm:text-lg text-center text-blue-900 w-full" size="txtChivoRegular18Bluegray600">
                  5 <Translate contentKey="rate.yearFix" />
                </Text>
              </div>
              <div className="flex flex-row w-full lg:gap-6 md:gap-2 sm:gap-2 h-[300px]">
                <div className="flex flex-col rounded-lg shadow-2xl bg-white-A700 h-full w-full justify-evenly">
                  <Text className="text-3xl sm:text-lg font-bold text-blue-700 text-right sm:text-center lg:pr-5 sm:pr2">
                    <Translate contentKey="rate.insured" />
                  </Text>
                  <Text className="text-3xl sm:text-lg font-bold text-blue-700 text-right sm:text-center lg:pr-5 sm:pr2">
                    <Translate contentKey="rate.insurable" />
                  </Text>
                  <Text className="text-3xl sm:text-lg font-bold text-blue-700 text-right sm:text-center lg:pr-5 sm:pr2">
                    <Translate contentKey="rate.conventional" />
                  </Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-[#3756A8] h-full w-full justify-evenly">
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">7.14%</Text>
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">7.14%</Text>
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">6.26%</Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-[#3756A8] h-full w-full justify-evenly">
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">5.45%</Text>
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">5.45%</Text>
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">5.09%</Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-[#3756A8] h-full w-full justify-evenly">
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">5.59%</Text>
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">5.59%</Text>
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">5.19%</Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-[#3756A8] h-full w-full justify-evenly">
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">4.99%</Text>
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">4.99%</Text>
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">5.04%</Text>
                </div>
              </div>
            </div>

            {/* Variable Rate */}
            <div className="flex flex-col lg:gap-6 md:gap-2 sm:gap-2 items-center lg:px-5 sm:px-2 w-full pt-20 sm:pt-10">
              <div className="flex flex-row w-full lg:gap-6 sm:gap-2 h-[250px]">
                <div className="flex flex-col rounded-lg shadow-2xl bg-blue-800 h-full w-full justify-evenly">
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">
                    5 <Translate contentKey="rate.yearVariable" />
                  </Text>
                  <Text className="text-6xl sm:text-2xl text-center font-bold text-white-A700">P-0.9%</Text>
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">
                    <Translate contentKey="rate.insured" />
                  </Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-blue-800 h-full w-full justify-evenly">
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">
                    5 <Translate contentKey="rate.yearVariable" />
                  </Text>
                  <Text className="text-6xl sm:text-2xl text-center font-bold text-white-A700">P-0.9%</Text>
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">
                    <Translate contentKey="rate.insurable" />
                  </Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-blue-800 h-full w-full justify-evenly">
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">
                    5 <Translate contentKey="rate.yearVariable" />
                  </Text>
                  <Text className="text-6xl sm:text-2xl text-center font-bold text-white-A700">P-0.15%</Text>
                  <Text className="text-3xl sm:text-lg text-center font-bold text-white-A700">
                    <Translate contentKey="rate.conventional" />
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer className="bg-gray-200 flex items-center justify-center mt-[120px] w-full" />
        </div>
      </div>
    </>
  );
};

export default RatesPage;
