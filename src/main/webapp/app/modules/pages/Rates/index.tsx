import React, { useEffect, useState } from 'react';

import { Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import rateConfig, { getEntity, searchEntities } from 'app/entities/rate-config/rate-config.reducer';
import { IRateConfig } from 'app/shared/model/rate-config.model';

const RatesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getRate();
  }, []);

  const getRate = () => {
    dispatch(getEntity('most-recent-rate'));
  };

  const rate = useAppSelector(state => state.rateConfig.entity) as IRateConfig;

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-chivo sm:gap-10 gap-10 items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full ">
          <div className="lg:w-9/12 md:w-10/12 sm:w-full">
            {/* Top */}
            <div className="flex flex-col gap-12 items-center justify-start mx-auto w-full px-8">
              <div className="flex flex-col gap-0 items-center justify-start mb-3">
                <Text
                  className="leading-[54.00px] sm:text-[34px] text-[50px] text-center text-blue-900 w-[80%] sm:w-full"
                  size="txtChivoBold44"
                >
                  <Translate contentKey="rate.title" />
                </Text>
                <Text
                  className="lg:text-[20px] md:text-[18px] sm:text-[18px] text-center mt-2 text-gray-500 w-full"
                  size="txtChivoRegular18Bluegray600"
                >
                  <Translate contentKey="rate.subTitle" />
                </Text>
              </div>
            </div>

            {/* Fix Rate */}
            <div className="flex flex-col lg:gap-6 md:gap-4 sm:gap-2 items-center lg:px-5 sm:px-2 w-full pt-10 sm:pt-5">
              <div className="flex flex-row rounded-lg shadow-2xl bg-white-A700 h-10 w-full lg:gap-6 md:gap-2 sm:gap-2">
                <div className="flex flex-col h-full w-full justify-center">
                  <Text
                    className="lg:text-3xl md:text-xl sm:text-sm text-center text-blue-900 w-full mt-3"
                    size="txtChivoRegular18Bluegray600"
                  ></Text>
                </div>
                <div className="flex flex-col h-full w-full justify-center">
                  <Text className="lg:text-3xl md:text-xl sm:text-sm text-center text-blue-900 w-full" size="txtChivoRegular18Bluegray600">
                    2 <Translate contentKey="rate.yearFix" />
                  </Text>
                </div>
                <div className="flex flex-col h-full w-full justify-center">
                  <Text className="lg:text-3xl md:text-xl sm:text-sm text-center text-blue-900 w-full" size="txtChivoRegular18Bluegray600">
                    3 <Translate contentKey="rate.yearFix" />
                  </Text>
                </div>
                <div className="flex flex-col h-full w-full justify-center">
                  <Text className="lg:text-3xl md:text-xl sm:text-sm text-center text-blue-900 w-full" size="txtChivoRegular18Bluegray600">
                    4 <Translate contentKey="rate.yearFix" />
                  </Text>
                </div>
                <div className="flex flex-col h-full w-full justify-center">
                  <Text className="lg:text-3xl md:text-xl sm:text-sm text-center text-blue-900 w-full" size="txtChivoRegular18Bluegray600">
                    5 <Translate contentKey="rate.yearFix" />
                  </Text>
                </div>
              </div>
              <div className="flex flex-row w-full lg:gap-6 md:gap-4 sm:gap-2 h-[300px]">
                <div className="flex flex-col rounded-lg shadow-2xl bg-white-A700 h-full w-full justify-evenly">
                  <Text className="lg:text-3xl md:text-xl sm:text-xs font-bold text-blue-700 text-right sm:text-center lg:pr-5 md:pr-2">
                    <Translate contentKey="rate.insured" />
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-xs font-bold text-blue-700 text-right sm:text-center lg:pr-5 md:pr-2">
                    <Translate contentKey="rate.insurable" />
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-xs font-bold text-blue-700 text-right sm:text-center lg:pr-5 md:pr-2">
                    <Translate contentKey="rate.conventional" />
                  </Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-[#3756A8] h-full w-full justify-evenly">
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.twoYearFixedInsured}
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.twoYearFixedInsurable}
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.twoYearFixedConventional}
                  </Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-[#3756A8] h-full w-full justify-evenly">
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.threeYearFixedInsurable}
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.threeYearFixedInsurable}
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.threeYearFixedConventional}
                  </Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-[#3756A8] h-full w-full justify-evenly">
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.fourYearFixedInsured}
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.fourYearFixedInsurable}
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.fourYearFixedConventional}
                  </Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-[#3756A8] h-full w-full justify-evenly">
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.fiveYearFixedInsured}
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.fiveYearFixedInsurable}
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    {rate.fiveYearFixedConventional}
                  </Text>
                </div>
              </div>
            </div>

            {/* Variable Rate */}
            <div className="flex flex-col lg:gap-6 md:gap-4 sm:gap-2 items-center lg:px-5 sm:px-2 w-full pt-20 sm:pt-10">
              <div className="flex flex-row w-full lg:gap-6 md:gap-4 sm:gap-2 h-[250px]">
                <div className="flex flex-col rounded-lg shadow-2xl bg-blue-800 h-full w-full justify-evenly">
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    5 <Translate contentKey="rate.yearVariable" />
                  </Text>
                  <Text className="lg:text-6xl md:text-4xl sm:text-2xl text-center font-bold text-white-A700">
                    {rate.fiveYearVariableInsured}
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    <Translate contentKey="rate.insured" />
                  </Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-blue-800 h-full w-full justify-evenly">
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    5 <Translate contentKey="rate.yearVariable" />
                  </Text>
                  <Text className="lg:text-6xl md:text-4xl sm:text-2xl text-center font-bold text-white-A700">
                    {rate.fiveYearVariableInsurable}
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    <Translate contentKey="rate.insurable" />
                  </Text>
                </div>
                <div className="flex flex-col rounded-lg shadow-2xl bg-blue-800 h-full w-full justify-evenly">
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
                    5 <Translate contentKey="rate.yearVariable" />
                  </Text>
                  <Text className="lg:text-6xl md:text-4xl sm:text-2xl text-center font-bold text-white-A700">
                    {rate.fiveYearVariableConventional}
                  </Text>
                  <Text className="lg:text-3xl md:text-xl sm:text-lg text-center font-bold text-white-A700">
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
