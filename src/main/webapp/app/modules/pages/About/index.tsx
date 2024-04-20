import React from 'react';

import { Img, Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-chivo items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center sm:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          {/* Top Image */}
          <div className="relative w-full h-60 overflow-hidden">
            <Img src="content/images/aboutus-top.png" alt="Avatar" className="object-cover w-full h-full" />
            <div className="absolute w-full py-2.5 top-1/4 inset-x-0">
              <Text className="text-white lg:text-7xl sm:text-[34px] md:text-[40px] text-center">
                <Translate contentKey="about.title" />
              </Text>
              <Text className="text-white lg:text-4xl sm:text-xl text-center">
                <Translate contentKey="about.subTitle" />
              </Text>
            </div>
          </div>
          {/* Section 1 */}
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-0 items-center justify-start mb-3 md:px-3 sm:px-3">
              <Text
                className="leading-[54.00px] sm:text-[34px] md:text-[40px] lg:text-[50px] text-xl text-center text-blue-900 sm:w-full pt-8"
                size="txtChivoBold44"
              >
                <Translate contentKey="about.section1.title" />
              </Text>
              <div className="flex lg:flex-row md:flex-row sm:flex-col lg:w-11/12 sm:w-full pt-10 lg:gap-24 md:gap-8 sm:gap-8">
                <div className="flex flex-col lg:w-1/4 md:w-1/2 sm:w-full items-center">
                  <Img className="w-full" src="content/images/aboutus-connie.png" />
                </div>
                <div className="flex flex-col lg:w-3/4 md:w-1/2 sm:w-full lg:gap-4 sm:gap-2">
                  <div className="underline decoration-2">
                    <Text className="text-blue-900 lg:text-4xl md:text-2xl sm:text-2xl">
                      <Translate contentKey="about.section1.subTitle" />
                    </Text>
                  </div>
                  <Text className="text-blue-900 text-2xl md:text-xl sm:text-lg">
                    <Translate contentKey="about.section1.content1" />
                  </Text>
                  <Text className="text-blue-900 text-2xl md:text-xl sm:text-lg">
                    <Translate contentKey="about.section1.content2" />
                  </Text>
                  <Text className="text-blue-900 text-2xl md:text-xl sm:text-lg">
                    <Translate contentKey="about.section1.content3" />
                  </Text>
                </div>
              </div>
              <Text className="lg:text-2xl md:text-xl sm:text-xl text-center text-blue-900 w-full pt-10">
                <Translate contentKey="about.section1.note" />
              </Text>
              {/* Section 2 */}
              <div className="flex lg:flex-row md:flex-row sm:flex-col bg-gray-300 w-full lg:gap-16 mt-5">
                <div className="flex flex-col lg:w-1/3 md:w-full sm:w-full items-center lg:hidden md:hidden">
                  <Img className="w-full" src="content/images/aboutus-img1.png" />
                </div>
                <div className="flex flex-col lg:gap-4 sm:gap-2 md:w-1/3 lg:w-1/3 sm:w-full lg:p-5 md:p-3 sm:p-3 lg:mt-16 lg:ml-10">
                  <Text className="text-blue-900 lg:text-3xl md:text-2xl sm:text-2xl">
                    <Translate contentKey="about.section2.subSection1.title" />
                  </Text>
                  <Text className="text-blue-900 lg:text-2xl md:text-lg sm:text-lg">
                    <Translate contentKey="about.section2.subSection1.content1" />
                  </Text>
                  <Text className="text-blue-900 lg:text-2xl md:text-lg sm:text-lg">
                    <Translate contentKey="about.section2.subSection1.content2" />
                  </Text>
                </div>
                <div className="flex flex-col lg:gap-4 sm:gap-2 md:w-1/3 lg:w-1/3 sm:w-full lg:p-5 md:p-3 sm:p-3 lg:mt-16 text-justify">
                  <Text className="text-blue-900 lg:text-3xl md:text-2xl sm:text-2xl">
                    <Translate contentKey="about.section2.subSection2.title" />
                  </Text>
                  <Text className="text-blue-900 lg:text-2xl md:text-lg sm:text-lg">
                    <Translate contentKey="about.section2.subSection2.content1" />
                  </Text>
                  <Text className="text-blue-900 lg:text-2xl md:text-lg sm:text-lg">
                    <Translate contentKey="about.section2.subSection2.content2" />
                  </Text>
                </div>
                <div className="hidden lg:flex md:flex flex-col lg:w-1/3 md:w-1/3 sm:w-full items-center">
                  <Img className="w-full" src="content/images/aboutus-img1.png" />
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-200 flex items-center justify-center lg:mt-[120px] w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
