import React from 'react';

import { Text } from '../../components';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Translate } from 'react-jhipster';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-chivo sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <Header className="flex items-center justify-center md:px-5 w-full" />
        <div className="flex flex-col items-center justify-start w-full">
          {/* Top */}
          <div className="flex flex-col gap-0 justify-start mx-auto w-9/12">
            {/* Title */}
            <div className="flex flex-col gap-0 items-center justify-start pb-3">
              <Text className="leading-[54.00px] sm:text-[34px] md:text-[40px] text-[50px] text-center text-blue-900 sm:w-full">
                <Translate contentKey="privacypolicy.title" />
              </Text>
              <Text className="text-[35px] md:text-[25px] sm:text-[25px] text-center mt-2 text-blue-900 w-full">
                <Translate contentKey="privacypolicy.subTitle" />
              </Text>
            </div>
            {/*  */}
            <div className="flex flex-col gap-2 items-start justify-start">
              {/* Section 1 */}
              <div className="flex flex-col text-left text-blue-900 w-full">
                <Text className="font-bold lg:text-2xl md:text-xl sm:text-xl">
                  <Translate contentKey="privacypolicy.section1.title" />
                </Text>
                <Text className="lg:text-lg md:text-sm sm:text-sm">
                  <Translate contentKey="privacypolicy.section1.content1" />
                </Text>
              </div>
              {/* Section 2 */}
              <div className="flex flex-col text-left text-blue-900 w-full">
                {/* Content 1 */}
                <Text className="font-bold lg:text-2xl md:text-xl sm:text-xl">
                  <Translate contentKey="privacypolicy.section2.title" />
                </Text>
                <Text className="lg:text-lg md:text-sm sm:text-sm">
                  <Translate contentKey="privacypolicy.section2.content1" />
                </Text>
                {/*  Sub Section  */}
                <ul className="list-disc list-inside">
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.section2.content1Sub1" />
                  </li>
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.section2.content1Sub2" />
                  </li>
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.section2.content1Sub3" />
                  </li>
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.section2.content1Sub4" />
                  </li>
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.section2.content1Sub5" />
                  </li>
                </ul>
                {/* Content 2 */}
                <Text className="lg:text-lg md:text-sm sm:text-sm">
                  <Translate contentKey="privacypolicy.section2.content2" />
                </Text>
              </div>
              {/* Section 3 */}
              <div className="flex flex-col text-left text-blue-900 w-full">
                <Text className="font-bold lg:text-2xl md:text-xl sm:text-xl">
                  <Translate contentKey="privacypolicy.section3.title" />
                </Text>
                <Text className="lg:text-lg md:text-sm sm:text-sm">
                  <Translate contentKey="privacypolicy.section3.content1" />
                </Text>
              </div>
              {/* Section 4 */}
              <div className="flex flex-col text-left text-blue-900 w-full">
                <Text className="font-bold lg:text-2xl md:text-xl sm:text-xl">
                  <Translate contentKey="privacypolicy.section4.title" />
                </Text>
                <Text className="lg:text-lg md:text-sm sm:text-sm">
                  <Translate contentKey="privacypolicy.section4.content1" />
                </Text>
              </div>
              {/* Section 5 */}
              <div className="flex flex-col text-left text-blue-900 w-full">
                <Text className="font-bold lg:text-2xl md:text-xl sm:text-xl">
                  <Translate contentKey="privacypolicy.section5.title" />
                </Text>
                <Text className="lg:text-lg md:text-sm sm:text-sm">
                  <Translate contentKey="privacypolicy.section5.content1" />
                </Text>
              </div>
              {/* Section 6 */}
              <div className="flex flex-col text-left text-blue-900 w-full">
                <Text className="font-bold lg:text-2xl md:text-xl sm:text-xl">
                  <Translate contentKey="privacypolicy.section6.title" />
                </Text>
                <Text className="lg:text-lg md:text-sm sm:text-sm">
                  <Translate contentKey="privacypolicy.section6.content1" />
                </Text>
              </div>
              {/* Section 7 */}
              <div className="flex flex-col text-left text-blue-900 w-full">
                <Text className="font-bold lg:text-2xl md:text-xl sm:text-xl">
                  <Translate contentKey="privacypolicy.section7.title" />
                </Text>
                <Text className="lg:text-lg md:text-sm sm:text-sm">
                  <Translate contentKey="privacypolicy.section7.content1" />
                </Text>
              </div>
              {/* Section 8 */}
              <div className="flex flex-col text-left text-blue-900 w-full">
                <Text className="font-bold lg:text-2xl md:text-xl sm:text-xl">
                  <Translate contentKey="privacypolicy.section8.title" />
                </Text>
                <Text className="lg:text-lg md:text-sm sm:text-sm">
                  <Translate contentKey="privacypolicy.section8.content1" />
                </Text>
              </div>
              {/* Privacy Policy */}
              <div className="flex flex-col text-left text-blue-900 w-full">
                {/* Content 1 */}
                <Text className="font-bold lg:text-2xl md:text-xl sm:text-xl">
                  <Translate contentKey="privacypolicy.bottomSection.title" />
                </Text>
                <Text className="lg:text-lg md:text-sm sm:text-sm">
                  <Translate contentKey="privacypolicy.bottomSection.content1" />
                </Text>
                {/*  Sub Section  */}
                <ul className="list-disc list-inside">
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.bottomSection.content1Sub1" />
                  </li>
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.bottomSection.content1Sub2" />
                  </li>
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.bottomSection.content1Sub3" />
                  </li>
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.bottomSection.content1Sub4" />
                  </li>
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.bottomSection.content1Sub5" />
                  </li>
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.bottomSection.content1Sub6" />
                  </li>
                  <li className="lg:text-lg md:text-sm sm:text-sm">
                    <Translate contentKey="privacypolicy.bottomSection.content1Sub7" />
                  </li>
                </ul>
                {/* Content 2 */}
                <Text className="lg:text-lg md:text-sm sm:text-sm">
                  <Translate contentKey="privacypolicy.bottomSection.content2" />
                </Text>
              </div>
            </div>
          </div>
          <Footer className="bg-gray-200 flex items-center justify-center mt-[120px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
