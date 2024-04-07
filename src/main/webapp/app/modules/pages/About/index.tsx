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
            <Img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="object-cover w-full h-full" />
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
            <div className="flex flex-col gap-0 items-center justify-start mb-3 px-3">
              <Text
                className="leading-[54.00px] sm:text-[34px] md:text-[40px] text-xl text-center text-blue-900 sm:w-full pt-8"
                size="txtChivoBold44"
              >
                <Translate contentKey="about.section1.title" />
              </Text>
              <div className="flex lg:flex-row md:flex-col sm:flex-col lg:w-9/12 sm:w-full pt-10 lg:gap-14 md:gap-3 sm:gap-3">
                <div className="flex flex-col lg:w-1/4 sm:w-full items-center">
                  <Img className="w-full" src="content/images/aboutus-connie.png" />
                </div>
                <div className="flex flex-col lg:w-3/4 sm:w-full lg:gap-4 sm:gap-2">
                  <div className="underline decoration-2">
                    <Text className="text-blue-900 text-4xl">
                      <Translate contentKey="about.section1.subTitle" />
                    </Text>
                  </div>
                  <Text className="text-blue-900 text-xl">
                    <Translate contentKey="about.section1.content1" />
                  </Text>
                  <Text className="text-blue-900 text-xl">
                    <Translate contentKey="about.section1.content2" />
                  </Text>
                  <Text className="text-blue-900 text-xl">
                    <Translate contentKey="about.section1.content3" />
                  </Text>
                </div>
              </div>
              <Text className="text-2xl text-center text-blue-900 lg:w-9/12 sm:w-full pt-10">
                <Translate contentKey="about.section1.note" />
              </Text>
              {/* Section 2 */}
              <div className="flex lg:flex-row md:flex-col sm:flex-col bg-gray-300 w-full lg:gap-2 mt-5">
                <div className="flex flex-col w-1/3 sm:w-full items-center">
                  <Img className="w-full" src="content/images/aboutus-img1.png" />
                </div>
                <div className="flex flex-col lg:gap-4 sm:gap-2 lg:w-1/3 sm:w-full lg:p-5 sm:p-3">
                  <Text className="text-blue-900 text-2xl">
                    <Translate contentKey="about.section2.subSection1.title" />
                  </Text>
                  <Text className="text-blue-900 text-lg">
                    <Translate contentKey="about.section2.subSection1.content1" />
                  </Text>
                  <Text className="text-blue-900 text-lg">
                    <Translate contentKey="about.section2.subSection1.content2" />
                  </Text>
                </div>
                <div className="flex flex-col lg:gap-4 sm:gap-2 lg:w-1/3 sm:w-full lg:p-5 sm:p-3">
                  <Text className="text-blue-900 text-2xl">
                    <Translate contentKey="about.section2.subSection2.title" />
                  </Text>
                  <Text className="text-blue-900 text-lg">
                    <Translate contentKey="about.section2.subSection2.content1" />
                  </Text>
                  <Text className="text-blue-900 text-lg">
                    <Translate contentKey="about.section2.subSection2.content2" />
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-200 flex items-center justify-center mt-[120px] w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
